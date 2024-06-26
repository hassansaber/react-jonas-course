import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [
    // {
    //   pizzaId: 12,
    //   name: 'Mediterranean',
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32
    // }
  ]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // newItem = payload
      state.cart.push(action.payload)
    },
    deleteItem(state, action) {
      // pizzaId = payload
      state.cart = state.cart.filter(
        item => item.pizzaId !== action.payload)
    },
    increaseItemQuantity(state, action) {
      // pizzaId = payload
      const item = state.cart.find(
        item => item.pizzaId === action.payload)

      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice

    },
    decreaseItemQuantity(state, action) {
      // pizzaId = payload
      const item = state.cart.find(
        item => item.pizzaId === action.payload)

      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice

      if (item.quantity === 0) //caseReducers :  use another reducer inside a reducer
        cartSlice.caseReducers.deleteItem(state, action)
    },
    clearCart(state) {
      state.cart = []
    },
  }
})


export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart } = cartSlice.actions

export default cartSlice.reducer


// SELECTORS

// get...  = get before selector name
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) =>
    sum + item.totalPrice, 0)

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) =>
    sum + item.quantity, 0)

export const getCart = (state) => state.cart.cart

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find(item =>
    id === item.pizzaId)?.quantity ?? 0

// reslect lib = organize selectors