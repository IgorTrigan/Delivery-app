import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeShop } from '../../store/cartSlice'
import Button from '../../UI/button/Button'

import './SideBarShops.css'

const SideBarShops = () => {
  const dispatch = useDispatch()
  const store = useSelector((state) => state.cart)
  let isEmptyCart = store.totalPrice === 0
  function oderGoods(shop) {
    isEmptyCart && store.shopName !== shop && dispatch(changeShop(shop))
  }

  return (
    <div className='shop__items'>
      <h2>Choose your favorite store</h2>
      {Object.keys(store.menu).map((shop, index) => (
        <Button
          shop={shop}
          key={index + shop}
          btn_Cls='btn_shop_Cls'
          onClick={() => oderGoods(shop)}
        >
          {shop}
        </Button>
      ))}
      {}
    </div>
  )
}

export default SideBarShops
