import React, { PureComponent } from 'react'
import { number, object, string } from 'prop-types'
import {
    Container,
    Row,
    Col,
    Collapse
} from 'reactstrap'

import Cube from '../SvgIcon/icons/Cube'
import Cryptohub from '../SvgIcon/icons/Cryptohub'
import Github from '../SvgIcon/icons/Github'
import Discord from '../SvgIcon/icons/Discord'
import Twitter from '../SvgIcon/icons/Twitter'
import Plus from '../SvgIcon/icons/Plus'
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
        algorithm: string,
        difficulty: number,
        translate: object,
        language: string,
    }

    static defaultProps = {
        blockTime: 200,
        algorithm: 'RandomY',
        difficulty: 333,
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
        const { blockTime, algorithm, difficulty, translate: { CONTACTS } } = this.props

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
                                <a href='mailto:contact@coreblockchain.cc'>contact@coreblockchain.cc</a>
                            </div><div className='contacts_left__block'>
                            <p>{CONTACTS.development}</p>
                            <a href=''>{CONTACTS.developerPortals}</a>
                            <a href=''>{CONTACTS.improvementProposals}</a>
                            <a href=''>{CONTACTS.coreTalk}</a>
                        </div><div className='contacts_left__block'>
                            <p>{CONTACTS.usefulLinks}</p> 
                            <a href=''>{CONTACTS.openSource}</a>
                            <a href=''>{CONTACTS.reportBug}</a>
                            <a href=''>{CONTACTS.tradeMark}</a>
                            <a href=''>{CONTACTS.brandIdentity}</a>
                        </div>
                            <div className='contacts_left__icons'>
                                <a href=''><Cube/></a>
                                <a href=''><Cryptohub/></a>
                                <a href=''><Github/></a>
                                <a href=''><Discord/></a>
                                <a href=''><Twitter/></a>
                            </div>
                        </Col>
                        <Col sm='12' lg='7' xl={{ size: 6, offset: 1 }} className='contacts_right'>
                            <h3 className='preTitle'>{CONTACTS.random}</h3>
                            <h1 className='title'>{CONTACTS.core} <span>{CONTACTS.mining}</span></h1>
                            <p className='description'>{CONTACTS.description}</p>
                            <div className='contacts_right__info'>
                                <div className='contacts_right__info-block'>
                                    <p>{CONTACTS.blockTime}</p>
                                    <span>{blockTime} H/s</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{CONTACTS.algorithm}</p>
                                    <span>{algorithm}</span>
                                </div>
                                <div className='contacts_right__info-block'>
                                    <p>{CONTACTS.difficulty}</p>
                                    <span>{difficulty} TH/s</span>
                                </div>
                            </div>
                            <div className='contacts_right__button'>
                                <Button
                                    theme='green'
                                    download
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
                                                <a href=''><Cube/></a>
                                                <a href=''><Cryptohub/></a>
                                                <a href=''><Github/></a>
                                                <a href=''><Discord/></a>
                                                <a href=''><Twitter/></a>
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