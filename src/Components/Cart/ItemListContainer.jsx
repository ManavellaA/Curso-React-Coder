import React from 'react'
import ItemCount from '../Count/ItemCount'

const ItemListContainer = ({greeting, arrayOfProducts}) => {

    

    return (
        <>
            <p> {greeting} </p>
            {arrayOfProducts.map(item => <ItemCount stock={item.stock} nombre={item.nombre} inicial={1} />)}
        </>
    )
}

export default ItemListContainer
