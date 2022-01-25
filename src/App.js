import './App.css';
import NavBar from "./Components/NavBar/NavBar"; 
import ItemListContainer from "./Components/Item/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailConteiner';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {

  const arrayElementsNavBar = [{item: 'Inicio', enlace:'/home'},
                               {item: 'Ropa de dama', enlace:'/dama'},
                               {item: 'Ropa de hombre', enlace:'/hombre '},
                               {item: 'Accesorios', enlace:'/accesorios'},
                               {item: 'Contacto', enlace:'/contacto'}];

  const brand = [{nombre:'Ayelen Galvan', enlace:'/contacto'}];

  return (
    
      <BrowserRouter>
        
        <NavBar arrayElementsNavBar={arrayElementsNavBar} brand={brand} />  
        
        <Switch>
        
          <ItemListContainer greeting='Bienvenido' exact path="/" />
          <ItemDetailContainer />
        
        </Switch>
      
      </BrowserRouter>
  );
}
export default App;
