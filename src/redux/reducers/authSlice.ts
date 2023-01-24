import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IProfile } from './../../types/IProfile'
import { IAuthUser } from '../../types/IAuthUser'
import { ApiLoginResponseType } from '../../types/types'

type AuthState = {
  user: IAuthUser
  profile: IProfile | null
  isFetching: boolean
  isAuth: boolean
  errors: Array<string>
  captchaUrl: string | null
}

const initialState: AuthState = {
  user: {
    id: null,
    email: null,
    rememberMe: false,
  },
  profile: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null,
  errors: [],
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<IAuthUser>) {
      state.user = action.payload
      state.isAuth = true
    },
    setAuthProfileData(
      state,
      action: PayloadAction<IProfile>
    ) {
      state.profile = action.payload
    },
    toggleIsFetching(state) {
      state.isFetching = !state.isFetching
    },
    logout(state) {
      state = initialState
    },
    setErrors(state, action: PayloadAction<Array<string>>) {
      state.errors = action.payload
    },
    setCaptchaUrl(state, action: PayloadAction<string>) {
      state.captchaUrl = action.payload
    },
    loginFetching(state) {
      state.isFetching = true
    },
    loginFetchingSuccess(
      state,
      action: PayloadAction<ApiLoginResponseType>
    ) {
      state.isFetching = false
      state.user.id = action.payload.data.userId
      state.isAuth = true
      state.errors = []
    },
    loginFetchingError(
      state,
      action: PayloadAction<Array<string>>
    ) {
      state.isFetching = false
      state.errors = action.payload
    },
  },
})

export default authSlice.reducer
