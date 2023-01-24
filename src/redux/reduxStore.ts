import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'
import profileReducer from './reducers/profileSlice'
import dialogsReducer from './reducers/dialogsReducer'
// import usersReducer from './reducers/usersReducer'
import authReducer from './reducers/authSlice'
import thunkMiddleware from 'redux-thunk'
import usersReducers from './reducers/usersSlice'

const rootReducer = combineReducers({
  profileReducer,
  dialogsPage: dialogsReducer,
  // usersPage: usersReducer,
  authReducer,  
  usersReducers,
})

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
