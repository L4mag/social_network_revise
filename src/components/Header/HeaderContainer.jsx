import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { authAPI, profilesAPI } from '../../api/api'
import {
  setUserData,
  setUserProfileData,
} from '../../redux/reducers/authReducer'

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getUserData().then((userData) => {
      this.props.setUserData(userData)
      profilesAPI
        .getUserProfile(userData.id)
        .then((profileData) => {
          this.props.setUserProfileData(profileData)
        })
    })
  }

  render() {
    return <Header {...this.props} />
  }
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
})(HeaderContainer)
