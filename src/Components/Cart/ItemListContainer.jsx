import React, {useState, useEffect} from 'react'
// import ItemCount from '../Count/ItemCount'
import ItemList from '../Items/ItemList'

const ItemListContainer = ({greeting}) => {

    const [arrayProductos, setArrayProductos] = useState([]);  
        
    const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
              {id: 1, nombre: 'Remera', Marca:'Adidas' , Precio:1100 , stock: 10},
              {id: 2, nombre: 'Pantalon', Marca:'Narrow' , Precio:2200 , stock: 2},
              {id: 3, nombre: 'Pulsera', Marca:'Biju' , Precio:150 , stock: 0},
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
            <p> {greeting} </p>
            {/* <ItemCount stock={0} inicial={1} nombre={'Pantalon'} /> */}
            <ItemList Productos={arrayProductos} />
        </>
    )
}

export default ItemListContainer
