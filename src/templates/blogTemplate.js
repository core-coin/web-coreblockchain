import React, {PureComponent} from 'react'
import { string } from 'prop-types'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import Markdown, { compiler } from 'markdown-to-jsx'

import './md.scss'

export default class BlogTemplate extends PureComponent{
  static propTypes = {
    source: string,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      markdown: '',
      toc: [],
    }
  }

  componentDidMount() {
    fetch(this.props.source)
      .then(res => res.text())
      .then(markdown => this.setState((state) => ({ ...state, markdown, toc: this.buildToc(markdown) })))
      .catch((err) => console.error(err));
  }

  buildToc = source => {
    const headings = []
    compiler(source, {
      createElement(type, props, children) {
        if ( type === 'h1' || type === 'h2' || type === 'h3' ) {
          const id = props.id
          props = {
            ...props,
            id: null,
            className: 'toc-' + type,
            onClick: () => {
              let target = document.getElementById(id)
              target && target.scrollIntoView()
            }
          }
          headings.push(React.createElement('a', props, children))
        }
        return (
          React.createElement(type, props, children)
        )
      },
    })
    return headings
  }

  render(){

    return(
      <Container>
        <Row>
          <Col md='9' className='content'>
            <Markdown>
              {this.state.markdown}
            </Markdown>
          </Col>
          <Col md='3' className='content-sidebar'>
            <ul>
              { this.state.toc.map((entry, index) => ( <li key={index}>{entry}</li> ))}
            </ul>
          </Col>
        </Row>
      </Container>
    )
  }
} 