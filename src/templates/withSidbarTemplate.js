import React, {PureComponent} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import { docs } from '../sidebar'
import BlogTemplate from './blogTemplate'

import './md.scss'

export default class Template extends PureComponent{
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      activeTab: docs[0].label,
      markdown: '',
    }
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) {
      this.setState({activeTab: tab})
    }
  }


  renderTabName = ( docs ) => {
    const { activeTab } = this.state

    return(
      <NavItem key={docs.label}>
        <NavLink
          className={activeTab === docs.label ? 'active' : ''}
          onClick={() => { this.toggle(docs.label); }}
        >
          {docs.label}
        </NavLink>
      </NavItem>
    )
  }

  renderTabContent = (docs, index) => (
    <TabPane tabId={docs.label} key={index}>
      <Row>
        <Col sm="12">
         <BlogTemplate source={docs.link}/>
        </Col>
      </Row>
    </TabPane>
  )

  render(){
    const { activeTab } = this.state

    return(
      <Row>
        <Col sm='4' md='4' lg='3' className='tabs_docs'>
          <Nav tabs>
            {docs.map(this.renderTabName)}
          </Nav>
        </Col>
        <Col
          sm='12'
          md={{ size: 8, offset: 4 }}
          lg={{ size: 9, offset: 3 }}
          className='tabs_docs-body'>
          <TabContent activeTab={activeTab}>
            {docs.map(this.renderTabContent)}
          </TabContent>
        </Col>
      </Row>
    )
  }
} 