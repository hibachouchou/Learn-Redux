
import {BrowserRouter , Route, Routes} from 'react-router-dom' ;
import Navbar from './Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import CatDetails from './Elements/CatDetails';
import store from './Store/store';
import { Provider } from 'react-redux';

function App() {


    return (
<div >
<Provider store={store}>
<BrowserRouter>
<Navbar/>
<Routes>
<Route element={<Home/>} exact path='/Home'/>
<Route element={<Products/>} exact path='/Products'/>
<Route element={<Cart/>} exact path='/Cart'/>
<Route element={<CatDetails/>} exact path='/CatDetails/:id'/>
</Routes>
</BrowserRouter>
</Provider>
  </div>
    );
      }


export default App;
