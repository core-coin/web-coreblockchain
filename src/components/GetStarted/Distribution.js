import React, { PureComponent } from 'react'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import Image from './Image'
import TabContainers from './TabContainers'
import Deployment from './Deployment'
import Repos from './Repos'

import './GetStarted.scss'

class Distribution extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'Repos'
        }
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
        const { t } = this.props

        const { activeTab } = this.state

        const list = Array.from(t('nodeDistributionTabName', { returnObjects: true }))

        return(
            <>
                <div className='downloadBlock'>
                    <h3>{t('Boid distributions')}</h3>
                    <div className='tabs_header'>
                        <Nav tabs>
                            {list.map(this.renderTabName)}
                        </Nav>
                    </div>
                    <div>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='Repos'>
                                <Repos />
                            </TabPane>
                            <TabPane tabId='Deployment'>
                                <Deployment />
                            </TabPane>
                            <TabPane tabId='Images'>
                                <Image />
                            </TabPane>
                            <TabPane tabId='Containers'>
                                <TabContainers />
                
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </>
        )
    }
}

export default withNamespaces()(Distribution)