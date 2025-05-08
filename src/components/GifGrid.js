// import React, { useState , useEffect} from 'react';
import React  from 'react';
  import PropTypes from 'prop-types';
  import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

export const GifGrid = ({ category }) => {

const { data:images, loading } = useFetchGifs(category);
// console.log(loading);

  // Ejemplo de contador ++ en boton  const [count, setCount] = useState(0); // Estado para el contador, cambia cada vez que se clickea el boton
//   const [images, setImages] = useState([]);

//     useEffect( () => {
//          getGifs(category).then(setImages); // Llamada a la funcion getGifs y se guarda en el estado images
//     }, [ category ])
 
  


    //getGifs();
    
    return (
            <>
            <h3>{ category }</h3>
            { loading && <p className='animate__animated animate__flash'>Cargando...</p>}
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
