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
                <h1 className='title'><span>{translate.coreMiningHightlight}</span> {translate.coreMining}</h1>
                <p className='description'>{translate.coreMiningDescription}</p>
                <div className='downloadBlock cpuMiners'>
                    <h3>{translate.CpuMiners.title}</h3>
                    <p>{translate.CpuMiners.description}</p>
                    <AnimatedArrow url='' text={translate.CpuMiners.link} />
                </div>
                <div className='downloadBlock androidMiners'>
                    <h3>{translate.AndroidMiners.title}</h3>
                    <p>{translate.AndroidMiners.description}</p>
                    <AnimatedArrow url='' text={translate.AndroidMiners.link} />
                </div>
            </>
        )
    }
}