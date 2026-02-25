import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { Provider } from 'react-redux'
import {appStore,} from './redux/appStore.jsx'
const App = () => {
  return (
    <Provider className="container" store={appStore}>
    <Home/>
    </Provider>
  )
}

export default App
