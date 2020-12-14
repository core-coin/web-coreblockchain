import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import { Image } from './Image'
import { TabContainers } from './TabContainers'
import { Deployment } from './Deployment'
import { Repos } from './Repos'
import Key from '../SvgIcon/icons/Key'

import './GetStarted.scss'

const KeyIcon = <Key />

export class Distribution extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'Repos'
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
                <div className='downloadBlock'>
                    <h3>{translate.nodeDistributionTitle}</h3>
                    <div className='tabs_header'>
                        <Nav tabs>
                            {translate.nodeDistributionTabName.map(this.renderTabName)}
                        </Nav>
                    </div>
                    <div>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='Repos'>
                                <Repos translate={translate}/>
                            </TabPane>
                            <TabPane tabId='Deployment'>
                                <Deployment translate={translate}/>
                            </TabPane>
                            <TabPane tabId='Images'>
                                <Image translate={translate}/>
                            </TabPane>
                            <TabPane tabId='Containers'>
                                <TabContainers translate={translate}/>
                
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </>
        )
    }
}