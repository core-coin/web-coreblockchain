import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'

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

        return(
            <div className='offers'>
                <Container>
                    <Row>
                        <Col sm='12' md='6'>
                            <Row>
                                <Col sm='12' md='12' lg='9'>
                                    <h3 className='preTitle'>{OFFERS.preTitle}</h3>
                                    <h1 className='title'>{OFFERS.title} <span>{OFFERS.highlightTitle}</span></h1>
                                </Col>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__lower'>
                                                <Decentralization />
                                                <h4>{OFFERS.decentralization}</h4>
                                                <p>{OFFERS.decentralizationText}</p>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'>
                                                <Security/>
                                                <h4>{OFFERS.security}</h4>
                                                <p>{OFFERS.securityText}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm='12' md='6'>
                            <Row>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__lower'>
                                                <Interoperability/>
                                                <h4>{OFFERS.interoperability}</h4>
                                                <p>{OFFERS.interoperabilityText}</p>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'>
                                                <Coverage/>
                                                <h4>{OFFERS.coverage}</h4>
                                                <p>{OFFERS.coverageText}</p>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'>
                                                <Persistence/>
                                                <h4>{OFFERS.persistence}</h4>
                                                <p>{OFFERS.persistenceText}</p>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__higher'>
                                                <Intelligence/>
                                                <h4>{OFFERS.swarmIntelligence}</h4>
                                                <p>{OFFERS.swarmIntelligenceText}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}