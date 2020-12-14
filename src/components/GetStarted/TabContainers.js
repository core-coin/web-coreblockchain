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
import Chain from '../SvgIcon/icons/Chain'
import Docker from '../SvgIcon/icons/Docker'
import Helm from '../SvgIcon/icons/Helm'

import './GetStarted.scss'

const ChainIcon = <Chain/>

export class TabContainers extends PureComponent{
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
        'Docker': <Docker/>,
        'Helm': <Helm/>,
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
            </TabPane>
        )
    }

    render(){
        const { translate } = this.props

        const { activeTab } = this.state

        return(
            <div className='isoImage'>
                <div className='tabs_header'>
                    <Nav tabs className='tabs-noscroll'>
                        {translate.tabContainers.map(this.renderTabName)}
                    </Nav>
                </div>
                <div>
                    <TabContent activeTab={activeTab}>
                        {translate.tabContainers.map(this.renderTabContent)}
                    </TabContent>
                </div>
            </div>
        )
    }
}