import React from 'react'

import classNames from 'classnames'

import './Button.css'
import cartSlice from '../../store/cartSlice'
import { useSelector } from 'react-redux'

const Button = ({
  children,
  onClick,
  btn_Cls,
  shop,
  btn_card,
  disabled = false,
}) => {
  const store = useSelector((store) => store.cart)

  let active = store.shopName === shop && 'active'
  const classes = classNames('custom__button', btn_Cls, btn_card, active)

  return (
    <button disabled={disabled} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
