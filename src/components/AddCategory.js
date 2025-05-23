import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategorias}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // Valida el enter para que no se refreshe la pagina
    const handleSubmit = (e) => {
        e.preventDefault();
       if(inputValue.trim().length > 2){
        setCategorias(categorias => [ inputValue, ...categorias]);
        setInputValue('');
       }
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text" 
                placeholder="Buscar " 
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}
 

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}




