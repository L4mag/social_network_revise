import React from 'react'
import style from './Post.module.scss'
import { Col, Container, Row } from 'react-bootstrap'

const Post = ({ avatar, author, text }) => {
  return (
    <div className={`${style.post}`}>
      <Container>
        <div className={style.postHeader}>
          <Row>
            <Col sm='1'>
              <img src={`${avatar}`} alt={`${author}`} />
            </Col>
            <Col sm='11'>
              <div className={`${style.author}`}>
                {author}
              </div>
              <div className={style.publishTime}>
                {'2023-01-13 13:00'}
              </div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <div className={`${style.text}`}>{text}</div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Post
