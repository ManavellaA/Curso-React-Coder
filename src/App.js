import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Cart/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './Components/Count/ItemCount';

function App() {

const arrayElementsNavBar = [{item: 'Inicio', enlace:'/home'},
                             {item: 'Ropa de dama', enlace:'/dama'},
                             {item: 'Ropa de hombre', enlace:'/hombre '},
                             {item: 'Accesorios', enlace:'/accesorios'},
                             {item: 'Contacto', enlace:'/contacto'}];

const brand = [{nombre:'Ayelen Galvan', enlace:'/contacto'}];

const stock = '4'

  return (
    <>
    <ItemCount stock={stock} /> 
      {/* <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />
      

      <ItemListContainer greeting='' /> */}
    
    </>
  );
}
export default App;
