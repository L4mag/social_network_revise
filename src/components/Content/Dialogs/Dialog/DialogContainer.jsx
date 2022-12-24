import React from 'react'
import {
  addMessageActionCreator,
  handleAddMessageInputActionCreator,
} from '../../../../redux/store'
import Dialog from './Dialog'
import { StoreContext } from '../../../../StoreContext'

const DialogContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const img =
          store.getState().dialogsPage.dialogs[0].img
        const messages =
          store.getState().dialogsPage.dialogs[0].messages
        const name =
          store.getState().dialogsPage.dialogs[0].name
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
      }}
    </StoreContext.Consumer>
  )
}

export default DialogContainer
