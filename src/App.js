import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Cart/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/Count/ItemCount';
import Prueba from './Components/PruebaFetch';

function App() {

const arrayElementsNavBar = [{item: 'Inicio', enlace:'/home'},
                             {item: 'Ropa de dama', enlace:'/dama'},
                             {item: 'Ropa de hombre', enlace:'/hombre '},
                             {item: 'Accesorios', enlace:'/accesorios'},
                             {item: 'Contacto', enlace:'/contacto'}];

const brand = [{nombre:'Ayelen Galvan', enlace:'/contacto'}];

const stock = 1

  return (
    <>

    {/* <Prueba /> */}

    <ItemCount stock={stock} /> 
      {/* <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />
      

      <ItemListContainer greeting='' /> */}
    
    </>
  );
}
export default App;
