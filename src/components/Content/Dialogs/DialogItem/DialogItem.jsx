import React from 'react'
import style from './DialogItem.module.scss'

const DialogItem = ({ img, name, message }) => {
  return (
    <div className={`${style.item}`}>
      <img src={`${img}`} alt={`${name}`} />
      <div className={`${style.name}`}>{name}</div>
      <br />
      <div className={`${style.message}`}>{message}</div>
    </div>
  )
}

export default DialogItem
