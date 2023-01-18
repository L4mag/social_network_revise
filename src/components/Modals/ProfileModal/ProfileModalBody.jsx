import React from 'react'
import ProfileBodyLine from './ProfileBodyLine'

const ProfileModalBody = ({
  fullName,
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
  contacts,
}) => {
  return (
    <>
      <ProfileBodyLine
        header='Full Name'
        content={fullName}
      />
      <ProfileBodyLine
        header='About Me'
        content={aboutMe}
      />
      <ProfileBodyLine
        header='Looking for a job'
        content={lookingForAJob ? 'Yes' : 'No'}
      />
      {lookingForAJob && (
        <>
          <ProfileBodyLine
            header='Professional Skills'
            content={lookingForAJobDescription}
          />
        </>
      )}
      <ProfileBodyLine
        header='Contacts'
        content={contacts}
      />
    </>
  )
}

export default ProfileModalBody
