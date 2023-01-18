import React from 'react'
import { Field } from 'react-final-form'

const ProfileBodyField = ({
  initialValue,
  name,
  component,
  title,
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
                />
              </div>
            )
          })}
        </div>
      ) : (
        <Field
          name={name}
          component={component}
          initialValue={initialValue}
          style={
            restPros.type !== 'checkbox'
              ? { width: '100%' }
              : null
          }
          {...restPros}
        />
      )}
      <hr />
    </div>
  )
}

export default ProfileBodyField
