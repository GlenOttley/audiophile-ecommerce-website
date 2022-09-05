import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
} from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
