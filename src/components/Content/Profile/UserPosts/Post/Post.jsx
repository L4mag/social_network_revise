import React from 'react'
import style from './Post.module.scss'

const Post = (props) => {
  const author = props.author
  const text = props.text
  const img = props.img

  return (
    <div className={`${style.post}`}>
      <img src={`${img}`} alt={`${author}`} />
      <div className={`${style.author}`}>{author}</div>
      <br />
      <div className={`${style.text}`}>{text}</div>
    </div>
  )
}

export default Post
