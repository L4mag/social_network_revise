import React from 'react'
import Post from './Post/Post'
import style from './UserPosts.module.scss'

const UserPosts = ({
  posts,
  addPost,
  handleAddPostInput,
  newPostInput,
}) => {
  const addPostHandler = () => {
    addPost()
  }

  const changePostHandler = (e) => {
    handleAddPostInput(e.target.value)
  }

  return (
    <div className={style.posts}>
      <h4>User Posts</h4>
      <div>
        <textarea
          rows='1'
          type='text'
          value={newPostInput}
          onChange={changePostHandler}
        />
        <button onClick={addPostHandler}>New Post</button>
      </div>

      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  )
}

export default UserPosts
