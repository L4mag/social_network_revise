import React, { useEffect } from 'react'
import { Alert, Form as BSForm } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { Field, Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/redux'
import { required } from '../../tools/validators/validators'
import { FormApi } from 'final-form'
import { authSlice } from '../../redux/reducers/authSlice'
import { IAuthData } from '../../types/types'
import { fetchLogin } from '../../redux/reducers/authActionCreators'

const loginRequired = required('Login')
const passwordRequired = required('Password')

type LoginProps = {
  onSubmit(data: IAuthData, func: FormApi): void
}

const LoginForm = (props: LoginProps) => {
  const [errors, captchaUrl] = useAppSelector((state) => [
    state.authReducer.errors,
    state.authReducer.captchaUrl,
  ])

  return (
    <>
      <Form onSubmit={props.onSubmit}>
        {(props) => {
          return (
            <BSForm
              className='position-absolute top-50 start-50 translate-middle'
              onSubmit={props.handleSubmit}
            >
              {errors &&
                errors.map((err) => (
                  <Alert variant='danger'>{err}</Alert>
                ))}
              <BSForm.Group
                className='mb-3'
                controlId='formBasicEmail'
              >
                <Field
                  name='email'
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

              {captchaUrl && (
                <>
                  <img src={captchaUrl} alt='Captcha' />
                  <BSForm.Group className='mb-3'>
                    <Field name='captcha'>
                      {(props) => (
                        <>
                          <BSForm.Label>
                            Captcha
                          </BSForm.Label>
                          <BSForm.Control
                            type='text'
                            placeholder='Enter Text'
                            required
                            {...props.input}
                          />
                        </>
                      )}
                    </Field>
                  </BSForm.Group>
                </>
              )}

              <BSForm.Group
                className='mb-3'
                controlId='formBasicCheckbox'
              >
                {/* <Field name='rememberMe' type='checkbox'>
                  {(props) => (
                    <BSForm.Check
                      label='remember me'
                      {...props.input}
                    />
                  )}
                </Field> */}
              </BSForm.Group>
              <Button
                variant='primary'
                type='submit'
                disabled={
                  !props.values.email &&
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

const Login = () => {
  const dispatch = useAppDispatch()

  const login = (data: IAuthData): void => {
    dispatch(fetchLogin(data))
  }

  const loginHandler = (data: IAuthData, func: FormApi) => {
    debugger
    login(data)
    func.reset()
  }

  return <LoginForm onSubmit={loginHandler} />
}

export default Login
