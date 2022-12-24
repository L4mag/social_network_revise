import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  followUserActionCreator,
  setUsersActionCreator,
  unFollowUserActionCreator,
} from '../../../redux/reducers/usersReducer'

const mapStateToProps = (state) => {
  return { users: state.usersPage.users }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => dispatch(followUserActionCreator(id)),
    unFollow: (id) =>
      dispatch(unFollowUserActionCreator(id)),
    setUsers: () => dispatch(setUsersActionCreator()),
  }
}

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

export default UsersContainer
