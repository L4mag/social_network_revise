import React from 'react'
import ProfileBodyField from './ProfileBodyField'

const ProfileModalEditBody = ({
  fullName,
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
  contacts,
  ...restProps
}) => {
  return (
    <>
      <ProfileBodyField
        title='Full Name'
        component='input'
        name='fullName'
        initialValue={fullName}
        {...restProps}
      />
      <ProfileBodyField
        title='About Me'
        component='textarea'
        name='aboutMe'
        initialValue={aboutMe}
        {...restProps}
      />
      <ProfileBodyField
        title='Looking for a job'
        component='input'
        type='checkbox'
        name='lookingForAJob'
        initialValue={lookingForAJob}
        {...restProps}
      />
      {lookingForAJob && (
        <ProfileBodyField
          title='Professional Skills'
          component='textarea'
          name='lookingForAJobDescription'
          initialValue={lookingForAJobDescription}
          {...restProps}
        />
      )}
      <ProfileBodyField
        title='Contacts'
        component='input'
        name='contacts'
        initialValue={contacts}
        {...restProps}
      />
    </>
  )
}

export default ProfileModalEditBody
