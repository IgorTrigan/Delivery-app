import { createSlice } from '@reduxjs/toolkit'

import { shopsGoods } from '../Constants/data'

const cartSlice = createSlice({
  name: 'cart',
  initialState:
    JSON.parse(localStorage.getItem('cart')).totalPrice > 0
      ? JSON.parse(localStorage.getItem('cart'))
      : {
          shopName: "Mc Donald's",
          totalPrice: 0,
          menu: shopsGoods,
        },
  reducers: {
    addGood(state, action) {
      state.totalPrice += action.payload.price
      state.menu[state.shopName][action.payload.id - 1].count += 1

      localStorage.setItem('cart', JSON.stringify(state))
    },
    removeGood(state, action) {
      state.totalPrice -= action.payload.price
      state.menu[state.shopName][action.payload.id - 1].count -= 1
      localStorage.setItem('cart', JSON.stringify(state))
    },
    changeShop(state, action) {
      state.shopName = action.payload
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export default cartSlice.reducer
export const { addGood, removeGood, changeShop } = cartSlice.actions
