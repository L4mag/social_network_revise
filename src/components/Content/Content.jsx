import React from 'react'
import style from './Content.module.scss'
import { Routes, Route } from 'react-router-dom'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import News from '../News/News'
import Music from '../Music/Music'
import Videos from '../Videos/Videos'
import Settings from '../Settings/Settings'
import Dialog from './Dialogs/Dialog/Dialog'

const Content = ({ state }) => {
  const dialogsPage = state.state.dialogsPage
  const profilePage = state.state.profilePage
  const addPost = state.addPost
  const handleAddPostInput = state.handleAddPostInput
  const addMessage = state.addMessage
  const handleAddMessageInput = state.handleAddMessageInput

  return (
    <main className={`${style.Content} ${style.block}`}>
      <Routes path='/' element={<Content />}>
        <Route
          index
          element={
            <Profile
              data={profilePage}
              addPost={addPost}
              handleAddPostInput={handleAddPostInput}
            />
          }
        />
        <Route
          path='dialogs'
          element={<Dialogs data={dialogsPage} />}
        />
        <Route
          path='dialogs/1'
          element={
            <Dialog
              data={dialogsPage}
              addMessage={addMessage}
              handleAddMessageInput={handleAddMessageInput}
            />
          }
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
