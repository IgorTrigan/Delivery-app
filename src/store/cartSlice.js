import { createSlice } from '@reduxjs/toolkit'

import { shopsGoods } from '../Constants/data'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    shopName: "Mc Donald's",
    totalPrice: 0,
    menu: shopsGoods,
  },
  reducers: {
    addGood(state, action) {
      state.totalPrice += action.payload.price
      state.menu[state.shopName][action.payload.id - 1].count += 1
    },
    changeShop(state, action) {
      state.shopName = action.payload
    },
  },
})

export default cartSlice.reducer
export const { addGood, changeShop } = cartSlice.actions
