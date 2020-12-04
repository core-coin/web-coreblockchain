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
import Download from '../SvgIcon/icons/Download'
import Torrent from '../SvgIcon/icons/Torrent'
import Chain from '../SvgIcon/icons/Chain'
import Apt from '../SvgIcon/icons/Apt'
import Rpm from '../SvgIcon/icons/Rpm'
import Docker from '../SvgIcon/icons/Docker'
import AptIpfs from '../SvgIcon/icons/AptIpfs'
import Kubernetes from '../SvgIcon/icons/Kubernetes'
import Google from '../SvgIcon/icons/Google'
import Amazon from '../SvgIcon/icons/Amazon'
import Copy from '../SvgIcon/icons/Copy'

import './GetStarted.scss'

const DownloadIcon = <Download/>
const CopyIcon = <Copy/>
const ChainIcon = <Chain/>

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

    getIcon = (title) => {
      const iconMap = {
        'Apt-Get': <Apt/>,
        'RPM': <Rpm/>,
        'Docker Repo': <Docker/>,
        'APT-IPFS': <AptIpfs/>,
        'Kubernetes': <Kubernetes/>,
        'GSP': <Google/>,
        'AWS': <Amazon/>
      }
      return iconMap[title]
    }

    renderTabName = ( tab) => {
        const { activeTab } = this.state

        return(
            <NavItem key={tab.title}>
                <NavLink
                    className={activeTab === tab.title ? 'active' : ''}
                    onClick={() => { this.toggle(tab.title); }}
                >
                    {this.getIcon(tab.title)}
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
                    text={this.props.translate.openLinkBtn}
                    icon={ChainIcon}
                />
                  <Button
                    mobileFullWidth
                    theme='ghost'
                    size='small'
                    href={tab.downloadLink}
                    text={this.props.translate.copyBtn}
                    icon={CopyIcon}
                />
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