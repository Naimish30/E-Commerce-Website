import logo from './logo.svg';
import './App.css';

import Headers from './Components/Headers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup'
import Protected from './Components/Protected';
import AboutUs from './Components/AboutUs';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';
import Information from './Components/Information';
import Products from './Components/Products';

function App() {
  return (

    <div className="App">
      <CartProvider>
      <BrowserRouter>   
      
      <Routes>
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/' element={<Protected Cmp={Home}/>}></Route>
      <Route path='/cart' element={<Protected Cmp={Cart}/>}></Route>
      <Route path='/aboutus' element={<Protected Cmp={AboutUs}/>}></Route>
      <Route path='/products' element={<Protected Cmp={Products}/>}></Route>
      <Route path='/getinfo' element={<Protected Cmp={Information}/>}></Route>

      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
