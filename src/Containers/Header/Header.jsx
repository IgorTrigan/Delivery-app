import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1 className='headtext__cormorant'>Delivery</h1>
      </div>
      <nav className='header__nav'>
        <Link to='/shop'>Shop</Link>
        <Link to='/shoppingCart'>Shopping Cart</Link>
        <Link to='/history'>History</Link>
        <Link to='/coupons'>Coupons</Link>
      </nav>
    </div>
  )
}

export default Header
