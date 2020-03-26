import React, { PureComponent } from 'react'
import { number, object, string } from 'prop-types'
import {
    Container,
    Row,
    Col,
    Collapse
} from 'reactstrap'

import Cube from '../Icon/icons/Cube'
import Cryptohub from '../Icon/icons/Cryptohub'
import Github from '../Icon/icons/Github'
import Discord from '../Icon/icons/Discord'
import Twitter from '../Icon/icons/Twitter'
import Plus from '../Icon/icons/Plus'
import Button from '../Button'

import './Contacts.scss'

export default class Contacts extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isContactOpen: false,
            isLinksOpen: false
        }
    }

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

    onToggleContact = () => {
        this.setState({
            isContactOpen: !this.state.isContactOpen,
        })
    }

    onToggleLinks = () => {
        this.setState({
            isLinksOpen: !this.state.isLinksOpen,
        })
    }

    render(){
        const { blockTime, networkHashrate, difficulty, translate: { CONTACTS } } = this.props

        const { isContactOpen, isLinksOpen } = this.state

        const isMobile = window.innerWidth <= 500;

        return(
            <div className='contacts'>
                <Container>
                    <Row>
                        <Col sm='12' lg='5' className='contacts_left hidden-xs'>
                            <h2>{CONTACTS.getInTouch}</h2>
                            <div className='contacts_left__block'>
                                <p>{CONTACTS.contact}</p>
                                <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                            </div><div className='contacts_left__block'>
                            <p>{CONTACTS.development}</p>
                            <a href='mailto:developer@.corecoin.cc'>developer@.corecoin.cc</a>
                        </div><div className='contacts_left__block'>
                            <p>{CONTACTS.usefulLinks}</p>
                            <a href=''>{CONTACTS.improvementProposals}</a>
                            <a href=''>{CONTACTS.coreFoundation}</a>
                            <a href=''>{CONTACTS.coreTalk}</a>
                            <a href=''>{CONTACTS.brandIdentity}</a>
                        </div>
                            <div className='contacts_left__icons'>
                                <a href=''> <Cube currentColor='46b549'/></a>
                                <a href=''><Cryptohub currentColor='46b549'/></a>
                                <a href=''><Github currentColor='46b549'/></a>
                                <a href=''><Discord currentColor='46b549'/></a>
                                <a href=''><Twitter currentColor='46b549'/></a>
                            </div>
                        </Col>
                        <Col sm='12' lg='7' xl={{ size: 6, offset: 1 }} className='contacts_right'>
                            <h3 className='preTitle'>{CONTACTS.getStarted}</h3>
                            <h1 className='title'>{CONTACTS.core} <span>{CONTACTS.mining}</span></h1>
                            <p className='description'>{CONTACTS.description}</p>
                            <div className='contacts_right__info'>
                                <div className='contacts_right__info-block'>
                                    <p>{CONTACTS.blockTime}</p>
                                    <span>{blockTime}s</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{CONTACTS.networkHashrate}</p>
                                    <span>{networkHashrate} TH/s</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{CONTACTS.difficulty}</p>
                                    <span>{difficulty} H</span>
                                </div>
                            </div>
                            <div className='contacts_right__button'>
                                <Button
                                    theme='green'
                                    size='normal'
                                    text={CONTACTS.downloadMiner}
                                    href=''
                                />
                                <Button
                                    theme='ghost'
                                    size='normal'
                                    text={CONTACTS.miningPools}
                                    href=''
                                />
                            </div>
                        </Col>
                        {isMobile && (
                            <Col sm='12'>
                                <Row>
                                    <Col xs='12' className={isContactOpen ? 'toggle open' : 'toggle'}>
                                        <a onClick={this.onToggleContact} className='toggle_header'>{CONTACTS.contact} <Plus/></a>
                                        <Collapse isOpen={isContactOpen} className='toggle_content'>
                                            <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                                        </Collapse>
                                    </Col>
                                    <Col xs='12' className={isLinksOpen ? 'toggle open' : 'toggle'}>
                                        <a onClick={this.onToggleLinks} className='toggle_header'>{CONTACTS.usefulLinks}<Plus/></a>
                                        <Collapse isOpen={isLinksOpen} className='toggle_content'>
                                            <a href=''>{CONTACTS.improvementProposals}</a>
                                            <a href=''>{CONTACTS.coreFoundation}</a>
                                            <a href=''>{CONTACTS.coreTalk}</a>
                                            <a href=''>{CONTACTS.brandIdentity}</a>
                                            <div className='icons'>
                                                <a href=''> <Cube currentColor='46b549'/></a>
                                                <a href=''><Cryptohub currentColor='46b549'/></a>
                                                <a href=''><Github currentColor='46b549'/></a>
                                                <a href=''><Discord currentColor='46b549'/></a>
                                                <a href=''><Twitter currentColor='46b549'/></a>
                                            </div>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        )
    }
}