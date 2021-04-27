import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

class CoreMiners extends PureComponent{

    render(){
        const { t } = this.props

        return(
            <>
                <div className='downloadBlock androidMiners'>
                    <h3>{t('Core CPU miners')}</h3>
                    <p>{t('By mining, you can earn cryptocurrency with your CPU hashing power. CPU-based miners to start dig your Ores.')}</p>
                    <AnimatedArrow url='' text={t('Mining pools')} />
                </div>
            </>
        )
    }
}

export default withNamespaces()(CoreMiners)