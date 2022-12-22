import React from 'react'
import style from './Info.module.scss'

const Info = () => {
  return (
    <div className={`${style.info}`}>
      <h3>Sergey Savchuk</h3>
      <div>
        <div>22 years</div>
        <div>Moscow, Russia</div>
        <div>Music, Computer Science</div>
      </div>
    </div>
  )
}

export default Info
