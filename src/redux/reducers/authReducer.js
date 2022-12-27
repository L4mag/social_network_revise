const SET_USER_DATA = 'SET_USER_DATA'
const SET_USER_PROFILE_DATA = 'SET_USER_PROFILE_DATA '
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  user: {
    id: null,
    login: null,
    email: null,
  },
  profile: null,
  isFetching: false,
  isAuth: false,
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

export default authReducer
