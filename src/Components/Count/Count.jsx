import React, {useState, useContext} from 'react'
import { context } from '../Cart/CartContext';
import Controls from './Controls';


const Count = ({Items, onAdd, btnAux}) => {

  const { elementQuit } = useContext(context);

  const [contador, setContador] = useState(Items.stock <= 0 ? 0 : Items.inicial);

  const ClickAdd = () => setContador(contador < Items.stock ? contador + 1 : contador);
  const ClickSubtract = () => setContador(contador > Items.inicial ? contador - 1 : Items.inicial);
  const StockControl = Items.stock <= 0 ? 'Sin Stock' : contador;
  const ClickOnAdd = () => onAdd(Items, contador); 
  const disabledButton = Items.stock <= 0 ? "disabled btn btn-success" : "btn btn-success";
  const ClickQuit = () => elementQuit({...Items, cantidad: contador});
     
  return (
      <>
         <Controls ClickAdd={ClickAdd} ClickSubtract={ClickSubtract} StockControl={StockControl} ClickOnAdd={ClickOnAdd} disabledButton={disabledButton} ClickQuit={ClickQuit} btnAux={btnAux} />
      </>
  )
}
export default Count;