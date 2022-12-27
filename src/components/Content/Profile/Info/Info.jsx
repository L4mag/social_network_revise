import React from 'react'
import style from './Info.module.scss'

const Info = ({ profile }) => {
  const profileInfo = profile || {
    userId: '',
    fullName: 'Sergey Savchuk',
    contacts: {},
  }

  return (
    <div className={`${style.info}`}>
      <h3>{profileInfo.fullName}</h3>
      <div>
        <div>{profile.aboutMe || 'undefined info'}</div>
      </div>
    </div>
  )
}

export default Info
