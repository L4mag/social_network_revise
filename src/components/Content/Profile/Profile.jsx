import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPostsContainer from './UserPosts/UserPostsContainer'

const Profile = ({ avatar }) => {
  return (
    <div className={`${style.profile}`}>
      <Avatar img={avatar} />
      <Info />
      <UserPostsContainer />
    </div>
  )
}

export default Profile
