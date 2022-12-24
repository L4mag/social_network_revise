import React from 'react'
import {
  addPostActionCreator,
  handleAddPostInputActionCreator,
} from '../../../../redux/store'
import Post from './Post/Post'
import style from './UserPosts.module.scss'

const UserPosts = ({ posts, dispatch, newPostInput }) => {
  const handleClick = () => {
    dispatch(addPostActionCreator())
  }

  const handleChange = (e) => {
    dispatch(
      handleAddPostInputActionCreator(e.target.value)
    )
  }

  return (
    <div className={style.posts}>
      <h4>User Posts</h4>
      <div>
        <textarea
          rows='1'
          type='text'
          value={newPostInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>New Post</button>
      </div>

      {posts.map((post) => (
        <Post
          author={post.author}
          text={post.text}
          img={post.avatar}
        />
      ))}
    </div>
  )
}

export default UserPosts
