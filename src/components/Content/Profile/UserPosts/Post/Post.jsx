import React from 'react'
import style from './Post.module.scss'

const Post = ({ avatar, author, text }) => {
  return (
    <div className={`${style.post}`}>
      <img src={`${avatar}`} alt={`${author}`} />
      <div className={`${style.author}`}>{author}</div>
      <br />
      <div className={`${style.text}`}>{text}</div>
    </div>
  )
}

export default Post
