import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import Decentralization from '../SvgIcon/icons/Decentralization'
import Security from '../SvgIcon/icons/Security'
import Interoperability from '../SvgIcon/icons/Interoperability'
import Persistence from '../SvgIcon/icons/Persistence'
import Coverage from '../SvgIcon/icons/Coverage'
import Intelligence from '../SvgIcon/icons/Intelligence'

import './Offers.scss'

class Offers extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            x3: 0,
            x4: 0,
            x5: 0,
            x6: 0,
            x7: 0
        }
    }

    handleMouseEnter = e => {
        this.setState({
          x0: e.screenX - 250 + 'px',
          y0: e.screenY - 250  + 'px',
          x1: e.screenX - 400  + 'px',
          y1: e.screenY - 150 + 'px',
          x2: e.screenX - 650 + 'px',
          x3: e.screenX - 1000 + 'px',
          x4: e.screenX - 1750 + 'px',
          x5: e.screenX - 2100 + 'px',
          x6: e.screenX - 2500 + 'px',
          x7: e.screenX - 2800 + 'px'
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
          x4: 0,
          x5: 0,
          x6: 0,
          x7: 0
        })
      }
    
    render(){
        const { t } = this.props
        let { x0, y0, x1, y1, x2, x3, x4, x5, x6, x7 } = this.state
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
          style5: {
            top: y0,
            left: x4,
          },
          style6: {
            top: y0,
            left: x5,
          },
          style7: {
            top: y1,
            left: x6,
          },
          style8: {
            top: y1,
            left: x7,
          },
        }
        const isLarge = window.innerWidth >= 1740    

        return(
            
            <div className='offers'>
                <Container>
                    <Row>
                        <Col sm='12' md='6'>
                            <Row>
                                <Col sm='12' md='12' lg='10'>
                                    <h3 className='preTitle'>{t('highlights')}</h3>
                                    <h1 className='title'>
                                        <Trans i18nKey='main benefits of core blockchain'>
                                            main benefits of <em>core blockchain</em>
                                        </Trans>
                                    </h1>
                                </Col>
                                <Col sm='12'>
                                    <Row>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__low' 
                                            onMouseMove={this.handleMouseEnter.bind(this)}
                                            onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={isLarge ? style.style5 : style.style1}></div>
                                               <div className='offers_block-box text-center'>
                                                <Decentralization />
                                                    <h4>{t('Decentralization')}</h4>
                                                    <p>{t('Core distributed computing platform is reliable, secure and available for everyone.')}</p>
                                               </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block' onMouseMove={this.handleMouseEnter.bind(this)}
                                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={isLarge ? style.style6 : style.style2}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Security/>
                                                    <h4>{t('Security')}</h4>
                                                    <p>{t('Twisted Edwards curve — Edwards448 — 224-bit //Spinal Tap-grade// security level.')}</p>
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
                                            <div className='before' style={isLarge ? style.style7 : style.style3}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Interoperability/>
                                                    <h4>{t('Interoperability')}</h4>
                                                    <p>{t('Connecting the World using Oracles and distributing Financial instruments through Smart Contracts.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block' 
                                             onMouseMove={this.handleMouseEnter.bind(this)}
                                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={isLarge ? style.style8 : style.style4}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Coverage/>
                                                    <h4>{t('Coverage')}</h4>
                                                    <p>{t('Borderless network anywhere in the World run on various networks.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block'
                                            onMouseMove={this.handleMouseEnter.bind(this)}
                                            onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={isLarge ? style.style7 : style.style3}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Persistence/>
                                                    <h4>{t('Persistence')}</h4>
                                                    <p>{t('Immutable Blockchain transactions are stored in tamper-proof P2P ledgers.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' lg='6' className='zIndex'>
                                            <div className='offers_block offers_block__high'
                                             onMouseMove={this.handleMouseEnter.bind(this)}
                                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                                            <div className='before' style={isLarge ? style.style8 : style.style4}></div>
                                                <div className='offers_block-box text-center'>
                                                    <Intelligence/>
                                                    <h4>{t('Swarm Intelligence')}</h4>
                                                    <p>{t('Core Blockchain is using a self-organized system — Boids — to transact and route the data.')}</p>
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

export default withNamespaces()(Offers)