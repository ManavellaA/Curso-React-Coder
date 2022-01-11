import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';'; 

function App() {

const arrayElementsNavBar = ['Inicio','Ropa de dama','Ropa de hombre','Accesorios','Contacto']

  return (
    <>
    
    <NavBar arrayElementsNavBar={arrayElementsNavBar} />

    <ItemListContainer />
    
    </>
  );
}
export default App;
