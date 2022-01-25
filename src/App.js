import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Item/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailConteiner';

function App() {

  const arrayElementsNavBar = [{item: 'Inicio', enlace:'/home'},
                               {item: 'Ropa de dama', enlace:'/dama'},
                               {item: 'Ropa de hombre', enlace:'/hombre '},
                               {item: 'Accesorios', enlace:'/accesorios'},
                               {item: 'Contacto', enlace:'/contacto'}];

  const brand = [{nombre:'Ayelen Galvan', enlace:'/contacto'}];

  return (
    <>
      <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />  
      {/* <ItemListContainer greeting='Bienvenido' /> */}
      <ItemDetailContainer />
    </>
  );
}
export default App;
