import React, { PureComponent } from 'react' 
import { object, string } from 'prop-types' 
import { Container, Row, Col } from 'reactstrap' 

import { CoreSoftware } from './CoreSoftware' 
import { CoreNetwork } from './CoreNetwork' 
import { CoreMiners } from './CoreMiners' 
import { CoreClient } from './CoreClient'
import { Distribution } from './Distribution'

import './GetStarted.scss' 
import { Devices } from './Devices'


export default class GetStarted extends PureComponent {
  constructor(props) {
    super(props) 
    this.state = {
      activeLink: 'get_started',
      headersList: [],
      linksList: [],
      textToCopy: '',
    } 
  }

  static propTypes = {
    translate: object,
    language: string,
  } 

  toggle = link => {
    if(this.state.activeLink !== link) {
        this.setState({activeLink: link})
    }
 }

  renderLinks = (links, index) => (
    <li
      key={index}
      className={this.state.activeLink === links.link ? 'active' : ''}
      onClick={() => { this.toggle(links.link); }}
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
      translate: { GETSTARTED },
      language,
    } = this.props 

    return (
      <div className='getStarted'>
        <Container>
          <Row className='getStarted_row'>
            <Col md='3' xl='4' className='hidden-xs getStarted_menu'>
              <div className=''>
                <ul>{GETSTARTED.menuLinks.map(this.renderLinks)}</ul>
              </div>
            </Col>
            <Col
              md={{ size: 9, offset: 3 }}
              xl={{ size: 8, offset: 4 }}
              className='getStarted_content'
            >
              <Row>
                <Col>
                  <div className='getStarted_content__block'>
                    <span id='get_started' className='hiddenBlock'></span>
                    <CoreSoftware language={language} translate={GETSTARTED} />
                  </div>
                  <div
                    className='getStarted_content__block'
                  >
                    <span id='for_developers' className='hiddenBlock'></span>
                    <CoreClient language={language} translate={GETSTARTED} />
                  </div>
                  
                  <div
                    className='getStarted_content__block'
                  >
                    <span
                      id='node_distributions'
                      className='hiddenBlock'
                    ></span>
                  <Distribution language={language} translate={GETSTARTED}/>
                  </div>
                  <div
                    className='getStarted_content__block'>
                    <span id='devices' className='hiddenBlock'></span>
                    <Devices language={language} translate={GETSTARTED}/>
                  </div>

                  <div className='getStarted_content__block'>
                    <span id='core_mining' className='hiddenBlock'></span>
                    <CoreMiners language={language} translate={GETSTARTED} />
                  </div>

                  <div className='getStarted_content__block'>
                    <span id='core_network' className='hiddenBlock'></span>
                    <CoreNetwork language={language} translate={GETSTARTED} />
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
