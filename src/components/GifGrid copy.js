import React, { useState , useEffect} from 'react';
  import PropTypes from 'prop-types';
  import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

  // Ejemplo de contador ++ en boton  const [count, setCount] = useState(0); // Estado para el contador, cambia cada vez que se clickea el boton
  const [images, setImages] = useState([]);

    useEffect( () => {
         getGifs(category).then(setImages); // Llamada a la funcion getGifs y se guarda en el estado images
    }, [ category ])
 
  


    //getGifs();
    
    return (
            <>
            <h3>{ category }</h3>
            <div className='card-grid'>
               
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key={img.id} 
                            {...img}    
                        />
                    ))
                }            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
