import {
  ICartProduct,
  IProduct,
  ICartItem,
} from '@audiophile/common/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export interface ICartState {
  cartItems: ICartItem[]
}

export const initialState: ICartState = {
  cartItems: [
    // { _id: '632899547ebf58c060b3785e', quantity: 1 },
    // { _id: '632899547ebf58c060b3785c', quantity: 2 },
    // { _id: '632899547ebf58c060b3785b', quantity: 1 },
  ],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: () => initialState,
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      )

      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.cartItems.push(action.payload)
      }
    },
    updateCartItemQuantity: (state, action: PayloadAction<ICartItem>) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      )
    },
  },
})

export const getCartProducts = (
  cartItems: ICartItem[],
  productList: IProduct[]
): ICartProduct[] => {
  return cartItems.map((item) => ({
    ...productList.find((product) => product._id === item._id),
    ...(item as ICartProduct),
  }))
}

export const getCartTotal = (cartProducts: ICartProduct[]) => {
  return cartProducts.reduce((acc, item) => acc + item.quantity * item.price, 0)
}

export const getCartVat = (cartProducts: ICartProduct[]) => {
  return (getCartTotal(cartProducts) * 0.2).toFixed(2)
}

export const getCartGrandTotal = (cartProducts: ICartProduct[]) => {
  return (getCartTotal(cartProducts) + 50).toFixed(2)
}

export const selectCart = (state: RootState) => state.cart
export const {
  addCartItem,
  updateCartItemQuantity,
  removeCartItem,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
