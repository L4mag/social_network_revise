import React from 'react'
import Avatar from './Avatar/Avatar'
import Info from './Info/Info'
import style from './Profile.module.scss'
import UserPostsContainer from './UserPosts/UserPostsContainer'
import userImage from '../../../assets/user.png'
import Status from '../../../components/Status/Status'
import { Col, Row, Container } from 'react-bootstrap'
import { postProfile } from '../../../redux/reducers/profileReducer'

const Profile = ({
  profile,
  requestStatus,
  pushNewStatus,
  status,
  isAuth,
  authUserId,
  postProfile,
  messages,
}) => {
  if (!profile) {
    return <></>
  }

  const avatar = profile.photos.large || userImage

  return (
    <>
      <div className={`${style.profileHeader}`}>
        <Container>
          <Row>
            <Col lg={3}>
              <Avatar img={avatar} />
            </Col>
            <Col>
              <Info
                profile={profile}
                postProfile={postProfile}
                messages={messages}
              />
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
    </>
  )
}

export default Profile
