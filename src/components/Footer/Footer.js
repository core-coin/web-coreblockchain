import React, { PureComponent } from 'react'
import { number, object, string } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import Cube from '../Icon/icons/Cube'
import Cryptohub from '../Icon/icons/Cryptohub'
import Github from '../Icon/icons/Github'
import Discord from '../Icon/icons/Discord'
import Twitter from '../Icon/icons/Twitter'
import FooterLogo from '../Icon/icons/FooterLogo'
import Button from '../Button'

import './Footer.scss'

export default class Footer extends PureComponent{
    static propTypes = {
        blockTime: number,
        networkHashrate: number,
        difficulty: number,
        translate: object,
        language: string,
    }

    static defaultProps = {
        blockTime: 13.60,
        networkHashrate: 143.1,
        difficulty: 0.00,
    }

    render(){
        const { blockTime, networkHashrate, difficulty, translate: { FOOTER } } = this.props

        return(
            <div className='footer'>
                <Container>
                    <Row>
                        <Col sm={12} md={5} className='footer_left'>
                            <h2>{FOOTER.getInTouch}</h2>
                            <div className='footer_left__block'>
                                <p>{FOOTER.contact}</p>
                                <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                            </div><div className='footer_left__block'>
                                <p>{FOOTER.development}</p>
                                <a href='mailto:developer@.corecoin.cc'>developer@.corecoin.cc</a>
                            </div><div className='footer_left__block'>
                                <p>{FOOTER.usefulLinks}</p>
                                <a href=''>{FOOTER.improvementProposals}</a>
                                <a href=''>{FOOTER.coreFoundation}</a>
                                <a href=''>{FOOTER.coreTalk}</a>
                                <a href=''>{FOOTER.brandIdentity}</a>
                            </div>
                            <div className='footer_left__icons'>
                                <a href=''> <Cube currentColor='46b549'/></a>
                                <a href=''><Cryptohub currentColor='46b549'/></a>
                                <a href=''><Github currentColor='46b549'/></a>
                                <a href=''><Discord currentColor='46b549'/></a>
                                <a href=''><Twitter currentColor='46b549'/></a>
                            </div>
                        </Col>
                        <Col md={{ size: 6, offset: 1 }} className='footer_right'>
                            <h3>{FOOTER.getStarted}</h3>
                            <h1>{FOOTER.core} <span>{FOOTER.mining}</span></h1>
                            <p>{FOOTER.description}</p>
                            <div className='footer_right__info'>
                                <div className='footer_right__info-block'>
                                    <p>{FOOTER.blockTime}</p>
                                    <span>{blockTime}s</span>
                                </div>
                                <div className='footer_right__info-block'>
                                    <p>{FOOTER.networkHashrate}</p>
                                    <span>{networkHashrate} TH/s</span>
                                </div>
                                <div className='footer_right__info-block'>
                                    <p>{FOOTER.difficulty}</p>
                                    <span>{difficulty} H</span>
                                </div>
                            </div>
                            <div className='footer_right__button'>
                                <Button
                                    theme='green'
                                    size='normal'
                                    text={FOOTER.downloadMiner}
                                    href=''
                                />
                                <Button
                                    theme='ghost'
                                    size='normal'
                                    text={FOOTER.miningPools}
                                    href=''
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className='text-center footer_logo'>
                                <FooterLogo/>
                                <p className='text-center'>{FOOTER.copyRights}</p>
                                <p className='text-center'>{FOOTER.websiteUpdate}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}