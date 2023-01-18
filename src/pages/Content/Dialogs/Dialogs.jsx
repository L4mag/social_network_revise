import React from 'react'
import style from './Dialogs.module.scss'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = ({ dialogs }) => {
  return (
    <div className={style.dialogs}>
      {dialogs.map((dialog) => {
        return (
          <NavLink to={`${dialog.id}`}>
            <DialogItem
              name={dialog.name}
              message={
                dialog.messages[dialog.messages.length - 1]
              }
              img={dialog.img}
            />
          </NavLink>
        )
      })}
    </div>
  )
}

export default Dialogs
