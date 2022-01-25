import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [arrayProductos, setArrayProductos] = useState([]);  
        
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, nombre: 'Remera', marca:'Adidas' , precio:1100 , stock: 10, inicial: 1 , img:'', detalle:'Remera negra entallada'},
                {id: 2, nombre: 'Pantalon', marca:'Narrow' , precio:2200 , stock: 0, inicial: 1 , img:'', detalle:'Pantalon negro vaquero'},
                {id: 3, nombre: 'Pulsera', marca:'Biju' , precio:150 , stock: 4, inicial: 2 , img:'', detalle:'Pulsera bicolor con espaciadores'}
            ]);
        }, 2000); 
    });
    useEffect(() => {
        promesaProductos.then(res =>{
            setArrayProductos(res);
        });
    },[]);

    return (
        <>
            {/* <h1 className='d-flex align-self-center justify-content-center mt-3 mb-5' > {greeting} </h1> */}
            <ItemList Productos={arrayProductos} />
        </>
    )
}

export default ItemListContainer