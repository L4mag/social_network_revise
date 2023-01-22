import React from 'react'
import Modal from '../Modal'
import { Form } from 'react-final-form'
import Button from 'react-bootstrap/Button'
import ProfileModalEditBody from './ProfileModalEditBody'
import { Alert } from 'react-bootstrap'

const ProfileModalEdit = ({
  profile,
  onProfileSubmit,
  messages,
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
            body={
              <>
                {messages.map((mes) => {
                  return (
                    <Alert variant='danger'>{mes}</Alert>
                  )
                })}
                <ProfileModalEditBody
                  {...profile}
                  {...props}
                />
              </>
            }
            {...restProps}
          />
        )
      }}
    </Form>
  )
}

export default ProfileModalEdit
