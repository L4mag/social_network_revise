import React, { useState } from 'react'
import style from './Info.module.scss'
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap'

const Info = ({ profile }) => {
  const profileInfo = profile

  const [isModalShow, setIsModalShow] = useState(false)

  return (
    <div className={`${style.info}`}>
      <h3>{profileInfo.fullName}</h3>
      <div>
        <div>
          {/*{Object.keys(profile).map((key) => {*/}
          {/*  return (*/}
          {/*    <div>*/}
          {/*      {`${key}`} {`${profile[key]}`}*/}
          {/*    </div>*/}
          {/*  )*/}
          {/*})}*/}
          <ShortProfileDesc
            aboutMe={profile.aboutMe}
            lookingForAJob={profile.lookingForAJob}
            lookingForAJobDescription={
              profile.lookingForAJobDescription
            }
          />
          <Button
            className={style.moreInfo}
            variant='link'
            size='sm'
            onClick={() => setIsModalShow(true)}
          >
            more info
          </Button>

          <FullProfileDescModal
            onHide={() => {
              setIsModalShow(false)
            }}
            show={isModalShow}
            profile={profile}
          />
        </div>
      </div>
    </div>
  )
}

const ShortProfileDesc = ({
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
}) => {
  return (
    <section>
      <div>
        <b>aboutMe:</b> {aboutMe}
      </div>
      <div>
        <b>Looking for a job:</b>{' '}
        {lookingForAJob ? 'Yes' : 'No'}
      </div>
      {lookingForAJob && (
        <div>
          <b>Professional Skills:</b>{' '}
          {lookingForAJobDescription}
        </div>
      )}
    </section>
  )
}

const FullProfileDescModal = ({
  show,
  onHide,
  profile,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Profile info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h6>About Me</h6>
          <p>
            {profile.aboutMe || (
              <i className={style.empty}>empty</i>
            )}
          </p>
          <hr />
        </div>
        <div>
          <h6>Looking for a job</h6>
          <p>{profile.lookingForAJob ? 'Yes' : 'No'}</p>
          <hr />
        </div>
        {profile.lookingForAJob && (
          <div>
            <h6>Professional Skills</h6>
            <p>{profile.lookingForAJobDescription}</p>
            <hr />
          </div>
        )}
        <div>
          <h6>About Me</h6>
          <p>
            {profile.aboutMe || (
              <i className={style.empty}>empty</i>
            )}
          </p>
          <hr />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
export default Info
