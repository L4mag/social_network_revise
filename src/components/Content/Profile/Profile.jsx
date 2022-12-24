import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPostsContainer from './UserPosts/UserPostsContainer'

const Profile = ({ store }) => {
  const avatar = store.getState().profilePage.avatar

  return (
    <div className={`${style.profile}`}>
      <Avatar img={avatar} />
      <Info />
      <UserPostsContainer store={store} />
    </div>
  )
}

export default Profile
