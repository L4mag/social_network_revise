import style from './App.module.scss'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import { BrowserRouter } from 'react-router-dom'

const App = ({ store }) => {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <Navbar />
        <Content store={store} />
      </div>
    </BrowserRouter>
  )
}

export default App
