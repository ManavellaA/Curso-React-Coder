import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const arrayElementsNavBar = [{item: 'Inicio', enlace:'/'},
                               {item: 'Ropa de dama', enlace:'/Tienda/Dama'},
                               {item: 'Ropa de hombre', enlace:'/Tienda/Hombre'},
                               {item: 'Accesorios', enlace:'/Tienda/Accesorios'},
                               {item: 'Contacto', enlace:'/Contacto'}];

  const brand = 'Ayelen Galvan'

  return (
    
    <BrowserRouter>
        
        <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />  

        <Switch>

            <Route exact path="/"> 
                <ItemListContainer />
            </Route>

            <Route path="/Tienda/:category">
                <ItemListContainer />
            </Route>

            <Route path="/Tienda/:category">
                <ItemListContainer />
            </Route>

            <Route path="/Tienda/:category">
                <ItemListContainer />
            </Route>

            <Route path="/Tienda/Item/:id">
                <ItemDetailContainer />
            </Route>

            <Route exact path="/Contacto">
              Contacto
            </Route>

        </Switch>
      
      </BrowserRouter>

    // <>
    // <ItemDetailContainer />
    // </>

  );
}
export default App;
