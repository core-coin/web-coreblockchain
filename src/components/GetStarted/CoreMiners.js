import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

export class CoreMiners extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { translate } = this.props

        return(
            <>
                <div className='downloadBlock androidMiners'>
                    <h3>{translate.AndroidMiners.title}</h3>
                    <p>{translate.AndroidMiners.description}</p>
                    <AnimatedArrow url='' text={translate.AndroidMiners.link} />
                </div>
            </>
        )
    }
}