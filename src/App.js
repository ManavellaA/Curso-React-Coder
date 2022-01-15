import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Cart/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const arrayElementsNavBar = [{item: 'Inicio', enlace:'/home'},
                             {item: 'Ropa de dama', enlace:'/dama'},
                             {item: 'Ropa de hombre', enlace:'/hombre '},
                             {item: 'Accesorios', enlace:'/accesorios'},
                             {item: 'Contacto', enlace:'/contacto'}];

const brand = [{nombre:'Ayelen Galvan', enlace:'/contacto'}];

const arrayOfProducts = [
  {nombre:'Remera', stock:'3'},
  {nombre:'Pantalon', stock:'5'},
  {nombre:'Pulsera', stock:'0'},
]

const arrayOfCart = []

  return (
    <>
      <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />

      <ItemListContainer greeting='Hola Ivan' arrayOfProducts={arrayOfProducts} />
    </>
  );
}
export default App;
