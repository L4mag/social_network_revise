import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { IUser } from '../../types/IUser'
import updateObjParInArray from '../../tools/updateObjParInArray'

interface UsersState {
  users: Array<IUser>
  currentPage: number | null
  totalCount: number | null
  pageSize: number | null
  isFetching: boolean
  isFollowFetching: boolean
  errors: Array<String>
}

const initialState: UsersState = {
  users: [],
  currentPage: 0,
  totalCount: null,
  pageSize: 6,
  isFetching: false,
  isFollowFetching: false,
  errors: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<Array<IUser>>) {
      state.users = action.payload
    },
    setTotalCount(state, action: PayloadAction<number>) {
      state.totalCount = action.payload
    },
    follow(state, action: PayloadAction<number>) {
      state.users = updateObjParInArray(
        state.users,
        'id',
        action.payload,
        { followed: true }
      )
    },
    unfollow(state, action: PayloadAction<number>) {
      state.users = updateObjParInArray(
        state.users,
        'id',
        action.payload,
        { followed: false }
      )
    },
    serCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    toggleIsFetching(state) {
      state.isFetching = !state.isFetching
    },
    toggleIsFollowFetching(state) {
      state.isFollowFetching = !state.isFollowFetching
    },
  },
})

export default usersSlice.reducer
