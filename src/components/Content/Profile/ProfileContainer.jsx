import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'

const mapStateToProps = (state) => {
  return { avatar: state.profilePage.avatar }
}

const ProfileContainer = connect(mapStateToProps)(Profile)
export default ProfileContainer
