import './App.css';
import NavBar from "./Components/NavBar/NavBar"

function App() {

const arrayElementsNavBar = ['Inicio','Ropa de dama','Ropa de hombre','Accesorios','Contacto']

  return (
    <>
    <NavBar arrayElementsNavBar={arrayElementsNavBar} />

    </>
  );
}
export default App;
