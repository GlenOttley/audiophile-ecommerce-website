import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@audiophile/common/interfaces'
import { RootState } from '../../app/store'

interface ICartItem {
  productId: string
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
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      )

      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.cartItems.push(action.payload)
      }
    },
  },
})

export const selectCart = (state: RootState) => state.cart
export const { addCartItem } = cartSlice.actions
export default cartSlice.reducer
