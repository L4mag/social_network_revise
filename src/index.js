import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App'
import store from './redux/state'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const addPost = store.addPost.bind(store)
const handleAddPostInput =
  store.handleAddPostInput.bind(store)
const addMessage = store.addMessage.bind(store)
const handleAddMessageInput =
  store.handleAddMessageInput.bind(store)

const renderEntireApp = (state) => {
  console.log(state)
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        handleAddPostInput={handleAddPostInput}
        addMessage={addMessage}
        handleAddMessageInput={handleAddMessageInput}
      />
    </React.StrictMode>
  )
}

store.subscribe(renderEntireApp)

renderEntireApp(store.getState())
//some test