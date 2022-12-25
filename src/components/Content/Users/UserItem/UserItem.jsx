import React from 'react'
import style from './UserItem.module.scss'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const UserItem = ({
  name,
  id,
  avatar,
  place,
  status,
  isFollowed,
  onUnFollowHandler,
  onFollowHandler,
}) => {
  return (
    <Card className={style.userItem}>
      <Card.Body className={style.userItemBody}>
        <Image
          className={style.userItemAvatar}
          src={avatar}
          roundedCircle
        />
        <div className={style.userItemInfo}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{place}</Card.Text>
          <Card.Text>{status}</Card.Text>
        </div>
        {isFollowed ? (
          <Button
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
