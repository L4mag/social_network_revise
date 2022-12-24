import React from 'react'
import Dialogs from './Dialogs'

const DialogsContainer = ({ store }) => {
  const dialogs = store.getState().dialogsPage.dialogs

  return <Dialogs dialogs={dialogs} />
}

export default DialogsContainer
