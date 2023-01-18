import React from 'react'
import style from '../../../pages/Content/Profile/Info/Info.module.scss'

const ProfileBodyLine = ({ header, content }) => {
  let contentComponents = null

  if (typeof content === 'object') {
    contentComponents = (
      <ul>
        {Object.keys(content).map((c) => {
          return (
            <li>
              {c}:{' '}
              {content[c] || (
                <i className={style.empty}>empty</i>
              )}
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
            {content || (
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
