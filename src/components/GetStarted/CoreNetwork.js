import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import Select from '../Select'
import CopyInput from '../CopyInput'

import AnimatedArrow from '../AnimatedArrow'

import { IsoImage } from './IsoImage'


import './GetStarted.scss'

export class CoreNetwork extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'ISO Image'
        }
    }

    static propTypes = {
        translate: object,
        language: string,
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    }

    renderTabName = ( tab ) => {
        const {activeTab} = this.state

        return (
            <NavItem key={tab}>
                <NavLink
                    className={activeTab === tab ? 'active' : ''}
                    onClick={() => {
                        this.toggle(tab);
                    }}
                >
                    {tab}
                </NavLink>
            </NavItem>
        )
    }

    render(){
        const { translate } = this.props

        const { activeTab } = this.state

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