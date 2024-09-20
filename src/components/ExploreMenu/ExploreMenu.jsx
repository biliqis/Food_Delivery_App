import React from 'react'
import { menu_list } from "../../assets/assets/assets/assets";

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
  <h1>Choose Different Menu</h1>
      <p className="choose-menu-text">
         our diverse menu, showcasing a delightful selection of dishes
        made with the finest ingredients. Indulge your cravings and enhance your
        <br></br>
        dining experience, one exquisite meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map(()=>{})}
      </div>

    </div>
  )
}

export default ExploreMenu