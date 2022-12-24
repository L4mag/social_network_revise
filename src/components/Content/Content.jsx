import React from 'react'
import style from './Content.module.scss'
import { Routes, Route } from 'react-router-dom'
import Profile from './Profile/Profile'
import News from '../News/News'
import Music from '../Music/Music'
import Videos from '../Videos/Videos'
import Settings from '../Settings/Settings'
import DialogContainer from './Dialogs/Dialog/DialogContainer'
import DialogsContainer from './Dialogs/DialogsContainer'

const Content = ({ store }) => {
  return (
    <main className={`${style.content} ${style.block}`}>
      <Routes path='/' element={<Content />}>
        <Route index element={<Profile store={store} />} />
        <Route
          path='dialogs'
          element={<DialogsContainer store={store} />}
        />
        <Route
          path='dialogs/1'
          element={<DialogContainer store={store} />}
        />
        <Route path='news' element={<News />} />
        <Route path='music' element={<Music />} />
        <Route path='videos' element={<Videos />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </main>
  )
}

export default Content
