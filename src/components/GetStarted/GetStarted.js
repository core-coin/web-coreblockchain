import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import Scrollspy from 'react-scrollspy'

import CoreSoftware from './CoreSoftware'
import Hardware from './Hardware'
import CoreBlock from './CoreBlock'
import CoreClient from './CoreClient'
import Distribution from './Distribution'
import Mining from './Mining'
import { SideBarMenu } from '../../mockData'

import './GetStarted.scss'
import { isSmd } from '../../utils'
import i18next from 'i18next'

class GetStarted extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeLink: 'coreClient',
      headersList: [],
      linksList: [],
      textToCopy: '',
      isSmd: isSmd()
    }
  }
  updateIsSmd = () => {
    this.setState({isSmd: isSmd()});
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateIsSmd);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateIsSmd);
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
      <a href={'#' + links.link}>{i18next.t(links.label)}</a>
    </li>
  )


  render() {

    return (
      <div className='getStarted'>
        <Container>
          <Row className='getStarted_row'>
            <Col
              md={{ size: 11 }}
              xl={{ size: 8}}
              className='getStarted_content'
            >
              <Row>
                <Col className='getStarted_col'>
                  <div className='getStarted_content__block'>
                    <span id='get_started' className='hiddenBlock'/>
                    <CoreSoftware />
                  </div>
                  <div className='getStarted_content__block' id="coreClient">
                    <span id='for_developers' className='hiddenBlock'/>
                    <CoreClient />
                  </div>
                  <div className='getStarted_content__block' id="distributionClients">
                    <span
                      id='node_distributions'
                      className='hiddenBlock'
                    />
                    <Distribution />
                  </div>
                  <div className='getStarted_content__block' id="coreMining">
                    <span id='devices' className='hiddenBlock'/>
                    <Mining />
                  </div>
                  <div className='getStarted_content__block' id="blockIndex">
                    <span id='core_mining' className='hiddenBlock'/>
                    <CoreBlock />
                  </div>
                  <div className='getStarted_content__block' id="openHardware">
                    <span id='core_network' className='hiddenBlock'/>
                    <Hardware />
                  </div>
                  {/*<div className='getStarted_content__block' id="corePass">*/}
                  {/*  <span id='core_network' className='hiddenBlock'/>*/}
                  {/*  <CorePass />*/}
                  {/*</div>*/}
                </Col>
              </Row>
            </Col>
            {!this.state.isSmd && (
              <Col md='3' className='hidden-xs getStarted_menu'>
                <div>
                  <Scrollspy
                    items={ ['coreClient', 'distributionClients', 'coreMining', 'blockIndex', 'openHardware', 'corePass'] }
                    currentClassName="active"
                  >{SideBarMenu.map(this.renderLinks)}</Scrollspy>
                </div>
              </Col>
            )
            }
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(GetStarted)
