import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';

const ItemDetailConteiner = () => {

    const [getItem, setGetItem] = useState([]);  

    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, nombre: 'Remera', marca:'Adidas' , precio:1100 , stock: 10, inicial: 1 , img:'', detalle:'Remera negra entallada'},
                {id: 2, nombre: 'Pantalon', marca:'Narrow' , precio:2200 , stock: 0, inicial: 1 , img:'', detalle:'Pantalon negro vaquero'},
                {id: 3, nombre: 'Pulsera', marca:'Biju' , precio:150 , stock: 4, inicial: 2 , img:'', detalle:'Pulsera bicolor con espaciadores'}
              ]);
        }, 2000); 
    });

// como no vimos todavia la clase de Routing para este desafio, dejo el item.id manual para buscar que producto quiero hacer el detail

    useEffect(() => {
        promesaProductos.then(res =>{
            let producto = res.filter(item => item.id === 1);
            setGetItem(producto[0]);
        });
    },[]);
    
    return (
        <>
            {getItem.length === 0 ?

                (<div className='loading show mt-5'><div className='spin'></div></div>)
                :
                (<div className='d-flex justify-content-center mt-5'> <ItemDetail Items={getItem} /> </div>)
            }
        </>
    )
};

export default ItemDetailConteiner