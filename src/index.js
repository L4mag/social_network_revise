import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const renderEntireApp = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  )
}

store.subscribe(() => {
  renderEntireApp(store.getState())
})

renderEntireApp(store.getState())
