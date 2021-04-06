import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { withNamespaces, Trans } from 'react-i18next'

import './GetStarted.scss'

class CoreSoftware extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }


    render(){
        const { t } = this.props

        return(
            <>
                <h1 className='title'>
                    <Trans i18nKey='Get core software'>
                    Get <em>core software</em>
                    </Trans>
                </h1>
                <p className='description'>{t('Join the Borderless network anywhere in the World run on various networks.')}</p>              
            </>
        )
    }
}

export default withNamespaces()(CoreSoftware)
