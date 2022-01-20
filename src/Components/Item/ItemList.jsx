import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = (props) => {

    return (
        <>  
            <div className='d-flex ms-5 me-5'>{props.Productos.map(element => <Item items={element}/> )}</div> 

            {/* En este IF de abajo no logro que se dispare el Loading y no entidno por que*/}

            {/* {props > 0 ? 
            
                <div className='d-flex ms-5 me-5'>{props.Productos.map(element => <Item items={element}/> )}</div> 
                
                : 
                
                <div className='loading show'><div className='spin'></div></div>} */}
        </>

    );
};

export default ItemList;
