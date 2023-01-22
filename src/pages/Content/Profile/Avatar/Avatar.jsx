import React from 'react'
import style from './Avatar.module.scss'
import useModal from '../../../../hooks/useModal'
import AvatarModal from '../../../../components/Modals/AvatarModal/AvatarModal'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { postProfilePhoto } from '../../../../redux/reducers/profileReducer'

const Avatar = ({ img, userId, authUserId }) => {
  const dispatch = useDispatch()

  const [isModalShow, setIsModalShow, onModalHide] =
    useModal(null)

  const onAvatarSubmit = ({ avatar }) => {
    console.log('Submit')

    dispatch(postProfilePhoto(avatar, userId))
    setIsModalShow(false)
  }

  return (
    <>
      <div className={style.avatar}>
        <img src={img} alt='Avatar' />
        {userId === authUserId && (
          <>
            {' '}
            <Button
              onClick={() => setIsModalShow(true)}
              className={style.hidden}
            >
              Change image
            </Button>
            <AvatarModal
              show={isModalShow}
              onHide={onModalHide}
              onSubmit={onAvatarSubmit}
            />
          </>
        )}
      </div>
      {/* <div id={style.overlay}></div> */}
    </>
  )
}

export default Avatar
