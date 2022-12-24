import React from 'react'
import Dialogs from './Dialogs'
import { StoreContext } from '../../../StoreContext'

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const dialogs = store.getState().dialogsPage.dialogs

        return <Dialogs dialogs={dialogs} />
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
