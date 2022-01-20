import React, { PureComponent } from 'react'
import {
  Container,
  Row,
  Col,
} from 'reactstrap'
import { withNamespaces } from 'react-i18next'
import i18next from 'i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './Tabs.scss'

class TabsSlider extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: i18next.t('main tabs', { returnObjects: true })[0].tabName,
    }
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    const { t } = this.props

    const settings = {
      dots: true,
      infinite: false,
      centerPadding: '20px',
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    const list = i18next.t('main tabs', { returnObjects: true })

    return (
      <div className='tabs'>
        <Container>
          <Row>
            <Col sm='12'>
              <Row>
                <Col sm='12' md='12' lg='12' className='tabs_header'>
                  <h3>{t('industries')}</h3>
                </Col>
                <Col sm='12' md='12' lg='12' className='tab-content'>
                  <Slider {...settings}>
                    {list.map((tab) => {
                      return (
                        // <Trans i18nKey={tab.tabName} defaults={tab.tabName}>
                        <div key={tab.tabName} className="tab-pane">
                            <div className='info_container'>
                              <img
                                src={tab.tabImage}
                                alt={tab.tabName}
                                className='img-responsive'
                              />
                              <h2>{tab.tabName}</h2>
                              <p>{tab.tabContent}</p>
                            </div>
                        </div>
                      // </Trans>
                      )
                    })}
                  </Slider>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default withNamespaces()(TabsSlider)
