import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
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
import Pdf from '../SvgIcon/icons/Pdf'

import './Tabs.scss'

const PdfIcon = <Pdf/>

export default class Tabs extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.translate.TABS.tabs[0].tabsName
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
        const { activeTab } = this.state

        return(
            <NavItem key={tab.tabsName}>
                <NavLink
                    className={activeTab === tab.tabsName ? 'active' : ''}
                    onClick={() => { this.toggle(tab.tabsName); }}
                >
                    {tab.tabsName}
                </NavLink>
            </NavItem>
        )
    }

    renderTabContent = (tab, index) => (
        <TabPane tabId={tab.tabsName} key={index}>
            <Row>
                <Col sm="12">
                    <img src={tab.tabsImage} alt={tab.tabsName} className='img-responsive'/>
                    <h2>{tab.tabsName}</h2>
                    <p>{tab.tabsContent}</p>
                    <Button
                        theme='green'
                        size='normal'
                        text={tab.tabsLink}
                        href=''
                        icon={PdfIcon}
                    />
                </Col>
            </Row>
        </TabPane>
    )


    render(){
        const { translate: { TABS } } = this.props

        const { activeTab } = this.state

        return(
            <div className='tabs'>
                <Container>
                    <Row>
                        <Col sm='12'>
                            <Row>
                                <Col sm='4' md='5' lg='4' className='tabs_header'>
                                <h3>{TABS.targetedIndustries}</h3>
                                    <Nav tabs>
                                        {TABS.tabs.map(this.renderTabName)}
                                    </Nav>
                                </Col>
                                <Col sm='12' md='7' lg='8'>
                                    <TabContent activeTab={activeTab}>
                                        {TABS.tabs.map(this.renderTabContent)}
                                    </TabContent>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}