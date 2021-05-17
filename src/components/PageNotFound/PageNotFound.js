import React, { PureComponent } from 'react'
import { Row, Container } from 'reactstrap'
import { string } from 'prop-types'
import Button from '../Button'
import MetaTags from 'react-meta-tags'

import './PageNotFound.scss'

export default class PageNotFound extends PureComponent {
	static propTypes = {
		language: string,
	}

  render() {
	  const { language, } = this.props

    return (
      <>
	      <MetaTags>
		      <title>
			      404 page not found
		      </title>
	      </MetaTags>
        <div className='pageNotFound'>
          <Row>
            <Container>
              <div>
              </div>
              <div className='text-center'>
                <h1>Whoa!</h1>
                <p>Looks like something’s missing</p>
                <Button href={`/${language}`} theme='green' type='router' text='Back to Home' />
              </div>
            </Container>
          </Row>
        </div>
      </>
    )
  }
}
