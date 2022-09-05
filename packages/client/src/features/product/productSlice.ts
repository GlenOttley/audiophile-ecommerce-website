import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { RootState } from '../../app/store'
import { IProduct } from '@audiophile/common/interfaces'

export interface IProductState {
  productList: IProduct[]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

export const initialState: IProductState = {
  productList: [],
  status: 'idle',
  error: null,
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data }: AxiosResponse = await axios.get('/api/products')
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

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'idle'
        state.productList = action.payload
      })
      .addCase(getProducts.rejected, (state, action: any) => {
        state.status = 'failed'
        if (action.payload) {
          state.error = action.payload.message
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const selectProducts = (state: RootState) => state.product
export default productSlice.reducer
