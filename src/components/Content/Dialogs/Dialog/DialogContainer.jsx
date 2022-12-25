import { connect } from 'react-redux'
import Dialog from './Dialog'
import {
  addMessage,
  handleAddMessageInput,
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

const DialogContainer = connect(mapStateToProps, {
  handleAddMessageInput,
  addMessage,
})(Dialog)

export default DialogContainer
