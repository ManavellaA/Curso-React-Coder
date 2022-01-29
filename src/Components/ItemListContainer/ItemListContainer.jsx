import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const { category } = useParams();
    const [arrayProductos, setArrayProductos] = useState([]);  
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: 1, categoria: 'Hombre', nombre: 'Remera', marca:'Adidas' , precio:1100 , stock: 10, inicial: 2 , img:'https://www.digitalsport.com.ar/files/products/613139ab5c7bc-516590-500x500.jpg', detalle:'Remera negra entallada FitDry para Hombre'},
                {id: 2, categoria: 'Dama', nombre: 'Pantalon', marca:'Narrow' , precio:2200 , stock: 0, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/61bd23352ac14-576849-500x500.jpg', detalle:'Pantalon azul fibrana con cinturon Dama'},
                {id: 3, categoria: 'Accesorios', nombre: 'Bolso de viaje', marca:'Topper' , precio:3150 , stock: 4, inicial: 1 , img:'https://www.digitalsport.com.ar/files/products/61aa0762eccfa-572901-500x500.jpg', detalle:'Bolso de viaje XXL para Dama'},
            ]);
        }, 2000); 
    });
    useEffect(() => {
        promesaProductos.then(res =>{
            if (category > ''){
            let producto = res.filter(item => item.categoria === category);
            setArrayProductos(producto);
            }else{
            setArrayProductos(res)
            }
        });
    },);

    return (
        <div className='ms-4 me-4 mt-5'>
            <ItemList Productos={arrayProductos} />
        </div>
    )
}
export default ItemListContainer