import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import {
    Container,
    Row,
    Col,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import Button from '../Button'

import './Developers.scss'

export default class Developers extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'Core Standards'
        }
    }
    static propTypes = {
        language: string,
        translate: object,
    }


    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    }

    renderTabName = ( tab ) => {
        const { activeTab } = this.state

        return(
            <NavItem key={tab.tabName}>
                <NavLink
                    className={activeTab === tab.tabName ? 'active' : ''}
                    onClick={() => { this.toggle(tab.tabName); }}
                >
                    {tab.tabName}
                </NavLink>
            </NavItem>
        )
    }

    renderTabContent = (tab, index) => (
        <TabPane tabId={tab.tabName} key={index}>
            <Row>
                <Col sm="12">
                    <p>{tab.tabText}</p>
                    <div>
                        <Button
                            theme='green'
                            size='normal'
                            text={tab.tabGreenBtn}
                            margin='35'
                            href=''
                        />
                        <Button
                            theme='ghost'
                            size='normal'
                            text={tab.tabGhostBtn}
                            href=''
                        />
                    </div>
                </Col>
            </Row>
        </TabPane>
    )


    render(){
        const { translate: { DEVELOPERS } } = this.props

        const { activeTab } = this.state

        return(
            <div className='developers'>
                <Container>
                    <Row>
                        <Col sm='12'>
                            <h3 className='preTitle'>{DEVELOPERS.preTitle}</h3>
                            <h1 className='title'>{DEVELOPERS.title} <span>{DEVELOPERS.highlightTitle}</span></h1>
                        </Col>
                        <Col sm='12' lg='9' xl='8' className='tabs_header'>
                            <Nav tabs>
                                {DEVELOPERS.tabs.map(this.renderTabName)}
                            </Nav>
                        </Col>
                        <Col sm='12' lg='9' xl='8'>
                            <TabContent activeTab={activeTab}>
                                {DEVELOPERS.tabs.map(this.renderTabContent)}
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}