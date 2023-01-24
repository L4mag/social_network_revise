import { authAPI } from './../../api/api'
import { IAuthData } from './../../types/types'
import { AppDispatch } from './../reduxStore'
import { authSlice } from './authSlice'

export const fetchLogin =
  (authData: IAuthData) =>
  async (dispatch: AppDispatch) => {
    const {
      loginFetching,
      loginFetchingSuccess,
      loginFetchingError,
    } = authSlice.actions

    try {
      dispatch(loginFetching())
      const response = await authAPI.login(authData)
      if (response.data.resultCode !== 0) {
        dispatch(loginFetchingError(response.data.messages))
        return
      }
      dispatch(loginFetchingSuccess(response.data))
    } catch (e) {
      if (e instanceof Error)
        dispatch(loginFetchingError([e.message]))
    }
  }
