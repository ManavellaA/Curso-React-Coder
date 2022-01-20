import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    console.log(props.Productos);
    
    return (
        <>
            {props.Productos.map(element => <Item id={element.id} nombre={element.nombre} marca={element.marca} precio={element.precio} stock={element.stock}/> )}
        </>

    );
};

export default ItemList;
