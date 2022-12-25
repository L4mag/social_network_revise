import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPostsContainer from './UserPosts/UserPostsContainer'
import userImage from '../../../assets/user.png'

const Profile = ({ profile }) => {
  if (!profile) {
    return <></>
  }

  const avatar = profile.photos.large || userImage

  return (
    <div className={`${style.profile}`}>
      <Avatar img={avatar} />
      <Info profile={profile} />
      <UserPostsContainer />
    </div>
  )
}

export default Profile
