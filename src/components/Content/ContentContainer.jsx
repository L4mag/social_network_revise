import React from 'react'
import { StoreContext } from '../../StoreContext'
import Content from './Content'

const ContentContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return <Content store={store} />
      }}
    </StoreContext.Consumer>
  )
}

export default ContentContainer
