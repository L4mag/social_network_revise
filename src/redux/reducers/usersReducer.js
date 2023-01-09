import { usersAPI } from '../../api/api'

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FOLLOW_FETCHING =
  'TOGGLE_IS_FOLLOW_FETCHING'

const initialState = {
  users: [],
  currentPage: 1,
  totalCount: null,
  pageSize: 6,
  isFetching: false,
  isFollowFetching: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload.users }
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.payload.count }
    case FOLLOW:
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
    case TOGGLE_IS_FOLLOW_FETCHING:
      return {
        ...state,
        isFollowFetching: !state.isFollowFetching,
      }
    default:
      return state
  }
}

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: { users },
})

export const setTotalCount = (count) => ({
  type: SET_TOTAL_COUNT,
  payload: { count },
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
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(toggleIsFetching())
        dispatch(setCurrentPage(currentPage))
      })
  }

export const followThunkCreator =
  (userId) => (dispatch) => {
    dispatch(toggleIsFollowFetching())

    usersAPI.followUser(userId).then(() => {
      dispatch(follow(userId))
      dispatch(toggleIsFollowFetching())
    })
  }

export const unFollowThunkCreator =
  (userId) => (dispatch) => {
    dispatch(toggleIsFollowFetching())

    usersAPI.unFollowUser(userId).then(() => {
      dispatch(unFollow(userId))
      dispatch(toggleIsFollowFetching())
    })
  }

export const toggleIsFollowFetching = () => ({
  type: TOGGLE_IS_FOLLOW_FETCHING,
})

export default userReducer
