import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import App from './App'
import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
const store = setupStore()
let persistor = persistStore(store)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
