import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
}

const store = configureStore({
  reducer: { ...reducers },
  thunkMiddleware,
})

window.store = store

export default store
