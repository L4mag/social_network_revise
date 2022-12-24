import React from 'react'
import style from './Navbar.module.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={`${style.nav} ${style.block}`}>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='/'
        >
          Account
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='dialogs'
        >
          Dialogs
        </NavLink>
      </div>

      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='users'
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='news'
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='music'
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='videos'
        >
          Videos
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? style.active : ''
          }
          to='settings'
        >
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
