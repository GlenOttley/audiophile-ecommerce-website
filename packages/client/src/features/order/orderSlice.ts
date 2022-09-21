import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { IOrder } from '@audiophile/common/interfaces'
import axios, { AxiosError } from 'axios'

interface IOrderState {
  order: IOrder
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

export const initialState: IOrderState = {
  order: {
    // items: [
    //   { _id: '632899547ebf58c060b3785e', quantity: 1 },
    //   { _id: '632899547ebf58c060b3785c', quantity: 2 },
    //   { _id: '632899547ebf58c060b3785b', quantity: 1 },
    // ],
  } as IOrder,
  status: 'idle',
  error: null,
}

export const createOrder = createAsyncThunk(
  'order/createOrder',
  async (order: IOrder, { getState, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(`/api/orders`, order, config)
      return data
    } catch (err: any) {
      let error: AxiosError<any> = err
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearOrder: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // CREATE INVOICE
      .addCase(createOrder.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.order = action.payload
        state.status = 'idle'
      })
      .addCase(createOrder.rejected, (state, action: any) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const selectOrder = (state: RootState) => state.order
export const { clearOrder } = orderSlice.actions

export default orderSlice.reducer
