import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {

    const [arrayProductos, setArrayProductos] = useState([]);  
        
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, nombre: 'Remera', marca:'Adidas' , precio:1100 , stock: 10, inicial: 2 , img:'https://www.digitalsport.com.ar/files/products/613139ab5c7bc-516590-500x500.jpg', detalle:'Remera negra entallada FitDry para Hombre'},
                {id: 2, nombre: 'Pantalon', marca:'Narrow' , precio:2200 , stock: 0, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/61bd23352ac14-576849-500x500.jpg', detalle:'Pantalon azul fibrana con cinturon Dama'},
                {id: 3, nombre: 'Bolso de viaje', marca:'Topper' , precio:3150 , stock: 4, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/61aa0762eccfa-572901-500x500.jpg', detalle:'Bolso de viaje XXL para Dama'},
            ]);
        }, 2000); 
    });
    useEffect(() => {
        promesaProductos.then(res =>{
            setArrayProductos(res);
        });
    },);

    return (
        <>
            <h1 className='d-flex align-self-center justify-content-center mt-3 mb-5' > {greeting} </h1>
            <ItemList Productos={arrayProductos} />
        </>
    )
}

export default ItemListContainer