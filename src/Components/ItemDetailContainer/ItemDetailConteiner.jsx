import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'


const ItemDetailConteiner = () => {
    const { id } = useParams();
    const [getItem, setGetItem] = useState([]);  
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, categoria: 'H',nombre: 'Remera', marca:'Adidas' , precio:1100 , stock: 2, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/613139ab5c7bc-516590-500x500.jpg', detalle:'Remera negra entallada FitDry para Hombre'},
                {id: 2, categoria: 'M',nombre: 'Pantalon', marca:'Narrow' , precio:2200 , stock: 0, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/61bd23352ac14-576849-500x500.jpg', detalle:'Pantalon azul fibrana con cinturon Dama'},
                {id: 3, categoria: 'A',nombre: 'Bolso de viaje', marca:'Topper' , precio:3150 , stock: 4, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/61aa0762eccfa-572901-500x500.jpg', detalle:'Bolso de viaje XXL para Dama'},
              ]);
        }, 0); 
    });
    useEffect(() => {
        promesaProductos.then(res =>{
            let producto = res.filter(item => item.id === Number(id));
            setGetItem(producto[0]);
        });
    },);
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