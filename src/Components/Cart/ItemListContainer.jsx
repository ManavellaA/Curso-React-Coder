import React from 'react'
import ItemCount from '../Count/ItemCount'

const ItemListContainer = ({greeting, arrayOfProducts, inicial}) => {

    

    return (
        <>
            <p> {greeting} </p>
            {arrayOfProducts.map(item => <ItemCount stock={item.stock} nombre={item.nombre} inicial={inicial} />)}
        </>
    )
}

export default ItemListContainer
