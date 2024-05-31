import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href="http://localhost:5173/"><img className ='logo' src ={assets.logo} alt="" /></a>
        <img className='profile' src={assets.profile_image} alt ="" />
    </div>
  )
}

export default Navbar