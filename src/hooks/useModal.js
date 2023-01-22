import { useState } from 'react'

const useModal = (onModalHideFunc) => {
  const [isModalShow, setIsModalShow] = useState(false)

  const onModalHide = () => {
    setIsModalShow(false)
    if (onModalHideFunc) onModalHideFunc()
  }

  return [isModalShow, setIsModalShow, onModalHide]
}

export default useModal
