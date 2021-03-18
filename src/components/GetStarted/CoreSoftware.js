import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import './GetStarted.scss'

export class CoreSoftware extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }


    render(){
        const { translate } = this.props

        return(
            <>
                <h1 className='title'>{translate.coreSoftware} <span>{translate.coreSoftwareHighlight}</span></h1>
                <p className='description'>{translate.coreSoftwareDescription}</p>              
            </>
        )
    }
}
