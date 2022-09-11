import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@audiophile/common/interfaces'
import { RootState } from '../../app/store'

export interface ICartItem {
  _id: string
  quantity: number
}

export interface ICartProduct extends IProduct {
  quantity: number
}

export interface ICartState {
  cartItems: ICartItem[]
}

export const initialState: ICartState = {
  cartItems: [],
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
  },
})

export const selectCart = (state: RootState) => state.cart
export const { addCartItem, updateCartItemQuantity, clearCart } =
  cartSlice.actions
export default cartSlice.reducer
