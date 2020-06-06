import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Button from '../Button'
import Arrow from '../SvgIcon/icons/Arrow'


import MouseIcon from './MouseIcon'

import './HeroHeader.scss'

export default class HeroHeader extends PureComponent{
    static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { translate: {HEROHEADER} } = this.props

        return(
            <div className='heroHeader'>
                <Container>
                    <Row className='heroHeader_bg'>
                        <Col sm='12' lg={{ size: 10, offset: 1 }}>
                            <h1 className='title'>{HEROHEADER.title} <span>{HEROHEADER.highlightTitle}</span></h1>
                        </Col>
                        <Col sm='12' lg={{ size: 8, offset: 2 }}>
                            <p className='description'>{HEROHEADER.subtitle}</p>
                        </Col>
                        <Col sm={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }} xl={{ size: 6, offset: 3 }} className='text-center'>
                            <Button
                                theme='green'
                                size='normal'
                                text={HEROHEADER.actionBtn}
                                type='router'
                                href='/get-started'
                            />
                            <Button
                                theme='ghost'
                                size='normal'
                                text={HEROHEADER.infoBtn}
                            />
                        </Col>
                        <Col sm='12' md='12' className='hidden-xs'>
                            <MouseIcon />
                            <div className='heroHeader_icon'>
                                <Arrow/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}