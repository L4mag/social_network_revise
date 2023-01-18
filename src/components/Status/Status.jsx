import React, { useEffect, useRef, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { Form as BSForm } from 'react-bootstrap'

const Status = ({
  pushNewStatus,
  isAuth,
  statusText,
  userId,
  authUserId,
}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [status, setStatus] = useState(statusText)

  useEffect(() => {
    setStatus(statusText)
  }, [statusText])

  const onSubmit = (data) => {
    debugger
    pushNewStatus(data.status || '', authUserId)
  }

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <div className='status'>
          <Field name='status' initialValue={status}>
            {(prop) => {
              if (isAuth && isEditMode) {
                console.log(prop.input)
                return (
                  <BSForm.Control
                    autoFocus
                    className='statusInput'
                    name={prop.input.name}
                    onChange={prop.input.onChange}
                    value={prop.input.value}
                    type='text'
                    onBlur={() => {
                      handleSubmit()
                      setIsEditMode(false)
                    }}
                  />
                )
              } else if (status || userId === authUserId) {
                return (
                  <p
                    onDoubleClick={() => {
                      if (isAuth && userId === authUserId) {
                        setIsEditMode(true)
                      }
                    }}
                  >
                    {status ||
                      'Double click here to change your status'}
                  </p>
                )
              }
            }}
          </Field>
          <style>
            {
              '\
              .status{\
              margin: auto;\
              color:white;\
              }\
              .statusInput{\
              height: 1.5em;\
              margin-bottom: 1em;\
              }\
            '
            }
          </style>
        </div>
      )}
    </Form>
  )
}

export default Status
