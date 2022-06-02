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
import { isMobile } from '../../utils'
import Facebook from '../../images/facebook.svg'
import Youtube from '../../images/youtube.svg'
import Linkedin from '../../images/linkedin.svg'
import Reddit from '../../images/reddit.svg'
import Instagram from '../../images/instagram.svg'
import Telegram from '../../images/telegram.svg'


import './Footer.scss'
import { Link } from 'react-router-dom'
import i18n from "i18next";

class Footer extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isContactOpen: false,
            isLinksOpen: false,
            isDevOpen: false,
            isMobile: isMobile()
        }
    }

    onToggleContact = (e) => {
        e.preventDefault()
        this.setState({
            isContactOpen: !this.state.isContactOpen,
        })
    }

    onToggleDev = (e) => {
        e.preventDefault()
        this.setState({
            isDevOpen: !this.state.isDevOpen,
        })
    }

    onToggleLinks = (e) => {
        e.preventDefault()
        this.setState({
            isLinksOpen: !this.state.isLinksOpen,
        })
    }

    updateIsMobile = () => {
        this.setState({isMobile:isMobile()});
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateIsMobile);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsMobile);
    }

    render(){
        const { t } = this.props

        const { isContactOpen, isDevOpen, isLinksOpen } = this.state

        return(
          <div>
              {this.state.isMobile ? (
                <div>
                    <Col sm='12'>
                        <Row className="contact-container">
                            <Col xs='12'>
                                <p className="title">{t('Get in Touch')}</p>
                            </Col>
                            <Col xs='12' className={isContactOpen ? 'toggle open' : 'toggle'}>
                                <a href='/' onClick={this.onToggleContact} className='toggle_header'>{t('Contact')} <Plus/></a>
                                <Collapse isOpen={isContactOpen} className='toggle_content'>
                                    <a href='mailto:contact@coreblockchain.cc'>contact@coreblockchain.cc</a>
                                </Collapse>
                            </Col>
                            <Col xs='12' className={isDevOpen ? 'toggle open' : 'toggle'}>
                                <a href='/' onClick={this.onToggleDev} className='toggle_header'>{t('Development')} <Plus/></a>
                                <Collapse isOpen={isDevOpen} className='toggle_content'>
                                    <a href='https://dev.coreblockchain.cc/' target='_blank' rel="noreferrer">{t('Developer Portal')}</a>
                                    <a href='https://cip.coreblockchain.cc/' target='_blank' rel="noreferrer">{t('Core Improvement Proposals')}</a>
                                    <a href='https://blog.coreblockchain.cc/' target='_blank' rel="noreferrer">{t('Blog')}</a>
                                    <a href='https://coretalk.space/' target='_blank' rel="noreferrer">{t('Core Talk')}</a>
                                </Collapse>
                            </Col>
                            <Col xs='12' className={isLinksOpen ? 'toggle open' : 'toggle'}>
                                <a href='/' onClick={this.onToggleLinks} className='toggle_header'>{t('Useful Links')}<Plus/></a>
                                <Collapse isOpen={isLinksOpen} className='toggle_content'>
                                    <a href='https://github.com/core-coin/go-core/issues' target='_blank' rel="noreferrer">{t('Issues List')}</a>
                                    <a href='https://github.com/core-coin/go-core/pulls' target='_blank' rel="noreferrer">{t('Pull Requests')}</a>
                                    <a href='https://dev.coreblockchain.cc/report/bug' target='_blank' rel="noreferrer">{t('Report Bug')}</a>
                                    <a href='mailto:booster@coreblockchain.cc'>{t('Core booster')}</a>
                                    <div className='icons'>
                                        <a href='https://coretalk.space/' target='_blank' rel="noreferrer"><Cube/></a>
                                        <a href='https://github.com/cryptohub-digital' target='_blank' rel="noreferrer"><Cryptohub/></a>
                                        <a href='https://github.com/core-coin' target='_blank' rel="noreferrer"><Github/></a>
                                        <a href='https://discord.gg/SCxmFr5Pwp' target='_blank' rel="noreferrer"><Discord/></a>
                                        <a href='https://twitter.com/corecoincc' target='_blank' rel="noreferrer"><Twitter/></a>
                                    </div>
                                    <div className='icons d-flex'>
                                        <a href='https://t.me/coreblockchaincc' target='_blank' rel="noreferrer"><img src={Telegram} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.facebook.com/corecoincc' target='_blank' rel="noreferrer"><img src={Facebook} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.instagram.com/corecoincc/' target='_blank' rel="noreferrer"><img src={Instagram} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.linkedin.com/company/core-blockchain' target='_blank' rel="noreferrer"><img src={Linkedin} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.reddit.com/r/CoreCoinCC/' target='_blank' rel="noreferrer"><img src={Reddit} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.youtube.com/channel/UCQ_X4HgniaUPpxL7b6O4KJQ' target='_blank' rel="noreferrer"><img src={Youtube} alt={''} className={'social-media-icon'}/></a>
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                    </Col>
                    <div className='footer_mobile'>
                        <p className='text-center footer_copyright_mobile'>{t('Core Foundation // Copyright and related rights waived via CC0.')}</p>
                    </div>
                </div>
              ) : (
                <div className='footer'>
                    <div className='footer_contact'>
                        <Container>
                            <div className='footer_container'>
                                <Col md="4">
                                    <p className="title">{t('Get in Touch')}</p>
                                    <a href='mailto:contact@coreblockchain.cc'>contact@coreblockchain.cc</a>
                                    <div className='footer_contact__icons'>
                                        <a href='https://coretalk.space/' target='_blank' rel="noreferrer"><Cube className="social-media-icon"/></a>
                                        <a href='https://github.com/cryptohub-digital' target='_blank' rel="noreferrer"><Cryptohub  className="social-media-icon"/></a>
                                        <a href='https://github.com/core-coin' target='_blank' rel="noreferrer"><Github  className="social-media-icon"/></a>
                                        <a href='https://discord.gg/SCxmFr5Pwp' target='_blank' rel="noreferrer"><Discord  className="social-media-icon"/></a>
                                        <a href='https://twitter.com/corecoincc' target='_blank' rel="noreferrer"><Twitter  className="social-media-icon"/></a>

                                    </div>
                                    <div className='footer_contact__icons'>
                                        <a href='https://www.facebook.com/corecoincc' target='_blank' rel="noreferrer"><img src={Facebook} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.instagram.com/corecoincc/' target='_blank' rel="noreferrer"><img src={Instagram} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.linkedin.com/company/core-blockchain' target='_blank' rel="noreferrer"><img src={Linkedin} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.reddit.com/r/CoreCoinCC/' target='_blank' rel="noreferrer"><img src={Reddit} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://www.youtube.com/channel/UCQ_X4HgniaUPpxL7b6O4KJQ' target='_blank' rel="noreferrer"><img src={Youtube} alt={''} className={'social-media-icon'}/></a>
                                        <a href='https://t.me/coreblockchaincc' target='_blank' rel="noreferrer"><img src={Telegram} alt={''} className={'social-media-icon'}/></a>
                                    </div>
                                </Col>
                                <Row className="footer_row">
                                    <Col md="6" className='footer_contact_section'>
                                        <p className="title">{t('Useful Links')}</p>
                                        <a href='https://github.com/core-coin/go-core/issues' target='_blank' rel="noreferrer">{t('Issues List')}</a>
                                        <a href='https://github.com/core-coin/go-core/pulls' target='_blank' rel="noreferrer">{t('Pull Requests')}</a>
                                        <a href='https://dev.coreblockchain.cc/report/bug' target='_blank' rel="noreferrer">{t('Report Bug')}</a>
                                        <a href='mailto:booster@coreblockchain.cc'>{t('Core booster')}</a>
                                        <Link to={`/${i18n.language}/terms-conditions`}>{t('Terms and Conditions')}</Link>
                                        <Link to={`/${i18n.language}/privacy-policy`}>{t('Privacy Policy')}</Link>
                                    </Col>
                                    <Col md="6" className='footer_contact_section footer_contact_development'>
                                        <p className="title">{t('Development')}</p>
                                        <a href='https://dev.coreblockchain.cc/' target='_blank' rel="noreferrer">{t('Developer Portal')}</a>
                                        <a href='https://cip.coreblockchain.cc/' target='_blank' rel="noreferrer">{t('Core Improvement Proposals')}</a>
                                        <a href='https://blog.coreblockchain.cc/' target='_blank' rel="noreferrer">{t('Blog')}</a>
                                        <a href='https://coretalk.space/' target='_blank' rel="noreferrer">{t('Core Talk')}</a>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                    <div className='footer_copyright'>
                        <Container>
                            <Row>
                                <Col>
                                    <p>{t('Core Foundation // Copyright and related rights waived via CC0.')}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                  )}
          </div>
        )
    }
}

export default withNamespaces()(Footer)
