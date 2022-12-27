import { usersAPI } from '../../api/api'

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
  users: [],
  currentPage: 1,
  usersCount: 100,
  pageSize: 6,
  isFetching: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload.users }
    case FOLLOW:
      debugger

      const tempState = {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id
              ? { ...user, isFollowed: true }
              : user
          ),
        ],
      }

      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id
              ? { ...user, followed: true }
              : user
          ),
        ],
      }
    case UNFOLLOW:
      return {
        ...state,
        users: [
          ...state.users.map((user) =>
            user.id === action.payload.id
              ? { ...user, followed: false }
              : user
          ),
        ],
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.page,
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

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: { users },
})
export const follow = (id) => ({
  type: FOLLOW,
  payload: { id },
})

export const unFollow = (id) => ({
  type: UNFOLLOW,
  payload: { id },
})

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: { page },
})

export const toggleIsFetching = () => ({
  type: TOGGLE_IS_FETCHING,
})

export const setUsersThunkCreator =
  (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching())
    usersAPI
      .getUsers(currentPage, pageSize)
      .then((data) => {
        dispatch(setUsers(data))
        dispatch(toggleIsFetching())
        dispatch(setCurrentPage(currentPage))
      })
  }

export const followThunkCreator =
  (userId) => (dispatch) => {
    usersAPI.followUser(userId).then(() => {
      dispatch(follow(userId))
    })
  }

export const unFollowThunkCreator =
  (userId) => (dispatch) => {
    usersAPI.unFollowUser(userId).then(() => {
      dispatch(unFollow(userId))
    })
  }

export default userReducer
