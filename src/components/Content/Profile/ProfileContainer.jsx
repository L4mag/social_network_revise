import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {
  pushNewStatus,
  requestStatus,
  setProfileThunkCreator,
} from '../../../redux/reducers/profileReducer'
import withRouter from '../../tools/withRouter'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.router.params.userId

    requestStatus(this.props.userId)
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
  }
}

export default connect(mapStateToProps, {
  setProfileThunkCreator,
  requestStatus,
  pushNewStatus,
})(withRouter(ProfileContainer))
