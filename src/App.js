import React from 'react'

import { Provider } from 'react-redux'
import store from './store'
import AppRouter from './router'
import './styles/common.less'

console.log(process.env)

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

export default App
