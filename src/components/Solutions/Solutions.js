import React, { PureComponent } from 'react'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'

import AnimatedArrow from '../AnimatedArrow'
import './Solutions.scss'

class Solutions extends PureComponent{

    render(){
        const { t } = this.props

        return(
            <div className='solutions'>
                <Container>
                    <Row>
                        <Col md='d-none' lg='6'><div className='solutions_background'></div></Col>
                        <Col sm='12' lg={{ size: 6 }}>
                            <h3 className='preTitle'>{t('Ecosystem')}</h3>
                            <h1 className='title'>
                            <Trans i18nKey='Core Blockchain Social Impact'>
                               Core Blockchain <em>Social Impact</em>
                            </Trans>
                            </h1>
                            <p className='description'>{t('Our mission is building a Global Decentralized Network //GDN// to cover all areas on the planet using multiple communication technologies along with Core Blockchain platform. We are creating an Inclusion program suited for all people.')}</p>
                            <div className='solutions_block'>
                                <h4>{t('Core Foundation')}</h4>
                                <p>{t('A decentralized structure within the whole ecosystem allowing voting through the CORE FOUNDATION. We are inviting any new ideas for the Blockchain. Blockchain has a program to award projects — Core Community Fund //CCF// — deemed to be beneficial for the network.')}</p>
                                <AnimatedArrow text={t('Learn more')} url=''/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Solutions)