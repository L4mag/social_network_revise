import React from 'react'
import Modal from '../Modal'
import ProfileBodyLine from './ProfileBodyLine'

const ProfileModal = ({ profile, ...restProps }) => {
  return (
    <Modal
      title='Profile Info'
      body={
        <>
          <ProfileBodyLine
            header='Full Name'
            content={profile.fullName}
          />
          <ProfileBodyLine
            header='About Me'
            content={profile.aboutMe}
          />
          <ProfileBodyLine
            header='Looking for a job'
            content={profile.lookingForAJob ? 'Yes' : 'No'}
          />
          {profile.lookingForAJob && (
            <>
              <ProfileBodyLine
                header='Professional Skills'
                content={profile.lookingForAJobDescription}
              />
            </>
          )}
          <ProfileBodyLine
            header='Contacts'
            content={profile.contacts}
          />
        </>
      }
      {...restProps}
    />
  )
}

export default ProfileModal
