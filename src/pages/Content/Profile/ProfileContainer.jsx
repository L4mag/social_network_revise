import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {
  postProfile,
  pushNewStatus,
  requestStatus,
  setProfileThunkCreator,
} from '../../../redux/reducers/profileReducer'
import withRouter from '../../tools/withRouter'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId =
      this.props.router.params.userId ||
      this.props.authUserId

    this.props.requestStatus(profileId)
    this.props.setProfileThunkCreator(profileId)
  }

  render() {
    return <Profile {...this.props} />
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.user.id,
    messages: state.profilePage.messages,
  }
}

export default compose(
  connect(mapStateToProps, {
    setProfileThunkCreator,
    postProfile,
    requestStatus,
    pushNewStatus,
  }),
  withRouter
)(ProfileContainer)
