import React from 'react'
import {
  addPostActionCreator,
  handleAddPostInputActionCreator,
} from '../../../../redux/store'
import UserPosts from './UserPosts'

const UserPostsContainer = ({ store }) => {
  const posts = store.getState().profilePage.posts
  const newPostInput =
    store.getState().profilePage.newPostInput
  const dispatch = store.dispatch

  const addPost = () => {
    dispatch(addPostActionCreator())
  }

  const changeNewPost = (text) => {
    dispatch(handleAddPostInputActionCreator(text))
  }

  return (
    <UserPosts
      posts={posts}
      changeNewPost={changeNewPost}
      addPost={addPost}
      newPostInput={newPostInput}
    />
  )
}

export default UserPostsContainer
