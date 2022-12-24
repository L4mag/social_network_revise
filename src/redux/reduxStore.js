import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import usersReducer from './reducers/usersReducer'

const reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
}

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: true,
    thunk: true,
  })

const store = configureStore({
  reducer: { ...reducers },
  middleware,
})

window.store = store

export default store
