import React from 'react'
import UserItem from './UserItem/UserItem'
import style from './Users.module.scss'
import Pagination from 'react-bootstrap/Pagination'
import UserImage from './../../../assets/user.png'

const Users = ({
  users,
  currentPage,
  usersCount,
  pageSize,
  onSetPageHandler,
  onFollowHandler,
  onUnFollowHandler,
}) => {
  const pagesCount = Math.ceil(usersCount / pageSize)
  const pages = []

  for (let page = 1; page <= pagesCount; page++) {
    pages.push(
      <Pagination.Item
        className={`${style.pageItem} `}
        key={page}
        active={page === currentPage}
        onClick={() => {
          if (page !== currentPage) onSetPageHandler(page)
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
          onFollowHandler={onFollowHandler}
          onUnFollowHandler={onUnFollowHandler}
        />
      ))}

      <Pagination className={`${style.pagination}`}>
        {pages}
      </Pagination>
    </>
  )
}

export default Users
