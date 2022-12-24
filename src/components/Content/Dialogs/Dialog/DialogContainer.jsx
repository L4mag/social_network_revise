import React from 'react'
import {
  addMessageActionCreator,
  handleAddMessageInputActionCreator,
} from '../../../../redux/store'
import Dialog from './Dialog'

const DialogContainer = ({ store }) => {
  const img = store.getState().dialogsPage.dialogs[0].img
  const messages =
    store.getState().dialogsPage.dialogs[0].messages
  const name = store.getState().dialogsPage.dialogs[0].name
  const newMessageText =
    store.getState().dialogsPage.newMessageText
  const dispatch = store.dispatch

  const addMessage = () => {
    dispatch(addMessageActionCreator())
  }

  const changeNewMessageText = (text) => {
    dispatch(handleAddMessageInputActionCreator(text))
    // handleAddMessageInput(inputRef.current.value)
  }

  return (
    <Dialog
      img={img}
      messages={messages}
      name={name}
      addMessage={addMessage}
      changeNewMessageText={changeNewMessageText}
      newMessageText={newMessageText}
    />
  )
}

export default DialogContainer
