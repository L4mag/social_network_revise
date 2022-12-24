import style from './App.module.scss'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import Provider from './StoreContext'
import ContentContainer from './components/Content/ContentContainer'

const App = ({ store }) => {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Provider store={store}>
          <Header />
          <Navbar />
          <ContentContainer />
        </Provider>
      </div>
    </BrowserRouter>
  )
}

export default App
