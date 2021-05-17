import React, {PureComponent} from 'react'
import {object} from 'prop-types'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Container } from 'reactstrap'
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
    if (file.metadata.sidebar) {
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

	    <div className='community'>
		    <Container>
			    <Row className='community_row'>
				    <Col md='3' xl='4' className='hidden-xs community_menu'>
					    <Nav tabs>
						    {filesList.map(this.renderTabName)}
					    </Nav>
				    </Col>
				    <Col
					    md={{ size: 9 }}
					    xl={{ size: 8 }}
					    className='community_content'
				    >
					    <TabContent activeTab={activeTab}>
						    {filesList.map(this.renderTabContent)}
					    </TabContent>
				    </Col>
			    </Row>
		    </Container>
	    </div>
    )
  }
} 