import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import productReducer from '../features/product/productSlice'
import cartReducer from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  order: orderReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
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
