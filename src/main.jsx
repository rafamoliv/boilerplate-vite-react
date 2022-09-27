import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Store from '@/store'
import { MyThemeProvider } from '@/styles'

import Routes from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <MyThemeProvider>
        <BrowserRouter>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes />
          </Suspense>
        </BrowserRouter>
      </MyThemeProvider>
    </Provider>
  </StrictMode>
)
