import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { setProfileThunkCreator } from '../../../redux/reducers/profileReducer'
import withRouter from '../../tools/withRouter'

class ProfileContainer extends React.Component {
  componentDidMount() {
    const profileId = this.props.router.params.userId

    this.props.setProfileThunkCreator(profileId)
  }

  render() {
    return <Profile {...this.props} />
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, {
  setProfileThunkCreator,
})(withRouter(ProfileContainer))
