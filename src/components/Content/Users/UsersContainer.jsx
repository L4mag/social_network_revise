import React from 'react'
import { connect } from 'react-redux'
import Users from './Users'
import {
  follow,
  setCurrentPage,
  toggleIsFetching,
  setUsers,
  unFollow,
} from '../../../redux/reducers/usersReducer'
import axios from 'axios'
import withRouter from '../../tools/withRouter'
import Preloader from '../../tools/Preloader'

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
    this.props.toggleIsFetching()

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching()
      })
  }

  onSetPageHandler(page) {
    this.props.setCurrentPage(page)
    const pageSize = this.props.pageSize
    this.props.toggleIsFetching()

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`
      )
      .then((response) => {
        console.log(response.data.items)
        this.props.setUsers(response.data.items)
        this.props.toggleIsFetching()
      })
  }

  onFollowHandler(id) {
    this.props.follow(id)
  }

  onUnFollowHandler(id) {
    this.props.unFollow(id)
  }
  render() {
    const isFetching = this.props.isFetching

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            {...this.props}
            onSetPageHandler={this.onSetPageHandler}
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
  }
}

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  toggleIsFetching,
})(withRouter(UsersContainer))
