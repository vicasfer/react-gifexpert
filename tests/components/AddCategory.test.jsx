import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
    
    test('debe requerir la prop onNewCategory', () => {
        // Silenciamos los errores de consola para esta prueba
        const originalError = console.error;
        console.error = jest.fn();
        
        // Verificamos que se lance un error cuando no se proporciona onNewCategory
        expect(() => {
            render(<AddCategory />);
        }).toThrow('AddCategory requiere la propiedad onNewCategory');
        
        // Restauramos console.error
        console.error = originalError;
    });
    
    test('debe cambiar el valor de la caja de texto', () => {
        // Arrange
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        
        // Act
        fireEvent.change(input, { target: { value: 'Saitama' } });
        
        // Assert
        expect(input.value).toBe('Saitama');
    });
    
    test('debe llamar onNewCategory si el input tiene un valor', () => {
        // Arrange
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        
        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        // Act
        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        
        // Assert
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });
    
    test('no debe llamar onNewCategory si el input está vacío', () => {
        // Arrange
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const form = screen.getByRole('form');
        
        // Act
        fireEvent.submit(form);
        
        // Assert
        expect(onNewCategory).not.toHaveBeenCalled();
    });
    
    test('no debe llamar onNewCategory si el input tiene solo un carácter', () => {
        // Arrange
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        // Act
        fireEvent.change(input, { target: { value: 'a' } });
        fireEvent.submit(form);
        
        // Assert
        expect(onNewCategory).not.toHaveBeenCalled();
    });
});