import React, { useState } from 'react'
import UserItem from './UserItem/UserItem'
import style from './Users.module.scss'
import UserImage from './../../../assets/user.png'
import ReactPaginate from 'react-paginate'

const Users = (props) => {
  const {
    users,
    currentPage,
    totalCount,
    pageSize,
    onSetPageHandler,
    ...restProps
  } = props

  // const query = useQuery(
  //   ['users', currentPage],
  //   async () => {
  //     const data = await usersAPI.getUsers(currentPage, 6)
  //     return data
  //   }
  // )

  // if (query.isLoading) return 'Loading...'

  // if (query.error)
  //   return 'An error has occurred: ' + error.message

  // const { items: users, totalCount } = query.data

  const pageCount = Math.ceil(totalCount / pageSize)

  const handlePageClick = (event) => {
    const selectPage = event.selected

    const newOffset = (selectPage * pageSize) % totalCount
    console.log(
      `User requested page number ${selectPage}, which is offset ${newOffset}`
    )
    onSetPageHandler(selectPage)
  }

  return (
    <>
      <UserItems usersProp={users} {...restProps} />

      <ReactPaginate
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel='< previous'
        pageClassName={`page-item ${style.pageItem}`}
        pageLinkClassName='page-link'
        previousClassName={`page-item ${style.pageItem}`}
        previousLinkClassName='page-link'
        nextClassName={`page-item ${style.pageItem}`}
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName={`page-item ${style.pageItem}`}
        breakLinkClassName='page-link'
        containerClassName={`pagination ${style.pagination}`}
        activeClassName='active'
        disabledClassName='disabled'
        renderOnZeroPageCount={null}
      />
    </>
  )
}

const UserItems = ({ usersProp, ...props }) => {
  return (
    <>
      {usersProp &&
        usersProp.map((user) => (
          <UserItem
            {...user}
            key={user.id}
            avatar={user.photos.small || UserImage}
            {...props}
          />
        ))}
    </>
  )
}

export default Users
