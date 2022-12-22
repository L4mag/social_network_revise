import React from 'react'
import style from './Header.module.scss'

const Header = () => {
  return (
    <header className={`${style.header} ${style.block}`}>
      <h1>Header</h1>
    </header>
  )
}

export default Header
