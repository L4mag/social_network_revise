import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  setCurrentPage,
  followThunkCreator,
  setUsersThunkCreator,
  unFollowThunkCreator,
} from '../../../redux/reducers/usersReducer'
import withRouter from '../../tools/withRouter'
import Preloader from '../../tools/Preloader'
import { compose } from 'redux'
import withAuthRedirect from '../../../hoc/withAuthRedirect'

class UsersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.onFollowHandler = this.onFollowHandler.bind(this)
    this.onUnFollowHandler =
      this.onUnFollowHandler.bind(this)
    this.onSetPageHandler = this.onSetPageHandler.bind(this)
  }

  componentDidMount() {
    const currentPage = this.props.currentPage
    const pageSize = this.props.pageSize

    this.props.setUsersThunkCreator(currentPage, pageSize)
  }

  onSetPageHandler(page) {
    const pageSize = this.props.pageSize

    this.props.setUsersThunkCreator(page, pageSize)
  }

  onFollowHandler(id) {
    this.props.followThunkCreator(id)
  }

  onUnFollowHandler(id) {
    this.props.unFollowThunkCreator(id)
  }
  render() {
    const isFetching = this.props.isFetching
    const props = this.props

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            {...this.props}
            onSetPageHandler={this.onSetPageHandler}
            onFollowHandler={this.onFollowHandler}
            onUnFollowHandler={this.onUnFollowHandler}
          />
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    usersCount: state.usersPage.usersCount,
    pageSize: state.usersPage.pageSize,
    isFetching: state.usersPage.isFetching,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    setUsersThunkCreator,
    followThunkCreator,
    unFollowThunkCreator,
  }),
  withAuthRedirect,
  withRouter
)(UsersContainer)
