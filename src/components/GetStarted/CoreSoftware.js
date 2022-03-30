import React, { PureComponent } from 'react'
import { withNamespaces, Trans } from 'react-i18next'

import './GetStarted.scss'

class CoreSoftware extends PureComponent{

    render(){

        return(
            <>
                <h1 className='title'>
                    <Trans i18nKey='Get core software'>
                    Get <em>core software</em>
                    </Trans>
                </h1>
            </>
        )
    }
}

export default withNamespaces()(CoreSoftware)
