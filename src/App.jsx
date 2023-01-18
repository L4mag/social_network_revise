import style from './App.module.scss'
import React, { useEffect } from 'react'
import Navbar from './pages/Navbar/Navbar'
import Content from './pages/Content/Content'
import HeaderContainer from './pages/Header/HeaderContainer'
import Login from './pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { authMe } from './redux/reducers/authReducer'

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authMe())
  }, [])

  if (!isAuth) {
    return (
      <div className={style.app_wrapper}>
        <Login />
      </div>
    )
  }
  return (
    <div className={style.app_wrapper}>
      <HeaderContainer />
      <Navbar />
      <Content />
    </div>
  )
}

export default App
