import React, { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ()=>{
    const [categorias, setCategorias] = useState( ['One Punch'])

 
    return (
        // Agrega nuevo valor a arreglo utilizando el useState
        <>
            <h2>GifExpertApp</h2>
            {/* Envia el valor de la funcion setCategorias al componente AddCategory 
                 Llamara el imput de AddCategory y enviara el valor a setCategorias */}
           <AddCategory setCategorias={setCategorias}/> 
            <hr></hr> 
            <ol>
               {
                    categorias.map(category => {
                        return <GifGrid key={category} category={category}/>
                    })
               }
            </ol>
        </>
    )
}

export default GifExpertApp