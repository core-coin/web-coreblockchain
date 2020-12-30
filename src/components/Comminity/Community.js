import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import './Community.scss'

export default class Community extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'community',
      headersList: [],
      linksList: [],
      textToCopy: '',
    }
  }

  static propTypes = {
    translate: object,
    language: string,
  }

  toggle = (link) => {
    if (this.state.activeLink !== link) {
      this.setState({ activeLink: link })
    }
  }

  renderLinks = (links, index) => (
    <li
      key={index}
      className={this.state.activeLink === links.link ? 'active' : ''}
      onClick={() => {
        this.toggle(links.link)
      }}
    >
      <a href={'#' + links.link}>{links.label}</a>
    </li>
  )

  collectHeightMap = () => {
    let headers = document.querySelectorAll('.hiddenBlock')
    let headersMap = []
    for (let header of headers) {
      let headerHeight = header.offsetTop + 365
      let headerId = header.id
      headersMap.push([headerHeight, headerId])
    }
    this.setState.headersList = headersMap.reverse()
  }

  updateActiveLink = (offset) => {
    for (let headerInfo of this.state.headersList) {
      if (headerInfo[0] <= offset) {
        let headerId = headerInfo[1]
        this.setState({
          activeLink: headerId,
        })
        return
      }
    }
  }

  componentDidMount() {
    this.collectHeightMap()
    window.addEventListener('scroll', () => {
      this.updateActiveLink(window.scrollY)
    })
    this.updateActiveLink(window.scrollY)
  }

  componentDidUpdate() {
    this.collectHeightMap()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => {})
  }

  render() {
    const {
      translate: { COMMUNITY },
      language,
    } = this.props

    const isMobile = window.innerWidth <= 767

    return (
      <div className='community'>
        <Container>
          <Row>
            <Col
              md={{ size: 9 }}
              xl={{ size: 8 }}
              className='community_content'
            >
              <Row>
                <Col>
                  <div className='getStarted_content__block'>
                    <span id='get_started' className='hiddenBlock'></span>
                    <div>block 1</div>
                  </div>
                  <div className='getStarted_content__block'>
                    <span
                      id='node_distributions'
                      className='hiddenBlock'
                    ></span>
                    <div>block 2</div>
                  </div>
                  <div className='getStarted_content__block'>
                    <span id='devices' className='hiddenBlock'></span>
                    <div>block 3</div>
                  </div>

                  <div className='getStarted_content__block'>
                    <span id='core_mining' className='hiddenBlock'></span>
                    <div>block 4</div>
                  </div>

                  <div className='getStarted_content__block'>
                    <span id='core_network' className='hiddenBlock'></span>
                    <div>block 5</div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={{ size: 3 }} xl={{ size: 4 }} className='community_menu'>
              <div className=''>
                  <h2>On this page</h2>
                <ul>{COMMUNITY.menuLinks.map(this.renderLinks)}</ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
