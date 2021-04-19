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
  NavLink,
} from 'reactstrap'
import { withNamespaces, Trans } from 'react-i18next'
import i18next from 'i18next'
import Button from '../Button'
import Pdf from '../SvgIcon/icons/Pdf'

import './Tabs.scss'

const PdfIcon = <Pdf />

class Tabs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        activeTab: i18next.t('main tabs', { returnObjects: true })[0].tabsName
    }
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  renderTabName = (tab) => {
    const { activeTab } = this.state
    return (
      <Trans i18nKey={tab.tabName} defaults={tab.tabName}>
        <NavItem key={tab.tabsName}>
          <NavLink
            className={activeTab === tab.tabsName ? 'active' : ''}
            onClick={() => {
              this.toggle(tab.tabsName)
            }}
          >
            {tab.tabsName}
          </NavLink>
        </NavItem>
      </Trans>
    )
  }

  renderTabContent = (tab, index) => (
    <Trans i18nKey={tab.tabName} defaults={tab.tabName}>
      <TabPane tabId={tab.tabsName} key={index}>
        <Row>
          <Col sm='12'>
            <img
              src={tab.tabsImage}
              alt={tab.tabsName}
              className='img-responsive'
            />
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
    </Trans>
  )

  render() {
    const { t } = this.props

    const { activeTab } = this.state

    const list = Array.from(t('main tabs', { returnObjects: true }))

    return (
      <div className='tabs'>
        <Container>
          <Row>
            <Col sm='12'>
              <Row>
                <Col sm='4' md='5' lg='4' className='tabs_header'>
                  <h3>{t('Industries')}</h3>
                  <Nav tabs>{list.map((tab, index) => {
                    const { activeTab } = this.state
                    return (
                      <Trans i18nKey={index} defaults={tab.tabName}>
                        <NavItem key={tab.tabsName}>
                          <NavLink
                            className={activeTab === tab.tabsName ? 'active' : ''}
                            onClick={() => {
                              this.toggle(tab.tabsName)
                            }}
                          >
                            {tab.tabsName}
                          </NavLink>
                        </NavItem>
                      </Trans>
                    )
                  })}</Nav>
                </Col>
                <Col sm='12' md='7' lg='8'>
                  <TabContent activeTab={activeTab}>
                    {list.map((tab, index) => (
                      <Trans i18nKey={tab.tabName} defaults={tab.tabName}>
                        <TabPane tabId={tab.tabsName} key={index}>
                          <Row>
                            <Col sm='12'>
                              <img
                                src={tab.tabsImage}
                                alt={tab.tabsName}
                                className='img-responsive'
                              />
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
                      </Trans>
                    ))}
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
