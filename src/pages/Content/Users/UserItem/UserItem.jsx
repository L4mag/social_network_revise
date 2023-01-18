import React from 'react'
import style from './UserItem.module.scss'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { toggleIsFollowFetching } from '../../../../redux/reducers/usersReducer'

const UserItem = ({
  name,
  id,
  avatar,
  place,
  status,
  followed,
  onUnFollowHandler,
  onFollowHandler,
  isFollowFetching,
}) => {
  return (
    <Card className={style.userItem}>
      <Card.Body className={style.userItemBody}>
        <NavLink to={`/profile/${id}`}>
          <Image
            className={style.userItemAvatar}
            src={avatar}
            roundedCircle
          />
        </NavLink>
        <div className={style.userItemInfo}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{place}</Card.Text>
          <Card.Text>{status}</Card.Text>
        </div>

        {followed ? (
          <Button
            disabled={isFollowFetching}
            className={style.userItemFollowBtn}
            variant='secondary'
            onClick={() => {
              onUnFollowHandler(id)
            }}
          >
            unfollow
          </Button>
        ) : (
          <Button
            disabled={isFollowFetching}
            variant='primary'
            className={style.userItemFollowBtn}
            onClick={() => {
              onFollowHandler(id)
            }}
          >
            follow
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default UserItem
