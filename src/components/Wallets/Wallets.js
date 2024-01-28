import React, { PureComponent } from 'react'
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
import { withNamespaces, Trans } from 'react-i18next'
import i18next from 'i18next'
import { WalletsTabs } from '../../mockData'
import Button from '../Button'
import './Wallets.scss'

class Wallets extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: WalletsTabs[0].tabName
        }
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    }

    renderTabName = (tab) => (
        <NavItem key={tab.tabName} className='nav-item'>
            <NavLink className={this.state.activeTab === tab.tabName ? 'active' : ''}
            onClick={() => { this.toggle(tab.tabName)}}>
            {i18next.t(tab.tabName)}
            </NavLink>
        </NavItem>
    )

    renderTabContent = (tab, index) => (
        <TabPane tabId={tab.tabName} key={index}>
            <Row>
                <Col sm='12'>
                    <p>{i18next.t(tab.tabContent)}</p>
                    <div>
                        <Button
                            theme='green'
                            size='normal'
                            text={i18next.t(tab.tabGreenBtn)}
                            margin='35'
                            href={tab.tabGreenBtnLink}
                            type={'href'}
                        />
                        <Button
                            theme='ghost'
                            size='normal'
                            text={i18next.t(tab.tabGhostBtn)}
                            href={tab.tabGhostBtnLink}
                            type={'href'}
                        />
                    </div>
                </Col>
            </Row>
        </TabPane>
    )

    render(){
        // const { t } = this.props
        const { activeTab } = this.state

        return(
            <div className='wallets'>
                <Container>
                    <Row>
                        <Col sm='12'>
                            <h3 className='preTitle'>{i18next.t('Mobile Wallets')}</h3>
                            <h1 className='title'>
                                <Trans i18nKey='Keep digital assets safe'>
                                Keep digital assets <em>safe</em>
                                </Trans>
                            </h1>
                        </Col>
                        <Col sm='12' lg='12' xl='7' className='tabs_header'>
                            <Nav tabs>
                                {WalletsTabs.map(this.renderTabName)}
                            </Nav>
                        </Col>
                        <Col sm='12' lg='12' xl='7'>
                            <TabContent activeTab={activeTab}>
                                {WalletsTabs.map(this.renderTabContent)}
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withNamespaces()(Wallets)
