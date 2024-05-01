import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>
                Delicious 
            </h2>
            <h3>Food Menu</h3>
            <p>Order Foods from our website!</p>
            <a href="#explore-menu"><button>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header