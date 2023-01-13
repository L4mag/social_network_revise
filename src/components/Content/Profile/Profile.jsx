import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPostsContainer from './UserPosts/UserPostsContainer'
import userImage from '../../../assets/user.png'
import Status from './Status/Status'
import {
  pushNewStatus,
  requestStatus,
} from '../../../redux/reducers/profileReducer'
import { Col, Row, Container } from 'react-bootstrap'

const Profile = ({
  profile,
  requestStatus,
  pushNewStatus,
  status,
  isAuth,
  authUserId,
  userId,
}) => {
  if (!profile) {
    return <></>
  }

  const avatar = profile.photos.large || userImage

  return (
    <div className={`${style.profile}`}>
      <div className={`${style.profileHeader}`}>
        <Container>
          <Row>
            <Col lg={3}>
              <Avatar img={avatar} />
            </Col>
            <Col>
              <Info profile={profile} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Status
                isAuth={isAuth}
                statusText={status}
                pushNewStatus={pushNewStatus}
                requestStatus={requestStatus}
                authUserId={authUserId}
                userId={profile.userId}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <UserPostsContainer />
    </div>
  )
}

export default Profile
