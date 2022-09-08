import React, { PropsWithChildren } from 'react'
// import '@testing-library/react/dont-cleanup-after-each'
import { render } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import type { PreloadedState } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { AppStore, RootState, setupStore } from '../app/store'
import { initialState as productInitialState } from '../features/product/productSlice'
import productTestData from '@audiophile/common/data/productTestData'
import { IProduct } from '@audiophile/common/interfaces'
import { MemoryRouter } from 'react-router-dom'
import { initialState as cartInitialState } from '../features/cart/cartSlice'
import { InitialEntry } from 'history'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
  route?: InitialEntry
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {
      product: {
        ...productInitialState,
        productList: productTestData as IProduct[],
      },
      cart: {
        ...cartInitialState,
      },
    },
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    )
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}
