import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import './Solutions.scss'

export default class Solutions extends PureComponent{
    static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { translate: { SOLUTIONS }} = this.props

        return(
            <div className='solutions'>
                <Container>
                    <Row>
                        <Col sm='12' lg={{ size: 7, offset: 5 }}>
                            <h3 className='preTitle'>{SOLUTIONS.preTitle}</h3>
                            <h1 className='title'>{SOLUTIONS.title} <span>{SOLUTIONS.highlightTitle}</span></h1>
                            <p className='description'>{SOLUTIONS.description}</p>
                            <div className='solutions_block'>
                                <h4>{SOLUTIONS.coreFoundation}</h4>
                                <p>{SOLUTIONS.text}</p>
                                <a href=''>{SOLUTIONS.link}</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}