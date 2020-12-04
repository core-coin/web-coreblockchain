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

import { IsoImage } from './IsoImage'


import './GetStarted.scss'

export class Distribution extends PureComponent{
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
                <div className='downloadBlock'>
                    <h3>{translate.nodeDistributionTitle}</h3>
                    <div className='tabs_header'>
                        <Nav tabs>
                            {translate.nodeDistributionTabName.map(this.renderTabName)}
                        </Nav>
                    </div>
                    <div>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId='ISO Image'>
                                <IsoImage translate={translate}/>
                            </TabPane>
                            <TabPane tabId='Distributor'>
                                <Select
                                    type='button'
                                    id='NodeDistributor'
                                    items={translate.nodeDistr}
                                    greenBtnText={translate.goToMarketplace}
                                />
                            </TabPane>
                            <TabPane tabId='Packages tool'>
                                <Select
                                    type='select'
                                    id='packageTool'
                                    items={translate.packageTool}
                                />
                                <CopyInput value={translate.packageToolScript}/>
                            </TabPane>
                            <TabPane tabId='Containers'>
                                <Select
                                    type='select'
                                    id='packageTool'
                                    items={translate.packageTool}
                                />
                                <CopyInput value={translate.packageToolScript}/>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </>
        )
    }
}