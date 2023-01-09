import { authAPI } from '../../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA '
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const SET_MESSAGES = 'SET_MESSAGES'

const initialState = {
  user: {
    id: null,
    login: null,
    email: null,
  },
  profile: null,
  isFetching: false,
  isAuth: false,
  messages: null,
}

const authReducer = (state = initialState, action) => {
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
    default:
      return state
  }
}

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: { ...userData },
})

export const setUserProfileData = (userProfileData) => ({
  type: SET_USER_PROFILE_DATA,
  payload: userProfileData,
})

const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: {
    messages,
  },
})

export const authMe = () => (dispatch) => {
  authAPI.getUserData().then((r) => {
    if (r.resultCode === 0) {
      dispatch(setUserData(r.data))
    }
  })
}

export const login =
  (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then((r) => {
      if (r.resultCode === 0) {
        dispatch(authMe())
      }
      dispatch(setMessages(r.messages))
    })
  }

export const logout = () => (dispatch) => {
  authAPI.logout().then((r) => {
    if (r.resultCode === 0) {
      dispatch({ type: LOGOUT })
    }
  })
}

export default authReducer
