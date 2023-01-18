import { usersAPI } from '../../api/api'
import { UserType } from '../../types/types'

const SET_USERS = 'SET_USERS'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FOLLOW_FETCHING =
  'TOGGLE_IS_FOLLOW_FETCHING'

const initialState = {
  users: [] as Array<UserType>,
  currentPage: 1,
  totalCount: null as unknown as number,
  pageSize: 6,
  isFetching: false,
  isFollowFetching: false,
}

type initialStateType = typeof initialState

const userReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SET_USERS:
      // @ts-ignore
      return { ...state, users: action.payload.users }
    case SET_TOTAL_COUNT:
      // @ts-ignore
      return { ...state, totalCount: action.payload.count }
    case FOLLOW:
      // @ts-ignore
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
      // @ts-ignore
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

type SetUsersActionType = {
  type: typeof SET_USERS
  payload: { users: Array<UserType> }
}

export const setUsers = (
  users: Array<UserType>
): SetUsersActionType => ({
  type: SET_USERS,
  payload: { users },
})

type SetTotalCountActionType = {
  type: typeof SET_TOTAL_COUNT
  payload: { count: number }
}

export const setTotalCount = (
  count: number
): SetTotalCountActionType => ({
  type: SET_TOTAL_COUNT,
  payload: { count },
})

type FollowActionType = {
  type: typeof FOLLOW
  payload: { id: number }
}

export const follow = (id: number): FollowActionType => ({
  type: FOLLOW,
  payload: { id },
})

type UnfollowActionType = {
  type: typeof UNFOLLOW
  payload: { id: number }
}

export const unFollow = (
  id: number
): UnfollowActionType => ({
  type: UNFOLLOW,
  payload: { id },
})

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  payload: { page: number }
}

export const setCurrentPage = (
  page: number
): SetCurrentPageActionType => ({
  type: SET_CURRENT_PAGE,
  payload: { page },
})

type ToggleIsFetching = {
  type: typeof TOGGLE_IS_FETCHING
}

export const toggleIsFetching = (): ToggleIsFetching => ({
  type: TOGGLE_IS_FETCHING,
})

type ToggleIsFollowFetchingActionType = {
  type: typeof TOGGLE_IS_FOLLOW_FETCHING
}

export const toggleIsFollowFetching =
  (): ToggleIsFollowFetchingActionType => ({
    type: TOGGLE_IS_FOLLOW_FETCHING,
  })

export const setUsersThunkCreator =
  (currentPage: number, pageSize: number) =>
  (
    dispatch: (arg0: {
      type:
        | 'SET_USERS'
        | 'SET_CURRENT_PAGE'
        | 'TOGGLE_IS_FETCHING'
        | 'SET_TOTAL_COUNT'
      payload?:
        | { users: UserType[] }
        | { count: number }
        | { page: number }
    }) => void
  ) => {
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
  (userId: number) =>
  (
    dispatch: (arg0: {
      type: 'FOLLOW' | 'TOGGLE_IS_FOLLOW_FETCHING'
      payload?: { id: number }
    }) => void
  ) => {
    dispatch(toggleIsFollowFetching())

    usersAPI.followUser(userId).then(() => {
      dispatch(follow(userId))
      dispatch(toggleIsFollowFetching())
    })
  }

export const unFollowThunkCreator =
  (userId: number) =>
  (
    dispatch: (arg0: {
      type: 'UNFOLLOW' | 'TOGGLE_IS_FOLLOW_FETCHING'
      payload?: { id: number }
    }) => void
  ) => {
    dispatch(toggleIsFollowFetching())

    usersAPI.unFollowUser(userId).then(() => {
      dispatch(unFollow(userId))
      dispatch(toggleIsFollowFetching())
    })
  }

export default userReducer
