import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1 className='headtext__cormorant'>Delivery</h1>
      </div>
      <nav className='header__nav'>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/shoppingCart'>Shopping Cart</NavLink>
        <NavLink to='/history'>History</NavLink>
        <NavLink to='/coupons'>Coupons</NavLink>
      </nav>
    </div>
  )
}

export default Header
