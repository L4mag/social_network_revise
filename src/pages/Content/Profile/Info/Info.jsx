import React, { useState } from 'react'
import style from './Info.module.scss'
import Button from 'react-bootstrap/Button'
import { Modal } from 'react-bootstrap'
import { Field, Form } from 'react-final-form'
import ProfileModal from '../../../../components/Modals/ProfileModal/ProfileModal'

const Info = ({ profile, postProfile }) => {
  const profileInfo = profile

  const [isModalShow, setIsModalShow] = useState(false)
  const [isProfileEditMode, setIsProfileEditMode] =
    useState(false)

  const onProfileSubmit = (data) => {
    const profileData = { userId: profile.userId, ...data }
    postProfile(profileData)
    setIsModalShow(false)
  }

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

          <ProfileModal
            onHide={() => {
              setIsModalShow(false)
            }}
            show={isModalShow}
            profile={profile}
            isProfileEditMode={isProfileEditMode}
          />

          {/*<FullProfileDesc*/}
          {/*  onHide={() => {*/}
          {/*    setIsModalShow(false)*/}
          {/*  }}*/}
          {/*  onProfileSubmit={onProfileSubmit}*/}
          {/*  show={isModalShow}*/}
          {/*  profile={profile}*/}
          {/*  isProfileEditMode={isProfileEditMode}*/}
          {/*/>*/}
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

const FullProfileDesc = ({
  show,
  onHide,
  profile,
  isProfileEditMode,
  onProfileSubmit,
}) => {
  const contactsComponents = Object.keys(
    profile.contacts
  ).map((contact) => {
    return (
      <li>
        {contact}:{' '}
        {profile.contacts[contact] || (
          <i className={style.empty}>empty</i>
        )}
      </li>
    )
  })

  const contactsComponentsFields = () =>
    Object.keys(profile.contacts).map((contact) => {
      return (
        <li
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '150px',
          }}
        >
          {contact}:{' '}
          <Field
            name={`contacts.${contact}`}
            component='input'
            initialValue={profile.contacts[contact]}
          />
        </li>
      )
    })

  return (
    <Modal
      show={show}
      onHide={onHide}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Form onSubmit={onProfileSubmit}>
        {(props) => {
          return (
            <>
              <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                  Profile info
                </Modal.Title>
                <a
                  href=''
                  onClick={(e) => {
                    e.preventDefault()
                    setIsProfileEditMode(true)
                  }}
                >
                  Edit
                </a>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <h6>About Me</h6>
                  <Field
                    name='aboutMe'
                    component='textarea'
                    initialValue={profile.aboutMe}
                    style={{ width: '100%' }}
                  />
                  <hr />
                </div>
                <div>
                  <h6>Looking for a job</h6>
                  <Field
                    name='lookingForAJob'
                    component='input'
                    type='checkbox'
                    initialValue={profile.lookingForAJob}
                  />
                  <hr />
                </div>
                {props.values.lookingForAJob && (
                  <div>
                    <h6>Professional Skills</h6>
                    <Field
                      name='lookingForAJobDescription'
                      component='textarea'
                      initialValue={
                        profile.lookingForAJobDescription
                      }
                      style={{ width: '100%' }}
                    />
                    <hr />
                  </div>
                )}
                <div>
                  <h6>Contacts</h6>
                  <ul>{contactsComponentsFields()}</ul>
                  <hr />
                </div>
                <div>
                  <h6>Full Name</h6>
                  <Field
                    name='fullName'
                    component='input'
                    initialValue={profile.fullName}
                    style={{ width: '100%' }}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={props.handleSubmit}>
                  Save
                </Button>
                <Button onClick={onHide}>Close</Button>
              </Modal.Footer>
            </>
          )
        }}
      </Form>
    </Modal>
  )
}

const FullProfileDescEdit = ({ show, onHide, profile }) => {
  const contactsComponents = Object.keys(
    profile.contacts
  ).map((contact) => {
    return (
      <li>
        {contact}:{' '}
        {profile.contacts[contact] || (
          <i className={style.empty}>empty</i>
        )}
      </li>
    )
  })

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
          <h6>Contacts</h6>
          <ul>{contactsComponents}</ul>
          <hr />
        </div>
        <div>
          <h6>Full Name</h6>
          <p>
            {profile.fullName || (
              <i className={style.empty}>empty</i>
            )}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Info
