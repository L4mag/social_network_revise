import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPosts from './UserPosts/UserPosts'

const Profile = ({ data, addPost, handleAddPostInput }) => {
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
        addPost={addPost}
        handleAddPostInput={handleAddPostInput}
      />
    </div>
  )
}

export default Profile
