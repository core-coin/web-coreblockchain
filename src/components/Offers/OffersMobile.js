import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
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

export default class Offers extends PureComponent{
    static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { translate: { OFFERS }} = this.props

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
                            <h3 className='preTitle'>{OFFERS.preTitle}</h3>
                            <h1 className='title'>{OFFERS.title} <span>{OFFERS.highlightTitle}</span></h1>
                        </Col>
                        <Col>
                            <Slider {...settings}>
                                <div className='offers_block'>
                                    <Decentralization />
                                    <h4>{OFFERS.decentralization}</h4>
                                    <p>{OFFERS.decentralizationText}</p>
                                </div>
                                <div className='offers_block'>
                                    <Security/>
                                    <h4>{OFFERS.security}</h4>
                                    <p>{OFFERS.securityText}</p>
                                </div>
                                <div className='offers_block'>
                                    <Interoperability/>
                                    <h4>{OFFERS.interoperability}</h4>
                                    <p>{OFFERS.interoperabilityText}</p>
                                </div>
                                <div className='offers_block'>
                                    <Coverage/>
                                    <h4>{OFFERS.coverage}</h4>
                                    <p>{OFFERS.coverageText}</p>
                                </div>
                            <div className='offers_block'>
                                <Persistence/>
                                <h4>{OFFERS.persistence}</h4>
                                <p>{OFFERS.persistenceText}</p>
                            </div>
                            <div className='offers_block'>
                                <Intelligence/>
                                <h4>{OFFERS.swarmIntelligence}</h4>
                                <p>{OFFERS.swarmIntelligenceText}</p>
                            </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}