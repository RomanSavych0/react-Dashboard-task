import './index.css'

import * as serviceWorker from './serviceWorker'

import * as ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import React from 'react'

import App from './App'

import { Provider } from 'react-redux'

import store from './strore/redux-store'

import * as dotenv from 'dotenv'

dotenv.config()

console.log(process.env.REACT_APP_API_KEY)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
)

serviceWorker.unregister()
