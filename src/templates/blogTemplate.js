import React, {PureComponent} from 'react'
import { object } from 'prop-types'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import { compiler } from 'markdown-to-jsx'
import MetaTags from 'react-meta-tags'
import {MathpixMarkdown, MathpixLoader} from 'mathpix-markdown-it'

import './md.scss'

export default class BlogTemplate extends PureComponent{
  static propTypes = {
    mdFile: object

  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {
      toc: this.buildToc(props.mdFile.content),
    }
  }

  buildToc = source => {
    const headings = []
    compiler(source, {
      createElement(type, props, children) {
        if ( type === 'h1' || type === 'h2' || type === 'h3' ) {
          const id = props.id
          console.log(children)
          let title = children[0].toLowerCase().replace(/\s+/g, '-').replace(/[!\.\?,:;\"']/g, '')
          props = {
            ...props,
            id: null,
            className: 'toc-' + type,
            href: `#${title}`,
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

    const {mdFile: {metadata, content}} = this.props
    const { toc } = this.state

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
              <MathpixLoader>
                <MathpixMarkdown text={content} />
              </MathpixLoader>
            </Col>
            <Col md='3' className='content-sidebar'>
              <ul>
                {toc.map((entry, index) => ( <li key={index}>{entry}</li> ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
} 