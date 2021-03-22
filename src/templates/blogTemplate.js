import React, {PureComponent} from 'react'
import { string } from 'prop-types'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import Markdown, { compiler } from 'markdown-to-jsx'
import metadataParser from 'markdown-yaml-metadata-parser'
import MetaTags from 'react-meta-tags'

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
      metadata: [],
    }
  }

  componentDidMount() {
    fetch(this.props.source)
      .then(res => res.text())
      .then(markdown => {
        let md = metadataParser(markdown)
        this.setState((state) => ({ ...state, markdown: md.content, toc: this.buildToc(md.content), metadata: md.metadata }))})
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

    const { markdown, toc, metadata} = this.state

    return(
      <>
        <MetaTags>
          <title>{metadata.title}</title>
          <meta name='description' content={metadata.description} />
          <meta property='og:title' content={metadata.title} />
          <meta name='keywords' content={metadata.keywords} />
          <meta name='language' content={metadata.lang} />
        </MetaTags>
        <Container>
          <Row>
            <Col md='9' className='content'>
              <Markdown>
                {markdown}
              </Markdown>
            </Col>
            <Col md='3' className='content-sidebar'>
              <ul>
                { toc.map((entry, index) => ( <li key={index}>{entry}</li> ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
} 