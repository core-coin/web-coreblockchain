import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Decentralization from '../SvgIcon/icons/Decentralization'
import Security from '../SvgIcon/icons/Security'
import Interoperability from '../SvgIcon/icons/Interoperability'
import Persistence from '../SvgIcon/icons/Persistence'
import Coverage from '../SvgIcon/icons/Coverage'
import Intelligence from '../SvgIcon/icons/Intelligence'

import './Offers.scss'

class Offers extends PureComponent{
    static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { t } = this.props

        const settings = {
            dots: true,
            infinite: false,
            className: 'center',
            centerMode: true,
            centerPadding: '20px',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        }

        return(
            <div className='offers'>
                <Container>
                    <Row>
                        <Col sm='12'>
                            <h3 className='preTitle'>{t('highlights')}</h3>
                            <h1 className='title'>
                                        <Trans i18nKey='main benefits of core blockchain'>
                                            main benefits of <em>core blockchain</em>
                                        </Trans>
                                    </h1>
                        </Col>
                        <Col className='offers__col'>
                            <Slider {...settings}>
                                <div className='offers_block'>
                                    <Decentralization />
                                    <h4>{t('Decentralization')}</h4>
                                    <p>{t('Core distributed computing platform is reliable, secure and available for everyone.')}</p>
                                </div>
                                <div className='offers_block'>
                                    <Security/>
                                    <h4>{t('Security')}</h4>
                                    <p>{t('Twisted Edwards curve — Edwards448 — 224-bit //Spinal Tap-grade// security level.')}</p>
                                </div>
                                <div className='offers_block'>
                                    <Interoperability/>
                                    <h4>{t('Interoperability')}</h4>
                                    <p>{t('Connecting the World using Oracles and distributing Financial instruments through Smart Contracts.')}</p>
                                </div>
                                <div className='offers_block'>
                                    <Coverage/>
                                    <h4>{t('Coverage')}</h4>
                                    <p>{t('Borderless network anywhere in the World run on various networks.')}</p>
                                </div>
                            <div className='offers_block'>
                                <Persistence/>
                                <h4>{t('Persistence')}</h4>
                                <p>{t('Immutable Blockchain transactions are stored in tamper-proof P2P ledgers.')}</p>
                            </div>
                            <div className='offers_block'>
                                <Intelligence/>
                                <h4>{t('Swarm Intelligence')}</h4>
                                <p>{t('Core Blockchain is using a self-organized system — Boids — to transact and route the data.')}</p>
                            </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Offers)