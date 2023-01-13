import React, { useEffect, useRef, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { Form as BSForm } from 'react-bootstrap'

const Status = ({
  pushNewStatus,
  requestStatus,
  isAuth,
  statusText,
  userId,
  authUserId,
}) => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [status, setStatus] = useState(statusText)

  const ref = useRef()

  useEffect(() => {
    requestStatus(userId)
    setStatus(statusText)
  }, [statusText])

  const onSubmit = (data) => {
    pushNewStatus(data.status, authUserId)
  }

  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <div className='status'>
          <Field name='status' initialValue={status}>
            {(prop) => {
              if (isAuth && isEditMode) {
                return (
                  <BSForm.Control
                    autoFocus
                    className='statusInput'
                    name={prop.input.name}
                    onChange={prop.input.onChange}
                    value={prop.input.value}
                    type='text'
                    ref={ref}
                    onBlur={() => {
                      handleSubmit()
                      setIsEditMode(false)
                    }}
                  />
                )
              } else {
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
              margin: auto\
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
