import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Item/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {

  const arrayElementsNavBar = [{item: 'Inicio', enlace:'/'},
                               {item: 'Ropa de dama', enlace:'/Ropa_de_Dama'},
                               {item: 'Ropa de hombre', enlace:'/Ropa_de_Hombre'},
                               {item: 'Accesorios', enlace:'/Accesorios'},
                               {item: 'Contacto', enlace:'/Contacto'}];

  const brand = 'Ayelen Galvan'

  return (
    
    // {/* <ItemDetailContainer /> */}
    <BrowserRouter>
        
        <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />  

        <Switch>

            <Route exact path="/"> 
                <ItemListContainer greeting='Bienvenido a mi Tienda' />
            </Route>

            <Route exact path="/Ropa_de_Dama">
                <ItemListContainer greeting='Ropa de Damas' />
            </Route>

            <Route exact path="/Ropa_de_Hombre">
                <ItemListContainer greeting='Ropa de Hombres' />
            </Route>

            <Route exact path="/Accesorios">
                <ItemListContainer greeting='Accesorios' />
            </Route>

            <Route exact path="/Contacto">
              Contacto
            </Route>

        </Switch>
      
      </BrowserRouter>
  );
}
export default App;
