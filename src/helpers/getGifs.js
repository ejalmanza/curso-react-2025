export const getGifs = async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=rtZzXsOSUxj6ISQABvlaGKk7iW21DEtR&q=${ encodeURI(category)}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json(); // Desestructuracion de la respuesta de la API

    // Mapeo de los datos de la {data} para obtener los datos de las imagenes
    const gifs = data.map(img => {
        return {
            id: img.id, 
            title: img.title, 
            url: img.images?.downsized_medium.url
        }
    })
     return gifs;
}