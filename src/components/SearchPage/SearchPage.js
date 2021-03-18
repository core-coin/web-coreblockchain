import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import './SearchPage.scss'
import SearchBar from '../SearchBar/SearchBar'

export default class SearchPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: this.props.translate.DEVELOPERS.tabs[0].tabName,
    }
  }
  static propTypes = {
    language: string,
    translate: object,
  }

  render() {
    return (
      <div className="search-page">
        <Container>
          <Row>
            <Col className="content">
              <h3>Search Results</h3>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
