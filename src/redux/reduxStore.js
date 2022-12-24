import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'

const reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
}

const store = configureStore({
  reducer: reducers,
})

export default store
