import React, { useContext, useRef } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../Assets/logo.png'
import cart_icon from '../../Assets/cart_icon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../../Context/ShopContext'
import nav_dropdown from '../../Assets/dropdown_icon.png'


function Navbar() {

    const[menu,setMenu]=useState("shop")
    const {getTotalCartItems}=useContext(ShopContext);
    const menuRef=useRef();
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
     
      <ul ref={menuRef} className="nav-menu">
        <li  onClick={()=> {setMenu("shop")}}><Link to='/'>SHOP</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=> {setMenu("men")}}><Link to='/mens'>MEN</Link> {menu==="men"?<hr/>:<></>}</li>
        <li  onClick={()=> {setMenu("womens")}}><Link to='/womens'>WOMEN</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li  onClick={()=> {setMenu("kid")}}><Link to='/kid'>KIDS</Link> {menu==="kid"?<hr/>:<></>}</li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>LogOut</button>:
        <Link to='/login'><button>LOGIN</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
