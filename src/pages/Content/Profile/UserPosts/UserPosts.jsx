import React from 'react'
import Post from '../../../../components/Post/Post'
import style from './UserPosts.module.scss'
import { Form, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

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
      <div className={style.newPostFormContainer}>
        <Form
          className={style.newPostForm}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <FormControl
            type='text'
            placeholder='Post Text'
            className={style.newPostFormInput}
            onChange={changePostHandler}
            value={newPostInput}
          />
          <Button onClick={addPostHandler} type='submit'>
            Add Post
          </Button>
        </Form>
      </div>
      {posts.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </div>
  )
}

export default UserPosts
