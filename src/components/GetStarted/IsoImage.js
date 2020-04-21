import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import Button from '../Button'
import CopyInput from '../CopyInput'
import Download from '../Icon/icons/Download'
import Torrent from '../Icon/icons/Torrent'

import './GetStarted.scss'

const DownloadIcon = <Download/>
const TorrentIcon = <Torrent/>

export class IsoImage extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '',
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

    renderTabName = ( tab) => {
        const { activeTab } = this.state

        return(
            <NavItem key={tab.title}>
                <NavLink
                    className={activeTab === tab.title ? 'active' : ''}
                    onClick={() => { this.toggle(tab.title); }}
                >
                    {tab.icon}
                    {tab.title}
                </NavLink>
            </NavItem>
        )
    }

    renderTabContent = ( tab, index ) => {
        return(
            <TabPane key={index} tabId={tab.title}>
                <Button
                    mobileFullWidth
                    theme='green'
                    size='small'
                    href={tab.downloadLink}
                    text={this.props.translate.downloadBtn}
                    icon={DownloadIcon}
                />
                <Button
                    mobileFullWidth
                    theme='green'
                    size='small'
                    href={tab.torrentLink}
                    text={this.props.translate.torrentButton}
                    icon={TorrentIcon}
                />
                <hr/>
                <p>{this.props.translate.downloadScriptText}</p>
                <CopyInput value={tab.script}/>
            </TabPane>
        )
    }

    render(){
        const { translate } = this.props

        const { activeTab } = this.state

        return(
            <div className='isoImage'>
                <div className='tabs_header'>
                    <Nav tabs>
                        {translate.isoImage.map(this.renderTabName)}
                    </Nav>
                </div>
                <div>
                    <TabContent activeTab={activeTab}>
                        {translate.isoImage.map(this.renderTabContent)}
                    </TabContent>
                </div>
            </div>
        )
    }
}