import { authAPI } from '../../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA '
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SET_MESSAGES = 'SET_MESSAGES'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'
const SET_CAPTCHA = 'SET_CAPTCHA'

const initialState: InitialStateType = {
  user: {
    id: null,
    login: null,
    email: null,
  },
  profile: null,
  isFetching: false,
  isAuth: false,
  messages: null,
  captcha: null,
  captchaUrl: null,
}

type InitialStateType = {
  user: {
    id: number | null
    login: string | null
    email: string | null
  }
  profile: Object | null
  isFetching: boolean
  isAuth: boolean
  messages: Array<string> | null
  captcha: null | string
  captchaUrl: null | string
}

const authReducer = (
  state = initialState,
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        user: { ...action.payload },
        isAuth: true,
      }
    case SET_USER_PROFILE_DATA:
      return {
        ...state,
        profile: { ...action.payload },
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: !state.isFetching,
      }
    case LOGOUT:
      return {
        ...initialState,
      }
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
      }
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.payload.captcha,
      }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.payload.url,
      }
    default:
      return state
  }
}

export const setUserData = (userData: {
  id: number
  email: string
  login: string
}) => ({
  type: SET_USER_DATA,
  payload: { ...userData },
})

export const setUserProfileData = (
  userProfileData: any
) => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData,
})

const setMessages = (messages: string[]) => ({
  type: SET_MESSAGES,
  payload: {
    messages,
  },
})

const setCaptchaUrl = (url: string) => ({
  type: SET_CAPTCHA_URL,
  payload: { url },
})
const setCaptcha = (captcha: string) => ({
  type: SET_CAPTCHA_URL,
  payload: { captcha },
})

export const setCaptchaUrlThunk = () => (dispatch: any) => {
  authAPI.getCaptchaUrl().then((res) => {
    dispatch(setCaptchaUrl(res.url))
  })
}

export const authMe = () => (dispatch: any) => {
  authAPI.getUserData().then((r) => {
    if (r.resultCode === 0) {
      dispatch(setUserData(r.data))
    }
  })
}

export const login =
  (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
  ) =>
  (dispatch: (arg0: unknown) => void) => {
    authAPI
      .login(email, password, rememberMe, captcha)
      .then((r) => {
        if (r.resultCode === 0) {
          dispatch(authMe())
        }
        dispatch(setMessages(r.messages))
      })
  }

export const logout =
  () => (dispatch: (arg0: { type: string }) => void) => {
    authAPI.logout().then((r) => {
      if (r.resultCode === 0) {
        dispatch({ type: LOGOUT })
      }
    })
  }

export default authReducer
