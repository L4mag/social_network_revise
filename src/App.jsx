import style from './App.module.scss'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Content from './components/Content/Content'

const App = () => {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
