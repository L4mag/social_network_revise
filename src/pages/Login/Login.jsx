import React from 'react'
import { Alert, Form as BSForm } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Field, Form } from 'react-final-form'
import { compose } from 'redux'
import { connect, useSelector } from 'react-redux'
import { login } from '../../redux/reducers/authReducer'
import { required } from '../tools/validators/validators'

const loginRequired = required('Login')
const passwordRequired = required('Password')

let LoginForm = (props) => {
  const messages = useSelector(
    (state) => state.auth.messages
  )

  return (
    <>
      <Form
        onSubmit={props.onSubmit}
        validate={(values) => {
          const errors = {}
          if (!values.login) {
            errors.login = loginRequired(values.login)
          }
          if (!values.password)
            errors.password = passwordRequired(
              values.password
            )
          return errors
        }}
      >
        {(props) => {
          return (
            <BSForm
              className='position-absolute top-50 start-50 translate-middle'
              onSubmit={props.handleSubmit}
              validated={props.error && props.touched}
            >
              {messages &&
                messages.map((mes) => (
                  <Alert variant='danger'>{mes}</Alert>
                ))}
              <BSForm.Group
                className='mb-3'
                controlId='formBasicEmail'
              >
                <Field
                  name='login'
                  validate={loginRequired}
                >
                  {(props) => (
                    <>
                      <BSForm.Label>Login</BSForm.Label>
                      <BSForm.Control
                        type='login'
                        placeholder='Enter login'
                        required
                        {...props.input}
                      />
                      <BSForm.Control.Feedback type='invalid'>
                        Please provide a valid city.
                      </BSForm.Control.Feedback>
                    </>
                  )}
                </Field>
              </BSForm.Group>

              <BSForm.Group
                className='mb-3'
                controlId='formBasicPassword'
              >
                <Field
                  name='password'
                  validate={passwordRequired}
                >
                  {(props) => (
                    <>
                      <BSForm.Label>Password</BSForm.Label>
                      <BSForm.Control
                        type='password'
                        placeholder='Enter Password'
                        required
                        {...props.input}
                      />
                      <BSForm.Control.Feedback type='invalid'>
                        Please provide a valid city.
                      </BSForm.Control.Feedback>
                    </>
                  )}
                </Field>
              </BSForm.Group>

              <BSForm.Group
                className='mb-3'
                controlId='formBasicCheckbox'
              >
                <Field name='rememberMe' type='checkbox'>
                  {(props) => (
                    <BSForm.Check
                      type='checkbox'
                      label='remember me'
                      {...props.input}
                    />
                  )}
                </Field>
              </BSForm.Group>
              <Button
                variant='primary'
                type='submit'
                disabled={
                  !props.values.login &&
                  !props.values.password
                }
              >
                Login
              </Button>
            </BSForm>
          )
        }}
      </Form>
    </>
  )
}

const Login = (props) => {
  const loginHandler = (data, func) => {
    const { login, password, rememberMe } = data
    props.login(login, password, rememberMe)
    func.reset()
  }

  return <LoginForm onSubmit={loginHandler} />
}

export default compose(connect(null, { login }))(Login)
