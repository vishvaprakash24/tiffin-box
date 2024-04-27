import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
            <a href='#footer' onClick={()=>setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <Link to='/cart'>
                <div className="navbar-cart-container">
                    <img src={assets.basket_icon} alt="" />
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
            </Link>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>


    </div>
  )
}

export default Navbar