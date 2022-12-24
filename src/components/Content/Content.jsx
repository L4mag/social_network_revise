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

const Content = () => {
  return (
    <main className={`${style.content} ${style.block}`}>
      <Routes path='/' element={<Content />}>
        <Route index element={<ProfileContainer />} />
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
