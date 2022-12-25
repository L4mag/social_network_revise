import React from 'react'
import UserItem from './UserItem/UserItem'
import style from './Users.module.scss'
import Pagination from 'react-bootstrap/Pagination'
import axios from 'axios'
import UserImage from './../../../assets/user.png'

class Users extends React.Component {
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

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      )
      .then((response) => {
        console.log(response.data.items)
        this.props.setUsers(response.data.items)
      })
  }

  onSetPageHandler(page) {
    this.props.setCurrentPage(page)
    const pageSize = this.props.pageSize

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`
      )
      .then((response) => {
        console.log(response.data.items)
        this.props.setUsers(response.data.items)
      })
  }

  onFollowHandler(id) {
    this.props.follow(id)
  }

  onUnFollowHandler(id) {
    this.props.unFollow(id)
  }
  render() {
    const users = this.props.users
    const currentPage = this.props.currentPage
    const usersCount = this.props.usersCount
    const pageSize = this.props.pageSize
    const pagesCount = Math.ceil(usersCount / pageSize)
    const pages = []

    for (let page = 1; page <= pagesCount; page++) {
      pages.push(
        <Pagination.Item
          className={`${style.pageItem} `}
          key={page}
          active={page === currentPage}
          onClick={() => {
            if (page !== currentPage)
              this.onSetPageHandler(page)
          }}
        >
          {page}
        </Pagination.Item>
      )
    }

    return (
      <>
        {users.map((user) => (
          <UserItem
            name={user.name}
            key={user.id}
            id={user.id}
            avatar={user.photos.small || UserImage}
            location={user.location}
            status={user.status}
            isFollowed={user.isFollowed}
            onFollowHandler={this.onFollowHandler}
            onUnFollowHandler={this.onUnFollowHandler}
          />
        ))}

        <Pagination className={`${style.pagination}`}>
          {pages}
        </Pagination>
      </>
    )
  }
}

export default Users
