import React, { PureComponent } from 'react'
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import i18next from 'i18next'

import './Tabs.scss'

class Tabs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: i18next.t('main tabs', { returnObjects: true })[0].tabName,
    }
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    const { t } = this.props

    const { activeTab } = this.state

    const list = i18next.t('main tabs', { returnObjects: true })

    console.log(activeTab)

    return (
      <div className='tabs'>
        <Container>
          <Row>
            <Col sm='12'>
              <Row>
                <Col sm='4' md='5' lg='4' className='tabs_header'>
                  <h3>{t('industries')}</h3>
                  <Nav tabs>
                    {list.map((tab) => {
                      const { activeTab } = this.state
                      return (
                        <NavItem key={tab.tabName}>
                          <NavLink
                            className={
                              activeTab === tab.tabName ? 'active' : ''
                            }
                            onClick={() => {
                              this.toggle(tab.tabName)
                            }}
                          >
                            {tab.tabName}
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                </Col>
                <Col sm='12' md='7' lg='8'>
                  <TabContent activeTab={activeTab}>
                    {list.map((tab) => {
                      return (
                        // <Trans i18nKey={tab.tabName} defaults={tab.tabName}>
                        <TabPane tabId={tab.tabName} key={tab.tabName}>
                        <Row>
                          <Col sm='12'>
                            <img
                              src={tab.tabImage}
                              alt={tab.tabName}
                              className='img-responsive'
                            />
                            <h2>{tab.tabName}</h2>
                            <p>{tab.tabContent}</p>
                          </Col>
                        </Row>
                      </TabPane>
                      // </Trans>
                      )
                    })}
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

export default withNamespaces()(Tabs)
