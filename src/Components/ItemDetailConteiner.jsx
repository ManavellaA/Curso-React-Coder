
import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailConteiner = () => {

  const [arrayProductos, setArrayProductos] = useState([]);  
  
    useEffect(() => {
        
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
        })

    });

    return (
        <>
            {/* <p>{arrayProductos}</p> */}
            {/* <ItemDetail Productos={arrayProductos} /> */}

        </>
    )
};

export default ItemDetailConteiner

