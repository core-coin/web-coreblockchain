import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import {
    NavItem,
    NavLink
} from 'reactstrap'
import Button from '../Button'
import Torrent from '../SvgIcon/icons/Torrent'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

const TorrentIcon = <Torrent/>

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

        return(
            <>
                <h1 className='title'>{translate.coreNetwork}<span>{translate.coreNetworkHightlight}</span></h1>
                <p className='description'>{translate.coreNetworkDescription}</p>
                <div className='downloadBlock nodeStatus'>
                    <h3>{translate.NodeStatus.title}</h3>
                    <p>{translate.NodeStatus.description}</p>
                    <AnimatedArrow url='' text={translate.NodeStatus.link}/>
                    <Button
                    mobileFullWidth
                    download
                    theme='ghost'
                    size='small'
                    href={translate.NodeStatus.buttonLink}
                    text={translate.NodeStatus.button}
                    icon={TorrentIcon}
                />
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