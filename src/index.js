import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import App from './App'
import store from './redux/reduxStore'

const root = ReactDOM.createRoot(
  document.getElementById('root')
)

const renderEntireApp = () => {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  )
}

store.subscribe(() => {
  renderEntireApp()
})

renderEntireApp()
