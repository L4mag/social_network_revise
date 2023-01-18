import React from 'react'
import ProfileBodyField from './ProfileBodyField'

const ProfileModalEditBody = ({
  fullName,
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
  contacts,
}) => {
  return (
    <>
      <ProfileBodyField
        title='Full Name'
        component='input'
        name='fullName'
        initialValue={fullName}
      />
      <ProfileBodyField
        title='About Me'
        component='textarea'
        name='aboutMe'
        initialValue={aboutMe}
      />
      <ProfileBodyField
        title='Looking for a job'
        component='input'
        type='checkbox'
        name='lookingForAJob'
        initialValue={lookingForAJob}
      />
      {lookingForAJob && (
        <ProfileBodyField
          title='Professional Skills'
          component='textarea'
          name='lookingForAJobDescription'
          initialValue={lookingForAJobDescription}
        />
      )}
      <ProfileBodyField
        title='Contacts'
        component='input'
        name='contacts'
        initialValue={contacts}
      />
    </>
  )
}

export default ProfileModalEditBody
