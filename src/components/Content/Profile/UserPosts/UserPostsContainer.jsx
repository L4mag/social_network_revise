import React from 'react'
import {
  addPostActionCreator,
  handleAddPostInputActionCreator,
} from '../../../../redux/store'
import UserPosts from './UserPosts'
import { StoreContext } from '../../../../StoreContext'

const UserPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  )
}

export default UserPostsContainer
