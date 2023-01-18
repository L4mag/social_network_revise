import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {
  logout,
  setUserData,
  setUserProfileData,
} from '../../redux/reducers/authReducer'

const HeaderContainer = (props) => {
  return <Header {...props} />
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    profile: state.auth.profile,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {
  setUserData,
  setUserProfileData,
  logout,
})(HeaderContainer)
