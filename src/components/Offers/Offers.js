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
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
    }
    static propTypes = {
        translate: object,
        language: string,
    }

    componentDidMount() {
        let x =  20
        this.setState({ x })
        let y =  20
        this.setState({ y })
      }
    
    render(){
        const { translate: { OFFERS }} = this.props
        let { x, y } = this.state
        const style = {
                left: x,
                top: y,            
        }

        return(
            <div className='offers'>
                <Container>
                    <Row>
                        <Col sm='12' md='6'>
                            <Row>
                                <Col sm='12' md='12' lg='10'>
                                    <h3 className='preTitle'>{OFFERS.preTitle}</h3>
                                    <h1 className='title'>{OFFERS.title} <span>{OFFERS.highlightTitle}</span></h1>
                                </Col>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__low'>
                                               <div className='offers_block-box text-center'>
                                                <Decentralization />
                                                    <h4>{OFFERS.decentralization}</h4>
                                                    <p>{OFFERS.decentralizationText}</p>
                                               </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <Security/>
                                                    <h4>{OFFERS.security}</h4>
                                                    <p>{OFFERS.securityText}</p>
                                                </div>
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
                                                <div className='offers_block-box text-center'>
                                                    <Interoperability/>
                                                    <h4>{OFFERS.interoperability}</h4>
                                                    <p>{OFFERS.interoperabilityText}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <Coverage/>
                                                    <h4>{OFFERS.coverage}</h4>
                                                    <p>{OFFERS.coverageText}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <Persistence/>
                                                    <h4>{OFFERS.persistence}</h4>
                                                    <p>{OFFERS.persistenceText}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__high'>
                                                <div className='offers_block-box text-center'>
                                                    <Intelligence/>
                                                    <h4>{OFFERS.swarmIntelligence}</h4>
                                                    <p>{OFFERS.swarmIntelligenceText}</p>
                                                </div>
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