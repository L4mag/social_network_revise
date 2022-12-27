import React from 'react'
import style from './Header.module.scss'
import UserImage from './../../assets/user.png'

const Header = (props) => {
  const userImage = props.profile
    ? !props.profile.photos.small
      ? UserImage
      : props.profile.photos.small
    : UserImage

  return (
    <header className={`${style.header} ${style.block}`}>
      <div style={{ display: 'flex' }}>
        <h1>Header</h1>
        <div style={{ marginLeft: 'auto' }}>
          {props.isAuth ? (
            <div
              style={{
                flexDirection: 'column',
                display: 'flex',
              }}
            >
              <img
                style={{ margin: 'auto' }}
                src={userImage}
                width='50'
                alt=''
              />
              <div>{props.user.login}</div>
            </div>
          ) : (
            <div>Login</div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
