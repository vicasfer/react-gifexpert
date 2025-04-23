import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });
    
    test('debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    
    test('debe mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    });
    
    test('debe dar error si no recibe las props requeridas', () => {
        // Silenciamos los errores de consola para esta prueba
        const originalError = console.error;
        console.error = jest.fn();
        
        // Verificamos que se lance error al no proporcionar props
        expect(() => {
            render(<GifItem />);
        }).toThrow();
        
        // Verificamos que se lance error al proporcionar solo title
        expect(() => {
            render(<GifItem title={title} />);
        }).toThrow();
        
        // Verificamos que se lance error al proporcionar solo url
        expect(() => {
            render(<GifItem url={url} />);
        }).toThrow();
        
        // Restauramos console.error
        console.error = originalError;
    });
});