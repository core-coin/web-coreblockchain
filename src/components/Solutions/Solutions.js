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
                                {t('Building an inclusive program for global connectivity, our GDN initiative has already connected remote communities, bringing blockchain’s benefits to all corners of the world.')}
                            </p>
                            <a id="booster" />
                            <div className='solutions_block'>
                                <h4>{t('Core Foundation')}</h4>
                                <p>{t('DAO structure allows for community-driven development, with the Booster Program supporting innovative projects that enhance the network’s capabilities.')}</p>
                                <AnimatedArrow text={t('Core booster')} url='mailto:booster@coreblockchain.net' targetBlack />
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Solutions)
