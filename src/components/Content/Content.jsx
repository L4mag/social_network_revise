import React from 'react'
import style from './Content.module.scss'
import { Routes, Route } from 'react-router-dom'
import News from '../News/News'
import Music from '../Music/Music'
import Videos from '../Videos/Videos'
import Settings from '../Settings/Settings'
import DialogContainer from './Dialogs/Dialog/DialogContainer'
import DialogsContainer from './Dialogs/DialogsContainer'
import ProfileContainer from './Profile/ProfileContainer'
import UsersContainer from './Users/UsersContainer'
import Login from '../Login/Login'

const Content = () => {
  return (
    <main className={`${style.content} ${style.block}`}>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route
          index
          path={'profile/:userId?'}
          element={<ProfileContainer />}
        />

        <Route
          path={'/'}
          element={<ProfileContainer />}
        />
        <Route
          path='dialogs'
          element={<DialogsContainer />}
        />
        <Route
          path='dialogs/1'
          element={<DialogContainer />}
        />
        <Route path='users' element={<UsersContainer />} />
        <Route path='news' element={<News />} />
        <Route path='music' element={<Music />} />
        <Route path='videos' element={<Videos />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </main>
  )
}

export default Content
