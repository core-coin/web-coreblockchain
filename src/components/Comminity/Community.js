import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { Container, Row, Col } from 'reactstrap'

import SidebarTemplate from '../../templates/withSidbarTemplate'

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
      <div>
        <Container>
          <Row>
            <SidebarTemplate/>
          </Row>
        </Container>
      </div>
    )
  }
}
