import React from 'react'
import style from '../../../pages/Content/Profile/Info/Info.module.scss'

const ProfileBodyLine = ({ header, content }) => {
  let contentComponents = null

  if (content && typeof content === 'object') {
    contentComponents = (
      <ul>
        {Object.keys(content).map((c) => {
          return (
            <li>
              {c}:{' '}
              {(
                <a href={`https://${content[c]}`}>
                  {' '}
                  {content[c]}{' '}
                </a>
              ) || <i className={style.empty}>empty</i>}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <div>
        <h6>{header}</h6>
        {contentComponents || (
          <p>
            {<pre>{content}</pre> || (
              <i className={style.empty}>empty</i>
            )}
          </p>
        )}
      </div>
      <hr />
    </>
  )
}

export default ProfileBodyLine
