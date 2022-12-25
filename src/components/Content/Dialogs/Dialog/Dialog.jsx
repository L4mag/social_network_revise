import React from 'react'
import style from './Dialog.module.scss'
import { NavLink } from 'react-router-dom'

const Dialog = ({
  img,
  messages,
  name,
  addMessage,
  handleAddMessageInput,
  newMessageText,
}) => {
  const handleAddMessage = () => {
    addMessage()
  }

  const handleNewMessageText = (e) => {
    handleAddMessageInput(e.target.value)
  }

  return (
    <div className={`${style.item}`}>
      <div className={`${style.back}`}>
        <NavLink to='/dialogs'>
          <span>{`< `} </span>
          Back
        </NavLink>
      </div>
      <div className={`${style.name}`}>{name}</div>
      <img src={`${img}`} alt={`${name}`} />
      <hr className={`${style.line}`} />

      {messages.map((message) => (
        <div className={`${style.message}`}>{message}</div>
      ))}

      <div>
        <textarea
          value={newMessageText}
          onChange={handleNewMessageText}
          rows='1'
          type='text'
        />
        <button onClick={handleAddMessage}>
          New Message
        </button>
      </div>
    </div>
  )
}

export default Dialog
