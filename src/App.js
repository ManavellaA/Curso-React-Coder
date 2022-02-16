import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './Components/Cart/CartContext';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailConteiner';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import BuyForm from "./Components/Cart/BuyForm";
import CartIcon from './Components/Cart/CartIcon';

function App() {

  const arrayElementsNavBar = [{item: 'Inicio', enlace:'/'},
                               {item: 'Ropa de dama', enlace:'/Tienda/Dama'},
                               {item: 'Ropa de hombre', enlace:'/Tienda/Hombre'},
                               {item: 'Accesorios', enlace:'/Tienda/Accesorios'},
                               {item: 'Contacto', enlace:'/Contacto'}];

  const brand = 'Ayelen Galvan'

  return (
    <CartContext>
      <BrowserRouter>
        <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} /> 
        <Switch>

            <Route exact path='/'> 
                <ItemListContainer /> 
            </Route>
  
            <Route exact path='/Tienda/:category'>
                <ItemListContainer />
            </Route>
  
            <Route exact path='/Tienda/Item/:id'>
                <ItemDetailContainer />
            </Route>
  
            <Route exact path='/Compra'>
              <BuyForm />
            </Route>           

        </Switch>
      <CartIcon /> 
      </BrowserRouter>
    </CartContext>
  );
}
export default App;
