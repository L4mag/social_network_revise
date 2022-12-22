import React from 'react'
import Post from './Post/Post'
import style from './UserPosts.module.scss'

const UserPosts = ({
  posts,
  addPost,
  handleAddPostInput,
  newPostInput,
}) => {
  const inputRef = React.createRef()

  const handleClick = () => {
    addPost()
  }

  const handleChange = () => {
    handleAddPostInput(inputRef.current.value)
  }

  return (
    <div className={style.posts}>
      <h4>User Posts</h4>
      <div>
        <textarea
          ref={inputRef}
          rows='1'
          type='text'
          value={newPostInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>New Post </button>
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
