import React from 'react'
import Modal from '../Modal'
import { Form } from 'react-final-form'
import Button from 'react-bootstrap/Button'
import ProfileModalEditBody from './ProfileModalEditBody'

const ProfileModalEdit = ({
  profile,
  onProfileSubmit,
  ...restProps
}) => {
  return (
    <Form onSubmit={onProfileSubmit}>
      {(props) => {
        return (
          <Modal
            title='Profile Info'
            footer={
              <Button onClick={props.handleSubmit}>
                Save
              </Button>
            }
            body={<ProfileModalEditBody {...profile} />}
            {...restProps}
          />
        )
      }}
    </Form>
  )
}

export default ProfileModalEdit
