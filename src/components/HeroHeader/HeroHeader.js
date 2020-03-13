import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Button from '../Button'
import Arrow from '../Icon/icons/Arrow'

import { HeroScreen } from '../../constants'

import MouseIcon from './MouseIcon'

import './HeroHeader.scss'

export default class HeroHeader extends PureComponent{

    render(){

        return(
            <div className='heroHeader'>
                <Container>
                    <Row>
                        <Col sm='12' md={{ size: 10, offset: 1 }}>
                            <h1>{HeroScreen.title} <span>{HeroScreen.highlightTitle}</span></h1>
                        </Col>
                        <Col sm='12' md={{ size: 8, offset: 2 }}>
                            <p>{HeroScreen.subtitle}</p>
                        </Col>
                        <Col sm='12' md={{ size: 6, offset: 3 }} className='text-center'>
                            <Button
                                theme='green'
                                size='normal'
                                text={HeroScreen.actionBtn}
                            />
                            <Button
                                theme='ghost'
                                size='normal'
                                text={HeroScreen.infoBtn}
                            />
                        </Col>
                        <Col sm='12'>
                            <MouseIcon />
                            <div className='heroHeader_icon'>
                                <Arrow width={9} height={19} viewBox='0 0 9 19' currentColor={434359}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}