import React from 'react'
import { connect } from 'react-redux'
import Dialog from './Dialog'
import {
  addMessageActionCreator,
  handleAddMessageInputActionCreator,
} from '../../../../redux/reducers/dialogsReducer'

const mapStateToProps = (state) => {
  const dialog = state.dialogsPage.dialogs[0]
  return {
    img: dialog.img,
    messages: dialog.messages,
    name: dialog.name,
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeNewMessageText: (text) =>
      dispatch(handleAddMessageInputActionCreator(text)),
    addMessage: () => dispatch(addMessageActionCreator()),
  }
}

const DialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog)

export default DialogContainer
