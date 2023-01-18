import React from 'react'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineCog,
  HiOutlineMail,
  HiOutlineMusicNote,
  HiOutlineNewspaper,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineVideoCamera,
} from 'react-icons/hi'

const Navbar = () => {
  return (
    <nav className={`${style.nav}`}>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='/profile'
        >
          <HiOutlineUser /> Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='dialogs'
        >
          <HiOutlineMail /> Dialogs
        </NavLink>
      </div>

      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='users'
        >
          <HiOutlineUsers /> Users
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='news'
        >
          <HiOutlineNewspaper /> News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='music'
        >
          <HiOutlineMusicNote /> Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='videos'
        >
          <HiOutlineVideoCamera /> Videos
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='settings'
        >
          <HiOutlineCog /> Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
