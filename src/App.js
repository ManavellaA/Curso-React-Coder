import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Cart/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Prueba from './Components/PruebaFetch';

function App() {

const arrayElementsNavBar = [{item: 'Inicio', enlace:'/home'},
                             {item: 'Ropa de dama', enlace:'/dama'},
                             {item: 'Ropa de hombre', enlace:'/hombre '},
                             {item: 'Accesorios', enlace:'/accesorios'},
                             {item: 'Contacto', enlace:'/contacto'}];

const brand = [{nombre:'Ayelen Galvan', enlace:'/contacto'}];

const arrayOfProducts = [
  {nombre:'Remera', id:'15946', precio:'900' , stock:'3'},
  {nombre:'Pantalon', id:'23456', precio:'1600' , stock:'5'},
  {nombre:'Pulsera', id:'78258', precio:'400' , stock:'0'}
]

const inicial=(1)

const arrayOfCart = []

  return (
    <>
      <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />

      <ItemListContainer greeting='Hola Ivan' arrayOfProducts={arrayOfProducts} inicial={inicial} />
    
      {/* <Prueba /> */}
    </>
  );
}
export default App;
