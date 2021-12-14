import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col,
    Collapse
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

// import Logo from '../../images/logo.webp'
import Plus from '../SvgIcon/icons/Plus'
import Cube from '../SvgIcon/icons/Cube'
import Cryptohub from '../SvgIcon/icons/Cryptohub'
import Github from '../SvgIcon/icons/Github'
import Discord from '../SvgIcon/icons/Discord'
import Twitter from '../SvgIcon/icons/Twitter'

import './Footer.scss'

class Footer extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isContactOpen: false,
            isLinksOpen: false,
            isDevOpen: false,
        }
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
        const { t } = this.props

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
                                        <a href='/' onClick={this.onToggleContact} className='toggle_header'>{t('Contact')} <Plus/></a>
                                        <Collapse isOpen={isContactOpen} className='toggle_content'>
                                            <a href='mailto:contact@corecoin.cc'>contact@corecoin.cc</a>
                                        </Collapse>
                                    </Col>
                                    <Col xs='12' className={isDevOpen ? 'toggle open' : 'toggle'}>
                                        <a href='/' onClick={this.onToggleDev} className='toggle_header'>{t('Development')} <Plus/></a>
                                        <Collapse isOpen={isDevOpen} className='toggle_content'>
                                            <a href='/'>{t('Developer Portal')}</a>
                                            <a href='/'>{t('mprovementProposals')}</a>
                                            <a href='/'>{t('Core Talk')}</a>
                                        </Collapse>
                                    </Col>
                                    <Col xs='12' className={isLinksOpen ? 'toggle open' : 'toggle'}>
                                        <a href='/' onClick={this.onToggleLinks} className='toggle_header'>{t('Useful links')}<Plus/></a>
                                        <Collapse isOpen={isLinksOpen} className='toggle_content'>
                                            <a href='/'>{t('Open-source License')}</a>
                                            <a href='/'>{t('Report bug')}</a>
                                            <a href='/'>{t('tradeMark')}</a>
                                            <a href='/'>{t('Brand identity')}</a>
                                            <div className='icons'>
                                                <a href='/'><Cube/></a>
                                                <a href='/'><Cryptohub/></a>
                                                <a href='/'><Github/></a>
                                                <a href='/'><Discord/></a>
                                                <a href='/'><Twitter/></a>
                                            </div>
                                        </Collapse>
                                    </Col>
                                </Row>
                            </Col>
                        )}
                        <Col>
                            <div className='text-center footer_logo'>
                                {/*<div className='footer_logo-img'>*/}
                                {/*    <img src={Logo} alt="Core Chain"/>*/}
                                {/*</div>*/}
                                <p className='text-center'>{t('Copyright © 2018-2021 Core Foundation. All Rights Reserved.')}</p>
                                {/*<p className='text-center'>{t('Website last updated Jan 31, 2021')}</p>*/}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Footer)
