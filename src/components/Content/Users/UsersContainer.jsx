import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  followUserActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  unFollowUserActionCreator,
} from '../../../redux/reducers/usersReducer'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => dispatch(followUserActionCreator(id)),
    unFollow: (id) =>
      dispatch(unFollowUserActionCreator(id)),
    setUsers: (users) =>
      dispatch(setUsersActionCreator(users)),
    setCurrentPage: (page) =>
      dispatch(setCurrentPageActionCreator(page)),
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default UsersContainer
