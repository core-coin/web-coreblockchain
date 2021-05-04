import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import './SearchPage.scss'
import SearchBar from '../SearchBar/SearchBar'

class SearchPage extends PureComponent {
  static propTypes = {
    language: string,
    translate: object,
    searchIndex: object,
    searchDocs: object,
  }

  render() {
    return (
      <div className='search-page'>
        <Container>
          <Row>
            <Col className='content'>
              <h3>Search Results</h3>
              <SearchBar searchIndex={this.props.searchIndex} searchDocs={this.props.searchDocs}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(SearchPage)