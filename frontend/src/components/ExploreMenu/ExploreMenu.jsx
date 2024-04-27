import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sequi impedit quis amet, cum minus corrupti placeat, a voluptate, excepturi quam provident ipsum maiores porro!</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index)=>{
                return (
                    <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All": item.menu_name)} className="explore-menu-list-item">
                        <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu