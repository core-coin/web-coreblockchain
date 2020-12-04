import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

export class Devices extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }

    renderList = ( item ) => {

        return (
            <ul>
                <li><p>{item}</p></li>
            </ul>
        )
    }

    render(){
        const { translate } = this.props

        return(
            <>
                <h1 className='title'>{translate.coreMining} <span>{translate.coreMiningHightlight}</span></h1>
                <p className='description'>{translate.coreMiningDescription}</p>
                <div className='downloadBlock cpuMiners'>
                    <h3>{translate.CpuMiners.title}</h3>
                    <p>{translate.CpuMiners.description}</p>
                    {translate.devicesList.map(this.renderList)}
                    <AnimatedArrow url='' text={translate.CpuMiners.link} />
                    <AnimatedArrow url='' text={translate.CpuMiners.linkUnder} />
                </div>
            </>
        )
    }
}