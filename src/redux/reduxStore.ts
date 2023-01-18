import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
})

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
})

// @ts-ignore
window.store = store

export default store
