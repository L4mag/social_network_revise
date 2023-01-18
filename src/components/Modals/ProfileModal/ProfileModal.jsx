import React from 'react'
import Modal from '../Modal'
import { HiOutlinePencil } from 'react-icons/hi'
import ProfileModalBody from './ProfileModalBody'

const ProfileModal = ({
  profile,
  onEditModeHandler,
  isProfileEditMode,
  ...restProps
}) => {
  return (
    <Modal
      title='Profile Info'
      header={
        <a
          href='#'
          onClick={(event) => {
            event.preventDefault()
            onEditModeHandler()
          }}
        >
          <HiOutlinePencil /> Edit
        </a>
      }
      body={<ProfileModalBody {...profile} />}
      {...restProps}
    />
  )
}

export default ProfileModal
