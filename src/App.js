import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './Component/Products';
import Product from './Component/Product';
import Cart from './Component/Cart';

function App() {
  return (

    <>
      <Navbar />


      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/products' Component={Products} />
        <Route path='/products/:id' Component={Product}/>
        {/* <Route path='/Cart' Component={Cart}/> */}
      </Routes>





    </>

  );
}

export default App;
