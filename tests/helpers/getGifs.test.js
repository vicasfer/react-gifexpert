import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
    
    test('debe retornar un arreglo de gifs', async () => {
        // Arrange
        const category = 'One Punch';
        
        // Mock de la respuesta del fetch
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve({
                data: [
                    {
                        id: 'ABC123',
                        title: 'Saitama',
                        images: {
                            downsized_medium: {
                                url: 'https://media.giphy.com/saitama.gif'
                            }
                        }
                    },
                    {
                        id: 'DEF456',
                        title: 'Goku',
                        images: {
                            downsized_medium: {
                                url: 'https://media.giphy.com/goku.gif'
                            }
                        }
                    }
                ]
            })
        });
        
        // Act
        const gifs = await getGifs(category);
        
        // Assert
        expect(gifs.length).toBe(2);
        expect(gifs[0]).toEqual({
            id: 'ABC123',
            title: 'Saitama',
            url: 'https://media.giphy.com/saitama.gif'
        });
        expect(gifs[1]).toEqual({
            id: 'DEF456',
            title: 'Goku',
            url: 'https://media.giphy.com/goku.gif'
        });
        
        // Verificar que fetch fue llamado con la URL correcta
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith(
            `https://api.giphy.com/v1/gifs/search?api_key=Xetdy6dxwO9mNEkZz5dk4EJMDGHQrZF5&q=${category}&limit=10`
        );
    });
    
    test('debe retornar un arreglo vacío si no se encuentra la categoría', async () => {
        // Arrange
        const category = 'CategoríaInexistente123456';
        
        // Mock de la respuesta del fetch con data vacía
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve({ data: [] })
        });
        
        // Act
        const gifs = await getGifs(category);
        
        // Assert
        expect(gifs.length).toBe(0);
        expect(gifs).toEqual([]);
    });
});