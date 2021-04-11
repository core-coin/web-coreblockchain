import React, {PureComponent} from 'react'
import {object} from 'prop-types'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import BlogTemplate from './blogTemplate'

import './md.scss'

export default class Template extends PureComponent{
  static propTypes = {
    mdFiles: object,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      activeTab: Object.values(props.mdFiles)[0].metadata.title
    }
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) {
      this.setState({activeTab: tab})
    }
  }


  renderTabName = ( file ) => {
    const { activeTab } = this.state

    return(
      <NavItem key={file.metadata.title}>
        <NavLink
          className={activeTab === file.metadata.title ? 'active' : ''}
          onClick={() => { this.toggle(file.metadata.title); }}
        >
          {file.metadata.title}
        </NavLink>
      </NavItem>
    )
  }

  renderTabContent = (file, index) => (
    <TabPane tabId={file.metadata.title} key={index}>
      <Row>
        <Col sm="12">
         <BlogTemplate mdFile={file}/>
        </Col>
      </Row>
    </TabPane>
  )

  render(){
    const { activeTab } = this.state
    let filesList = Object.values(this.props.mdFiles)

    return(
      <Row>
        <Col sm='4' md='4' lg='3' className='tabs_docs'>
          <Nav tabs>
            {filesList.map(this.renderTabName)}
          </Nav>
        </Col>
        <Col
          sm='12'
          md={{ size: 8, offset: 4 }}
          lg={{ size: 9, offset: 3 }}
          className='tabs_docs-body'>
          <TabContent activeTab={activeTab}>
            {filesList.map(this.renderTabContent)}
          </TabContent>
        </Col>
      </Row>
    )
  }
} 