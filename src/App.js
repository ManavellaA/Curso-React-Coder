import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartContext from './Components/Cart/CartContext';
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailConteiner';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import BuyForm from "./Components/Cart/BuyForm";
import CartWidget from './Components/Cart/CartWidget';

function App() {

  const arrayElementsNavBar = [
  { id: 1, item: 'Inicio', enlace: '/' },
  { id: 2, item: 'Ropa de dama', enlace: '/Tienda/Dama' },
  { id: 3, item: 'Ropa de hombre', enlace: '/Tienda/Hombre' },
  { id: 4, item: 'Accesorios', enlace: '/Tienda/Accesorios' }
  ];

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
        <CartWidget />
        <Footer />
      </BrowserRouter>
    </CartContext>
  );
}
export default App;
