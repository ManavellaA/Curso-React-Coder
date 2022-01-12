import React, {useState}  from 'react';
import './ItemCount.css';

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);
    const ClickAdd = () => setContador(contador + 1);
    const ClickSubtract = () => setContador(contador - 1);
    // const ClickSend = () => stock >= contador ?  : setContador(1);

    return (
        <>
            <div className="div__buttons">
                <h1 className={stock >= contador ? 'menor' : 'mayor'}>Unidades: {contador}</h1>  
                <div>
                    <button onClick={ClickSubtract} className="btn btn-success">-</button>
                    <button onClick={ClickAdd} className="btn btn-success">+</button>
                </div>
                <div>
                    {/* <button onClick={ClickSend} className="btn btn-success">Agregar al Carrito</button> */}
                </div>
            </div>
        </>
    )
}

export default ItemCount
