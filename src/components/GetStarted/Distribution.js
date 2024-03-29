import React, { PureComponent } from 'react'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink, Row, Col
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import Arrows from '../../images/getStarted/get-started-arrows.svg'
import { getCloudImage } from '../../utils'
import ArrowUpRight from '../../images/getStarted/ArrowUpRight.svg'
import CopyInput from '../CopyInput'
import { NodeDistributionData } from '../../mockData'

import './GetStarted.scss'
import i18next from 'i18next'

class Distribution extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'Containers'
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
            <NavItem key={tab.tabName}>
                <NavLink
                    className={activeTab === tab.tabName ? 'active' : ''}
                    onClick={() => {
                        this.toggle(tab.tabName);
                    }}
                >
                    {i18next.t(tab.tabName)}
                </NavLink>
            </NavItem>
        )
    }
    renderTabContent = (tab, index) => (
      <TabPane tabId={tab.tabName} key={index}>
          <Row>
              <Col sm='12'>
                  {tab.elements.map(this.renderContent)}
              </Col>
          </Row>
      </TabPane>
    )

    renderContent = (element) => (
      <div className="tab-content-item" key={element.id}>
          <div className="tab-content-item-tag">
              <img src={getCloudImage(element.id)} alt=""/>
              <p className="tab-content-item-title">{element.label}</p>
          </div>
        <div className="tab-content-item-icons">
          <a href={element.link} target="_blank" rel="noreferrer" className="tab-content-item-link">
            <img src={ArrowUpRight} alt="arrow up right" />
          </a>
        {element.command !== "" && (
          <CopyInput value={element.command}/>
        )}
        </div>
      </div>
    )

    render(){
        const { t } = this.props

        const { activeTab } = this.state

        return(
            <>
                <div className='downloadBlock'>
                    <img src={Arrows} alt='arrows' className="icon-card"/>
                    <div id="distribution"/>
                    <h3>{t('Distribution Clients')}</h3>
                    <p>{t('Specific download for distribution deployment.')}</p>
                    <div className='tabs_header'>
                        <Nav tabs>
                            {NodeDistributionData.map(this.renderTabName)}
                        </Nav>
                    </div>
                    <div>
                        <TabContent activeTab={activeTab}>
                            {NodeDistributionData.map(this.renderTabContent)}
                        </TabContent>
                    </div>
                </div>
            </>
        )
    }
}

export default withNamespaces()(Distribution)
