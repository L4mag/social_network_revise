import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPosts from './UserPosts/UserPosts'

const Profile = ({ data, dispatch }) => {
  const avatar = data.avatar
  const posts = data.posts
  const newPostInput = data.newPostInput

  return (
    <div className={`${style.profile}`}>
      <Avatar img={avatar} />
      <Info />
      <UserPosts
        newPostInput={newPostInput}
        posts={posts}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Profile
