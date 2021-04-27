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
import { withNamespaces } from 'react-i18next'
import i18next from 'i18next'
import Button from '../Button'
import Pdf from '../SvgIcon/icons/Pdf'

import './Tabs.scss'

import SpaceAgencies from '../../images/industry-space.jpg'
import Supply from '../../images/industry-supply.jpg'
import Trading from '../../images/industry-trading.jpg'
import Healthcare from '../../images/industry-healthcare.jpg'
import Energy from '../../images/industry-energy.jpg'
import Governmen from '../../images/industry-egov.jpg'
import Massmedia from '../../images/industry-massmedia.jpg'
import Defence from '../../images/industry-defense.jpg'
import Education from '../../images/industry-education.jpg'
import GIS from '../../images/industry-gis.jpg'
import Telecommunications from '../../images/industry-telecomunications.jpg'
import Tokenization from '../../images/industry-tokenization.jpg'

const PdfIcon = <Pdf />

class Tabs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
        activeTab: i18next.t('main tabs', { returnObjects: true })[0].tabsName
    }
  }

  getImage = (title) => {
    let isEn = i18next.language === 'en'
    const trading = isEn ? 'Finance & Payments' : 'Financie a Platby'
    const healthcare = isEn ? 'Healthcare & Wellness' : 'Zdravotníctvo a wellness'
    const energy = isEn ? 'Energy' : 'Energia'
    const supply = isEn ? 'Supply Chain' : 'Zásobovací reťazec'
    const goverment = isEn ? 'eGovernment & DAO’s' : 'eVláda a DAO'
    const massmedia = isEn ? 'Mass Media' : 'Masmédiá'
    const gis = isEn ? 'GIScience' : 'Geografická informatika'
    const defence = isEn ? 'Defence & Security' : 'Obrana a bezpečnosť'
    const token = isEn ? 'Asset Tokenization' : 'Tokenizácia majetku'
    const education = isEn ? 'Education' : 'Vzdelávanie'
    const telecomunications = isEn ? 'Telecommunications' : 'Telekomunikácie'

    const imageMap = {
      [trading]: Trading,
      [healthcare]: Healthcare,
      'Aerospace': SpaceAgencies,
      [energy]: Energy,
      [supply]: Supply,
      [goverment]: Governmen,
      [massmedia]: Massmedia,
      [gis]: GIS,
      [defence]: Defence,
      [token]: Tokenization,
      [education]: Education,
      [telecomunications]: Telecommunications   
    }
    return imageMap[title]
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  renderTabName = (tab) => {
    const { activeTab } = this.state
    return (     
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
    )
  }

  renderTabContent = (tab, index) => (
      <TabPane tabId={tab.tabsName} key={index}>
        <Row>
          <Col sm='12'>
            <img
              src={this.getImage(tab.tabsName)}
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
                  <Nav tabs>{list.map(this.renderTabName)}</Nav>
                </Col>
                <Col sm='12' md='7' lg='8'>
                  <TabContent activeTab={activeTab}>
                    {list.map(this.renderTabContent)}
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
