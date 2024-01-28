import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Decentralization2 from './imgs/descentralization.svg'
import Security from './imgs/security.svg'
import Interoperability from './imgs/interoperability.svg'
import Persistence from './imgs/persistence.svg'
import Coverage from './imgs/coverage.svg'
import Intelligence from './imgs/coverage.svg'


import './Offers.scss'

class Offers extends PureComponent{

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
                            <h3 className='preTitle'>{t('Highlights')}</h3>
                            <h1 className='title'>
                                        <Trans i18nKey='Main Benefits of Core Blockchain'>
                                            main benefits of <em>core blockchain</em>
                                        </Trans>
                                    </h1>
                        </Col>
                        <Col className='offers__col'>
                            <Slider {...settings}>
                                <div className='offers_block'>
                                    <img src={Decentralization2} className="img-fluid" alt="" />
                                    <h4>{t('Decentralization')}</h4>
                                    <p>{t('Reliable, secure, and universally accessible distributed computing platform ensures fair and transparent access, illustrated by our global voting system for network decisions.')}</p>
                                </div>
                                <div className='offers_block'>
                                  <img src={Security} className="img-fluid" alt="" />
                                    <h4>{t('Security')}</h4>
                                    <p>{t('Twisted Edwards Curve – Edwards448 encryption provides 224-bit, Spinal Tap-grade security, safeguarding transactions even in the most demanding financial environments.')}</p>
                                </div>
                                <div className='offers_block'>
                                    <img src={Interoperability} className="img-fluid" alt="" />
                                    <h4>{t('Interoperability')}</h4>
                                    <p>{t('Connect diverse financial systems seamlessly with Oracles and Smart Contracts, enabling versatile and innovative financial applications.')}</p>
                                </div>
                                <div className='offers_block'>
                                    <img src={Coverage} className="img-fluid" alt="" />
                                    <h4>{t('Coverage')}</h4>
                                    <p>{t('Embrace a borderless network accessible from anywhere in the world, adaptable to various technological environments.')}</p>
                                </div>
                            <div className='offers_block'>
                                <img src={Persistence} className="img-fluid" alt="" />
                                <h4>{t('Trustworthy')}</h4>
                                <p>{t('Immutable blockchain transactions where integrity is defined by data being securely stored in tamper-proof P2P ledgers.')}</p>
                            </div>
                            <div className='offers_block'>
                                <img src={Intelligence} className="img-fluid" alt="" />
                                <h4>{t('Swarm Intelligence')}</h4>
                                <p>{t('Core Blockchain uses self-organized nodes, optimizing data transaction and routing for maximum efficiency and reliability.')}</p>
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
