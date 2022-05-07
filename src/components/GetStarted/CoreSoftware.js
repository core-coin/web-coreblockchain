import React, { PureComponent } from 'react'
import { withNamespaces, Trans } from 'react-i18next'

import './GetStarted.scss'

class CoreSoftware extends PureComponent{

    render(){

        return(
            <>
                <h1 className='title'>
                    <Trans i18nKey='Get Core Software'>
                    Get <em>Core Software</em>
                    </Trans>
                </h1>
            </>
        )
    }
}

export default withNamespaces()(CoreSoftware)
