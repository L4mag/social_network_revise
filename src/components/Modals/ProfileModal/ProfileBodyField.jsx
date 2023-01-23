import React from 'react'
import { Field } from 'react-final-form'
import { Form } from 'react-bootstrap'

const ProfileBodyField = ({
  initialValue,
  name,
  component,
  title,
  meta,
  ...restPros
}) => {
  return (
    <div>
      <h6>{title}</h6>
      {initialValue && typeof initialValue === 'object' ? (
        <div>
          {Object.keys(initialValue).map((val) => {
            return (
              <div>
                <span>{val}: </span>

                <Field
                  name={`${name}.${val}`}
                  component={component}
                  initialValue={initialValue[val]}
                  style={{ marginLeft: 'auto' }}
                  {...restPros}
                >
                  {(prop) => {
                    return (
                      <Form.Control
                        type={component}
                        {...prop.input}
                      />
                    )
                  }}
                </Field>
              </div>
            )
          })}
        </div>
      ) : (
        <Field
          name={name}
          initialValue={initialValue}
          {...restPros}
        >
          {({ input, meta }) => (
            <div>
              <label>{name}</label>
              <input {...input} type='text' />
              {meta.error && meta.touched && (
                <span>{meta.error}</span>
              )}
            </div>
          )}
        </Field>
      )}
      <hr />
    </div>
  )
}

export default ProfileBodyField
