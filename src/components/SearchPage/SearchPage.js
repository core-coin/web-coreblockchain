import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import blogTemplate from '../../templates/blogTemplate.js'

import './SearchPage.scss'

export default class SearchPage extends PureComponent{
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


    render(){

        return(
            <div className='developers'>
                <Container>
                    <Row>
                      <Col>
                      <h3>
                          Search Results
                          <blogTemplate />
                      </h3>
                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}