import React from 'react'
import Modal from '../Modal'
import BSForm from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Field, Form } from 'react-final-form'

const AvatarModal = ({ onSubmit, ...modalProps }) => {
  return (
    <Form onSubmit={onSubmit}>
      {(props) => {
        return (
          <Modal
            header='Change profile image'
            body={
              <Field name='avatar'>
                {({
                  input: { value, onChange, ...input },
                }) => {
                  return (
                    <BSForm.Control
                      {...input}
                      onChange={({ target }) => {
                        onChange(target.files)
                      }}
                      type='file'
                      accept='image/png, image/gif, image/jpeg'
                    />
                  )
                }}
              </Field>
            }
            footer={
              <Button onClick={props.handleSubmit}>
                Save
              </Button>
            }
            {...modalProps}
          />
        )
      }}
    </Form>
  )
}

export default AvatarModal
