import { createSlice } from '@reduxjs/toolkit'

import { storeGoods } from '../Constants/data'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isEmptyCart: true,
    shopName: "Mc Donald's",
    totalPrice: 0,
    menu: storeGoods,
  },
  reducers: {
    addGood(state, action) {
      state.isEmptyCart = false
      state.totalPrice += action.payload.price
      state.menu[state.shopName][action.payload.id - 1].count += 1
    },
  },
})

export default cartSlice.reducer
export const { addGood } = cartSlice.actions
