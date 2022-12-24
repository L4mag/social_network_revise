import React from 'react'
import UserPosts from './UserPosts'
import { connect } from 'react-redux'
import {
  addPostActionCreator,
  handleAddPostInputActionCreator,
} from '../../../../redux/reducers/profileReducer'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostInput: state.profilePage.newPostInput,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    changeNewPost: (text) => {
      dispatch(handleAddPostInputActionCreator(text))
    },
  }
}
const UserPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPosts)

export default UserPostsContainer
