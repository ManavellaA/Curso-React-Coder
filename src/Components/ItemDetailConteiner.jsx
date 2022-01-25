
import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailConteiner = () => {

    const [getItem, setGetItem] = useState([]);  

    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
              {id: 1, nombre: 'Camisa', marca:'Polo' , precio:4100 , stock: 10, inicial: 1, img: ''}
            ]);
        }, 2000); 
    });
    useEffect(() => {
        promesaProductos.then(res =>{
            setGetItem(res);
        });
    },[]);

    return (
        <>
            {getItem.length > 0 ?

                <ItemDetail Items={getItem} />
                :
                <h1>...Loading...</h1>
            }
        </>
    )
};

export default ItemDetailConteiner

