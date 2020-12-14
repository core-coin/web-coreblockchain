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
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            x3: 0,
        }
    }
    static propTypes = {
        translate: object,
        language: string,
    }

    handleMouseEnter = e => {
        this.setState({
          x0: e.screenX - 250 + 'px',
          y0: e.screenY - 250  + 'px',
          x1: e.screenX - 400  + 'px',
          y1: e.screenY - 150 + 'px',
          x2: e.screenX - 650 + 'px',
          x3: e.screenX - 1000 + 'px',
        })
      }

      handleMouseLeave = e => {
        this.setState({
          x0: 0,
          y0: 0,
          x1: 0,
          y1: 0,
          x2: 0,
          x3: 0,
        })
      }
    
    render(){
        const { translate: { OFFERS }} = this.props
        let { x0, y0, x1, y1, x2, x3 } = this.state
        const style = {
          style1: {
            top: y0,
            left: x0,
          },
          style2: {
            top: y0,
            left: x1,
          },
          style3: {
            top: y1,
            left: x2,
          },
          style4: {
            top: y1,
            left: x3,
          },
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
                                            <div className='offers_block offers_block__low' 
                                            onMouseMove={this.handleMouseEnter.bind(this)}
                                            onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={style.style1}></div>
                                               <div className='offers_block-box text-center'>
                                                <Decentralization />
                                                    <h4>{OFFERS.decentralization}</h4>
                                                    <p>{OFFERS.decentralizationText}</p>
                                               </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block' onMouseMove={this.handleMouseEnter.bind(this)}
                                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={style.style2}></div>
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
                                            <div className='offers_block offers_block__lower' 
                                            onMouseMove={this.handleMouseEnter.bind(this)}
                                            onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={style.style3}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Interoperability/>
                                                    <h4>{OFFERS.interoperability}</h4>
                                                    <p>{OFFERS.interoperabilityText}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block' 
                                             onMouseMove={this.handleMouseEnter.bind(this)}
                                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={style.style4}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Coverage/>
                                                    <h4>{OFFERS.coverage}</h4>
                                                    <p>{OFFERS.coverageText}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'
                                            onMouseMove={this.handleMouseEnter.bind(this)}
                                            onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={style.style3}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Persistence/>
                                                    <h4>{OFFERS.persistence}</h4>
                                                    <p>{OFFERS.persistenceText}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__high'
                                             onMouseMove={this.handleMouseEnter.bind(this)}
                                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={style.style4}></div>
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