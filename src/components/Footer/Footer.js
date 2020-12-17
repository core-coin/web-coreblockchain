import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col,
    Collapse
} from 'reactstrap'

import Logo from '../../images/logo.png'
import Plus from '../SvgIcon/icons/Plus'
import Cube from '../SvgIcon/icons/Cube'
import Cryptohub from '../SvgIcon/icons/Cryptohub'
import Github from '../SvgIcon/icons/Github'
import Discord from '../SvgIcon/icons/Discord'
import Twitter from '../SvgIcon/icons/Twitter'

import './Footer.scss'

export default class Footer extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isContactOpen: false,
            isLinksOpen: false,
            isDevOpen: false,
        }
    }


    static propTypes = {
        translate: object,
        language: string,
    }

    onToggleContact = () => {
        this.setState({
            isContactOpen: !this.state.isContactOpen,
        })
    }

    onToggleDev = () => {
        this.setState({
            isDevOpen: !this.state.isDevOpen,
        })
    }

    onToggleLinks = () => {
        this.setState({
            isLinksOpen: !this.state.isLinksOpen,
        })
    }

    render(){
        const { translate: { FOOTER, CONTACTS } } = this.props

        const { isContactOpen, isDevOpen, isLinksOpen } = this.state

        const isMobile = window.innerWidth <= 767;

        return(
            <div className='footer'>
                <Container>
                    <Row>
                    {isMobile && (
                            <Col sm='12'>
                                <Row>
                                    <Col xs='12' className={isContactOpen ? 'toggle open' : 'toggle'}>
                                        <a onClick={this.onToggleContact} className='toggle_header'>{CONTACTS.contact} <Plus/></a>
                                        <Collapse isOpen={isContactOpen} className='toggle_content'>
                                            <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                                        </Collapse>
                                    </Col>
                                    <Col xs='12' className={isDevOpen ? 'toggle open' : 'toggle'}>
                                        <a onClick={this.onToggleDev} className='toggle_header'>{CONTACTS.development} <Plus/></a>
                                        <Collapse isOpen={isDevOpen} className='toggle_content'>
                                            <a href=''>{CONTACTS.developerPortals}</a>
                                            <a href=''>{CONTACTS.improvementProposals}</a>
                                            <a href=''>{CONTACTS.coreTalk}</a>
                                        </Collapse>
                                    </Col>
                                    <Col xs='12' className={isLinksOpen ? 'toggle open' : 'toggle'}>
                                        <a onClick={this.onToggleLinks} className='toggle_header'>{CONTACTS.usefulLinks}<Plus/></a>
                                        <Collapse isOpen={isLinksOpen} className='toggle_content'>
                                            <a href=''>{CONTACTS.openSource}</a>
                                            <a href=''>{CONTACTS.reportBug}</a>
                                            <a href=''>{CONTACTS.tradeMark}</a>
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
                        <Col>
                            <div className='text-center footer_logo'>
                                <div className='footer_logo-img'>
                                    <img src={Logo} alt="Core Chain"/>
                                </div>
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