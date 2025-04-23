import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
    // Validación de props requeridas que lanza error
    if (!onNewCategory) {
        throw new Error('AddCategory requiere la propiedad onNewCategory');
    }

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length <= 1) return; 
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit} aria-label="form">

    <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
      
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
