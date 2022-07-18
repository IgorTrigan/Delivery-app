import React from 'react'

import classNames from 'classnames'

import './Button.css'
import cartSlice from '../../store/cartSlice'
import { useSelector } from 'react-redux'

const Button = ({ children, onClick, btn_shop_Clc, shop }) => {
  const store = useSelector((store) => store.cart)
  console.log(store.shopName, shop)
  let active = store.shopName === shop && 'active'
  const classes = classNames('custom__button', btn_shop_Clc, active)

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
