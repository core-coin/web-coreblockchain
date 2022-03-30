import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import CoreSoftware from './CoreSoftware'
import Hardware from './Hardware'
import CoreBlock from './CoreBlock'
import CoreClient from './CoreClient'
import Distribution from './Distribution'
import Mining from './Mining'
import CorePass from './CorePass'
import DistributionSlider from './DistributionSlider'

import './GetStarted.scss'

class GetStarted extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'coreClient',
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
            <Col
              md={{ size: 8 }}
              xl={{ size: 8}}
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
                    <div className='getStarted_content__block' id="coreClient">
                      <span id='for_developers' className='hiddenBlock'></span>
                      <CoreClient />
                    </div>
                  )}
                  {!isMobile && (
                    <div className='getStarted_content__block' id="distributionClients">
                      <span
                        id='node_distributions'
                        className='hiddenBlock'
                      ></span>
                      <Distribution />
                    </div>
                  )}
                  <div className='getStarted_content__block' id="coreMining">
                    <span id='devices' className='hiddenBlock'></span>
                    <Mining />
                  </div>
                  <div className='getStarted_content__block' id="blockIndex">
                    <span id='core_mining' className='hiddenBlock'></span>
                    <CoreBlock />
                  </div>
                  <div className='getStarted_content__block' id="openHardware">
                    <span id='core_network' className='hiddenBlock'></span>
                    <Hardware />
                  </div>
                  <div className='getStarted_content__block' id="corePass">
                    <span id='core_network' className='hiddenBlock'></span>
                    <CorePass />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md='3' className='hidden-xs getStarted_menu'>
              <div>
                <ul>{list.map(this.renderLinks)}</ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(GetStarted)
