import React, { PureComponent } from 'react'
import { Row, Container } from 'reactstrap'
import Button from '../Button'

import './PageNotFound.scss'

export default class PageNotFound extends PureComponent {
  render() {
    return (
      <>
        <div className='pageNotFound'>
          <Row>
            <Container>
              <div>
              </div>
              <div className='text-center'>
                <h1>Whoa!</h1>
                <p>Looks like something’s missing</p>
                <Button href='/' theme='green' text='Back to Home' />
              </div>
            </Container>
          </Row>
        </div>
      </>
    )
  }
}
