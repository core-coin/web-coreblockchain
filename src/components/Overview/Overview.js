import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'

import OverviewTemplate from '../../templates/OverviewTemplate'

import './Overview.scss'

export default class Overview extends PureComponent{
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
            <div>
                <Container>
                    <Row>
                      <Col md='9' className='content'>
                          <OverviewTemplate />
                      </Col>
                      <Col md='3' className='content-sidebar'>
                          <ul>
                              <li>
                                  <a href='/overview/#whatisether'>
                                    What is Blockchain?
                                  </a>
                              </li>
                              <li>
                                  <a href='/overview/#whatisether'>
                                    What is Etherium?
                                  </a>
                              </li>
                              <li>
                                  <a href='/overview/#whatisether'>
                                    What are dapps?
                                  </a>
                              </li>
                          </ul>
                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}