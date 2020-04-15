import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

export class CoreNetwork extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }

    render(){
        const { translate } = this.props

        return(
            <>
                <h1 className='title'><span>{translate.coreNetworkHightlight}</span> {translate.coreNetwork}</h1>
                <p className='description'>{translate.coreNetworkDescription}</p>
                <div className='downloadBlock nodeStatus'>
                    <h3>{translate.NodeStatus.title}</h3>
                    <p>{translate.NodeStatus.description}</p>
                    <AnimatedArrow url='' text={translate.NodeStatus.link}/>
                </div>
                <div className='downloadBlock'>
                    <h3>{translate.CoreTransaction.title}</h3>
                    <p>{translate.CoreTransaction.description}</p>
                    <AnimatedArrow url='' text={translate.CoreTransaction.link}/>
                </div>
            </>
        )
    }
}