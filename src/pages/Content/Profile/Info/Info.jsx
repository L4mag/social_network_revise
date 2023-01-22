import React, { useState } from 'react'
import style from './Info.module.scss'
import Button from 'react-bootstrap/Button'
import ProfileModal from '../../../../components/Modals/ProfileModal/ProfileModal'
import ProfileModalEdit from '../../../../components/Modals/ProfileModal/ProfileModalEdit'
import shortString from '../../../tools/shortString'

const Info = ({ profile, postProfile, messages }) => {
  const profileInfo = profile

  const [isModalShow, setIsModalShow] = useState(false)
  const [isProfileEditMode, setIsProfileEditMode] =
    useState(false)

  const onProfileSubmit = (data) => {
    const profileData = { userId: profile.userId, ...data }

    postProfile(profileData)

    if (messages.length > 0) return
    debugger
    setIsModalShow(false)
    setIsProfileEditMode(false)
  }

  const onModalHide = () => {
    setIsModalShow(false)
    setIsProfileEditMode(false)
  }

  const onEditModeHandler = () => {
    setIsProfileEditMode(true)
  }

  return (
    <div className={`${style.info}`}>
      <h3>{profileInfo.fullName}</h3>
      <div>
        <div>
          <ShortProfileDesc
            aboutMe={profile.aboutMe}
            lookingForAJob={profile.lookingForAJob}
            lookingForAJobDescription={
              profile.lookingForAJobDescription
            }
          />
          <Button
            className={style.moreInfo}
            variant='link'
            size='sm'
            onClick={() => setIsModalShow(true)}
          >
            more info
          </Button>

          {isProfileEditMode ? (
            <ProfileModalEdit
              onHide={onModalHide}
              show={isModalShow}
              profile={profile}
              onProfileSubmit={onProfileSubmit}
              messages={messages}
            />
          ) : (
            <ProfileModal
              onHide={onModalHide}
              show={isModalShow}
              profile={profile}
              onEditModeHandler={onEditModeHandler}
              isProfileEditMode={isProfileEditMode}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const ShortProfileDesc = ({
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
}) => {
  return (
    <section>
      <div>
        <b>aboutMe:</b> {aboutMe}
      </div>
      <div>
        <b>Looking for a job:</b>{' '}
        {lookingForAJob ? 'Yes' : 'No'}
      </div>
      {lookingForAJob && (
        <div>
          <b>Professional Skills:</b>{' '}
          {shortString(lookingForAJobDescription)}
        </div>
      )}
    </section>
  )
}

export default Info
