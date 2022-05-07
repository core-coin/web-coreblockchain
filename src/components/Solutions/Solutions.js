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
                        <div className='solutions_col_left'><div className='solutions_background'/></div>
                        <div className='solutions_col_right'>
                            <h3 className='preTitle'>{t('Ecosystem')}</h3>
                            <h1 className='title'>
                            <Trans i18nKey='Core Blockchain Social Impact'>
                                SOCIAL IMPACT PROVIDED
                                BY  <em>CORE BLOCKCHAIN</em>
                            </Trans>
                            </h1>
                            <p className='description'>
                                {t('Our mission is to build a Global Decentralized Network //GDN// to cover all areas of the planet using multiple communication technologies along with the Core Blockchain platform. We are creating an inclusion program suited for all people.')}
                            </p>
                            <div className='solutions_block'>
                                <h4>{t('Core Foundation')}</h4>
                                <p>{t('A decentralized structure within the whole ecosystem allows for voting through the Core Foundation. We welcome any new ideas for the blockchain. The blockchain has a program to award projects — Core Community Fund //CCF// — deemed to be beneficial for the network.')}</p>
                                <AnimatedArrow text={t('Introduce Project')} url='https://coretalk.info/c/projects/5/' targetBlack />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Solutions)
