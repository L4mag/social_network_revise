import React from 'react'
import style from './Avatar.module.scss'

const Avatar = ({ img }) => {
  return (
    <div className={style.avatar}>
      <img src={img} alt='Avatar' />
    </div>
  )
}

export default Avatar
