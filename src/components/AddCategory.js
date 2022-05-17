import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorie}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
     setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    if (inputValue.trim().length > 2){
      setCategorie(cat => [ inputValue,...cat])
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
            value={inputValue} 
            onChange={ (e) => handleInputChange(e)}
        />
    </form>
  )
}

AddCategory.propTypes = {
  setCategorie: PropTypes.func.isRequired
}