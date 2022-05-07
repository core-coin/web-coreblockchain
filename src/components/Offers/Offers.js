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
import { isMd, isSd, isLg } from '../../utils'

class Offers extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            isMd: isMd(),
            isSd: isSd(),
            isLg: isLg()
        }
    }

    updateIsSd = () => {
        this.setState({ isSd: isSd()});
    };
    updateIsMd = () => {
        this.setState({ isMd: isMd()});
    };
    updateIsLg = () => {
        this.setState({ isLg: isLg()});
    };

	componentDidMount(){
	    window.addEventListener('resize', this.updateIsSd);
      window.addEventListener('resize', this.updateIsMd);
      window.addEventListener('resize', this.updateIsLg);
	    document.querySelectorAll('.offers_block').forEach(
      element => {
          element.onmousemove = (e) => {

	          const x = e.offsetX - e.target.offsetLeft
	          const y = e.offsetY - e.target.offsetTop

	          element.style.setProperty('--x', `${ x }px`)
	          element.style.setProperty('--y', `${ y }px`)

          }
      }
    )
	}
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateIsSd);
        window.removeEventListener('resize', this.updateIsMd);
        window.removeEventListener('resize', this.updateIsLg);
    }


    render(){
        const { t } = this.props

        return(
            <div className='offers'>
                <Container>
                    {this.state.isSd &&
                        <Row>
                        <Col sm='12' md='12'>
                            <Col md='9'>
                                <h3 className='preTitle'>{t('highlights')}</h3>
                                <h1 className='title'>
                                    <Trans i18nKey='main benefits of core blockchain'>
                                        main benefits of <em>core blockchain</em>
                                    </Trans>
                                </h1>
                            </Col>
                        </Col>
                        <Col sm='6' md='6'>
                            <Row>
                                <Col sm='12'>
                                    <Row className='vertical_row'>
                                        <Col sm='12' className='zIndex'>
                                            <div className='offers_block offers_block_md_lower'>
                                                <div className='offers_block-box text-center'>
                                                    <div>
                                                        <Decentralization />
                                                    </div>
                                                    <h4>{t('Decentralization')}</h4>
                                                    <p>{t('Core distributed computing platform is reliable, secure and available for everyone.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center low-height'>
                                                    <div>
                                                        <Security />
                                                    </div>
                                                    <h4>{t('Security')}</h4>
                                                    <p>{t('Twisted Edwards curve — Edwards448 — 224-bit //Spinal Tap-grade// security level.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <div>
                                                        <Interoperability />
                                                    </div>
                                                    <h4>{t('Interoperability')}</h4>
                                                    <p>{t('Connecting the World using Oracles and distributing Financial instruments through Smart Contracts.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm='6' md='6'>
                            <Row>
                                <Col sm='12'>
                                    <Row className='vertical_row'>
                                        <Col sm='12' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <div>
                                                        <Persistence />
                                                    </div>
                                                    <h4>{t('Persistence')}</h4>
                                                    <p>{t('Immutable Blockchain transactions are stored in tamper-proof P2P ledgers.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <div>
                                                        <Coverage />
                                                    </div>
                                                    <h4>{t('Coverage')}</h4>
                                                    <p>{t('Borderless network anywhere in the World run on various networks.')}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm='12' className='zIndex'>
                                            <div className='offers_block'>
                                                <div className='offers_block-box text-center'>
                                                    <div>
                                                        <Intelligence />
                                                    </div>
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
                    }
                    {this.state.isMd &&
                        <Row>
                            <Col sm='12' md='12'>
                                <Col md='6'>
                                    <h3 className='preTitle'>{t('highlights')}</h3>
                                    <h1 className='title'>
                                        <Trans i18nKey='main benefits of core blockchain'>
                                            main benefits of <em>core blockchain</em>
                                        </Trans>
                                    </h1>
                                </Col>
                            </Col>
                            <Col sm='12' md='4'>
                                <Row>
                                    <Col sm='12'>
                                        <Row className='vertical_row'>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block offers_block_md_lower'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                            <Decentralization />
                                                        </div>
                                                        <h4>{t('Decentralization')}</h4>
                                                        <p>{t('Core distributed computing platform is reliable, secure and available for everyone.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center low-height'>
                                                        <div>
                                                            <Security />
                                                        </div>
                                                        <h4>{t('Security')}</h4>
                                                        <p>{t('Twisted Edwards curve — Edwards448 — 224-bit //Spinal Tap-grade// security level.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm='12' md='4'>
                                <Row>
                                    <Col sm='12'>
                                        <Row className='vertical_row'>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block offers_block_md_low'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                            <Interoperability />
                                                        </div>
                                                        <h4>{t('Interoperability')}</h4>
                                                        <p>{t('Connecting the World using Oracles and distributing Financial instruments through Smart Contracts.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                            <Coverage />
                                                        </div>
                                                        <h4>{t('Coverage')}</h4>
                                                        <p>{t('Borderless network anywhere in the World run on various networks.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm='12' md='4'>
                                <Row>
                                    <Col sm='12'>
                                        <Row className='vertical_row'>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                            <Persistence />
                                                        </div>
                                                        <h4>{t('Persistence')}</h4>
                                                        <p>{t('Immutable Blockchain transactions are stored in tamper-proof P2P ledgers.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                            <Intelligence />
                                                        </div>
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
                    }
                    {this.state.isLg &&
                        <Row>
                            <Col sm='12' md='6'>
                                <Row>
                                    <Col sm='12' md='12' lg='10'>
                                        <h3 className='preTitle'>{t('Highlights')}</h3>
                                        <h1 className='title'>
                                            <Trans i18nKey='Main Benefits of Core Blockchain'>
                                                main benefits of <em>core blockchain</em>
                                            </Trans>
                                        </h1>
                                    </Col>
                                    <Col sm='12'>
                                        <Row>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block offers_block__low'>
                                                   <div className='offers_block-box text-center'>
                                                        <div>
                                                          <Decentralization />
                                                        </div>
                                                        <h4>{t('Decentralization')}</h4>
                                                        <p>{t('Core distributed computing platform is reliable, secure and available for everyone.')}</p>
                                                   </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center low-height'>
                                                        <div>
                                                          <Security />
                                                        </div>
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
                                                <div className='offers_block offers_block__lower'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                          <Interoperability />
                                                        </div>
                                                        <h4>{t('Interoperability')}</h4>
                                                        <p>{t('Connecting the World using Oracles and distributing Financial instruments through Smart Contracts.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                          <Coverage />
                                                        </div>
                                                        <h4>{t('Coverage')}</h4>
                                                        <p>{t('Borderless network anywhere in the World run on various networks.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block'>
                                                    <div className='offers_block-box text-center'>
                                                        <div>
                                                          <Persistence />
                                                        </div>
                                                        <h4>{t('Persistence')}</h4>
                                                        <p>{t('Immutable Blockchain transactions are stored in tamper-proof P2P ledgers.')}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm='12' lg='6' className='zIndex'>
                                                <div className='offers_block offers_block__high'>
                                                    <div className='offers_block-box text-center'>
                                                       <div>
                                                         <Intelligence />
                                                       </div>
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
                    }
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Offers)
