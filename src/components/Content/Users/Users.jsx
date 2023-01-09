import React, { useState } from 'react'
import UserItem from './UserItem/UserItem'
import style from './Users.module.scss'
// import Pagination from 'react-bootstrap/Pagination'
import UserImage from './../../../assets/user.png'
import ReactPaginate from 'react-paginate'
import { toggleIsFollowFetching } from '../../../redux/reducers/usersReducer'
import { Pagination } from 'react-bootstrap'

const Users = (props) => {
  const {
    users,
    currentPage,
    totalCount,
    pageSize,
    onSetPageHandler,
    onFollowHandler,
    onUnFollowHandler,
    isFollowFetching,
    toggleIsFollowFetching,
  } = props
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + pageSize
  const currentUsers = users.slice(itemOffset, endOffset)

  const pageCount = Math.ceil(totalCount / pageSize)
  const pages = []

  const handlePageClick = (event) => {
    const selectPage = event.selected
    const newOffset =
      (selectPage * pageSize) % (pageSize * totalCount)
    console.log(
      `User requested page number ${selectPage}, which is offset ${newOffset}`
    )
    onSetPageHandler(selectPage + 1)
    setItemOffset(newOffset)
  }

  for (
    let page = currentPage;
    page <= currentPage + 9 && page <= pageCount;
    page = (page + 1) % pageCount
  ) {
    pages.push(
      <Pagination.Item
        className={`${style.pageItem} disabled`}
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
          {...user}
          key={user.id}
          avatar={user.photos.small || UserImage}
          onFollowHandler={onFollowHandler}
          onUnFollowHandler={onUnFollowHandler}
          isFollowFetching={isFollowFetching}
          toggleIsFollowFetching={toggleIsFollowFetching}
        />
      ))}

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

      <Pagination className={`${style.pagination}`}>
        {pages}
      </Pagination>
    </>
  )
}

export default Users
