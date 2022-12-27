import style from './App.module.scss'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Content from './components/Content/Content'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
  return (
    <div className={style.app_wrapper}>
      <HeaderContainer />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
