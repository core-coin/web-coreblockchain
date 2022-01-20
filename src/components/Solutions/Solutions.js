import React, { PureComponent } from 'react'
import {
    Container,
    Row,
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
                        <div className='solutions_col_left'><div className='solutions_background'></div></div>
                        <div className='solutions_col_right'>
                            <h3 className='preTitle'>{t('Ecosystem')}</h3>
                            <h1 className='title'>
                            <Trans i18nKey='Core Blockchain Social Impact'>
                                SOCIAL IMPACT PROVIDED
                                BY  <em>CORE BLOCKCHAIN</em>
                            </Trans>
                            </h1>
                            <p className='description'>
                                <Trans i18nKey='Our mission is building a Global Decentralized Network //GDN// to cover all areas on the planet using multiple communication technologies along with Core Blockchain platform We are creating an Inclusion program suited for all people'>
                                    Our mission is building a Global Decentralized Network (GDN) to cover all areas on the planet using multiple communication technologies along with Core Blockchain platform.
                                    <p className="secondary-p">We are creating an Inclusion program suited for all people.</p>
                                </Trans>
                            </p>
                            <div className='solutions_block'>
                                <h4>{t('Core Foundation')}</h4>
                                <p>{t('A decentralized structure within the whole ecosystem allowing voting through the CORE FOUNDATION We are inviting any new ideas for the Blockchain Blockchain has a program to award projects — Core Community Fund //CCF// — deemed to be beneficial for the network')}</p>
                                <AnimatedArrow text={t('Learn more')} url=''/>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Solutions)
