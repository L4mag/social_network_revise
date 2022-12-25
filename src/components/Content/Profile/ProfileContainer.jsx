import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import axios from 'axios'
import { setProfile } from '../../../redux/reducers/profileReducer'
import withRouter from '../../tools/withRouter'

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const profileId =
      this.props.router.params.userId || 27223

    debugger

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${profileId}`
      )
      .then((response) => {
        this.props.setProfile(response.data)
        // this.props.toggleIsFetching()
      })
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

export default connect(mapStateToProps, { setProfile })(
  withRouter(ProfileContainer)
)
