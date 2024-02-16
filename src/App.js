import './App.css';
import Navbar from './Components/Assets/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Hero from './Components/Assets/Hero/Hero';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import ShopContextProvider from '../src/Context/ShopContext'
import Company from './Components/Footer/Company';
import About from './Components/Footer/About';
import Contact from './Components/Footer/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men" banner={men_banner}/>}/>
        <Route path='/womens' element={<ShopCategory category="women" banner={women_banner}/>}/>
        <Route path='/kid' element={<ShopCategory category="kid" banner={kids_banner}/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      {/* <Hero/> */}
    </div>
  );
}

export default App;
