import React from 'react'
import style from './Dialog.module.scss'
import { NavLink } from 'react-router-dom'

const Dialog = ({
  data,
  addMessage,
  handleAddMessageInput,
}) => {
  console.log(data)

  const img = data.dialogs[0].img
  const messages = data.dialogs[0].messages
  const name = data.dialogs[0].name

  const inputRef = React.createRef()

  const handleClick = () => {
    addMessage()
  }

  const handleChange = () => {
    handleAddMessageInput(inputRef.current.value)
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
          value={data.newMessageText}
          onChange={handleChange}
          ref={inputRef}
          rows='1'
          type='text'
        />
        <button onClick={handleClick}>New Message</button>
      </div>
    </div>
  )
}

export default Dialog
