import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import CoreSoftware from './CoreSoftware'
import CoreNetwork from './CoreNetwork'
import CoreMiners from './CoreMiners'
import CoreClient from './CoreClient'
import Distribution from './Distribution'
import Devices from './Devices'
import DistributionSlider from './DistributionSlider'

import './GetStarted.scss'

class GetStarted extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'get_started',
      headersList: [],
      linksList: [],
      textToCopy: '',
    }
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
    const { t } = this.props

    const list = Array.from(t('Get started menuLinks', { returnObjects: true }))

    const isMobile = window.innerWidth <= 767

    return (
      <div className='getStarted'>
        <Container>
          <Row className='getStarted_row'>
            <Col md='3' className='hidden-xs getStarted_menu'>
              <div>
                <ul>{list.map(this.renderLinks)}</ul>
              </div>
            </Col>
            <Col
              md={{ size: 9 }}
              xl={{ size: 9}}
              className='getStarted_content'
            >
              <Row>
                <Col>
                  <div className='getStarted_content__block'>
                    <span id='get_started' className='hiddenBlock'></span>
                    <CoreSoftware />
                    {isMobile && <DistributionSlider />}
                  </div>
                  {!isMobile && (
                    <div className='getStarted_content__block'>
                      <span id='for_developers' className='hiddenBlock'></span>
                      <CoreClient />
                    </div>
                  )}
                  {!isMobile && (
                    <div className='getStarted_content__block'>
                      <span
                        id='node_distributions'
                        className='hiddenBlock'
                      ></span>
                      <Distribution />
                    </div>
                  )}
                  <div className='getStarted_content__block'>
                    <span id='devices' className='hiddenBlock'></span>
                    <Devices />
                  </div>
                  <div className='getStarted_content__block'>
                    <span id='core_mining' className='hiddenBlock'></span>
                    <CoreMiners />
                  </div>
                  <div className='getStarted_content__block'>
                    <span id='core_network' className='hiddenBlock'></span>
                    <CoreNetwork />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(GetStarted)
