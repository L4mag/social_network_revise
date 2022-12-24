import { configureStore } from '@reduxjs/toolkit'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'

const reducers = {
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
}

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  })

const store = configureStore({
  reducer: { ...reducers },
  middleware,
})

export default store
