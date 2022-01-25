import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = (props) => {

    return (
        <>  

            {props.Productos.length > 0 ? 
            
                (<div className='d-flex ms-5 me-5'>{props.Productos.map(element => <Item items={element}/> )}</div>) 
                
                : 
                
                (<div className='loading show'><div className='spin'></div></div>)}
        </>

    );
};

export default ItemList;
