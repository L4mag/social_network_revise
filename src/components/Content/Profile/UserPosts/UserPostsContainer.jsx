import UserPosts from './UserPosts'
import { connect } from 'react-redux'
import {
  addPost,
  handleAddPostInput,
} from '../../../../redux/reducers/profileReducer'

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostInput: state.profilePage.newPostInput,
  }
}

const UserPostsContainer = connect(mapStateToProps, {
  addPost,
  handleAddPostInput,
})(UserPosts)

export default UserPostsContainer
