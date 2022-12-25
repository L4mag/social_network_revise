import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Preloader = () => {
  return (
    <Spinner
      animation='border'
      variant='light'
      style={{ margin: 'auto' }}
    />
  )
}

export default Preloader
