import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
// import PropTypes from 'prop-types'

export const GifExpertApp = () => {
  
  const [categories, setCategorie] = useState(['Samurai X'])

  return (
      <>

      <h2>GifExpertApp</h2>
      <AddCategory setCategorie={ setCategorie }/>
      <hr />

        <ol>
           { 
            categories.map( (category) => <GifGrid category={category} key={category}/>)
           }
        </ol>

      </>
    )
}
