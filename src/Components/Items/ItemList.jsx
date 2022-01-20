import React from 'react';
import Item from './Item';

const ItemList = (props) => {

    return (
        <>
            {props.Productos.map(element => <Item items={element}/> )}
        </>

    );
};

export default ItemList;
