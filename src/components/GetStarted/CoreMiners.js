import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { withNamespaces } from 'react-i18next'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

class CoreMiners extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }

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