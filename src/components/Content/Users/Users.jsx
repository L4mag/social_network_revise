import React from 'react'
import style from './Users.module.scss'

const Users = ({ users, follow, unFollow, setUsers }) => {
  // if (users.length === 0) {
  //   axios
  //     .get(
  //       'https://social-network.samuraijs.com/api/1.0/users'
  //     )
  //     .then((response) => {
  //       debugger
  //       setUsers(response)
  //     })
  // }

  const onFollowHandler = (id) => {
    console.log('click')
    follow(id)
  }

  const onUnFollowHandler = (id) => {
    unFollow(id)
  }

  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div className={style.container} key={user.id}>
            <div className={style.avatar}>
              <img src={user.avatar} alt='avatar' />
            </div>
            <div className={style.info}>
              <div>{user.name}</div>
              <div>{user.status}</div>
              <div>{user.place}</div>
            </div>
            <div className={style.follow}>
              {user.isFollowed ? (
                <button
                  onClick={() => {
                    onUnFollowHandler(user.id)
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    onFollowHandler(user.id)
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Users
