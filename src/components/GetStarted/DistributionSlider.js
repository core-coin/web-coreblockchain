import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'

import Apt from '../SvgIcon/icons/Apt'
import Rpm from '../SvgIcon/icons/Rpm'
import Docker from '../SvgIcon/icons/Docker'
import AptIpfs from '../SvgIcon/icons/AptIpfs'
import Kubernetes from '../SvgIcon/icons/Kubernetes'
import Google from '../SvgIcon/icons/Google'
import Aws from '../SvgIcon/icons/Aws'
import Azure from '../SvgIcon/icons/Azure'
import Ovh from '../SvgIcon/icons/Ovh'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './GetStarted.scss'

class DistributionSlider extends PureComponent{

    getIcon = (title) => {
      const iconMap = {
        'Apt-Get': <Apt/>,
        'RPM': <Rpm/>,
        'Docker Repo': <Docker/>,
        'APT-IPFS': <AptIpfs/>,
        'Kubernetes': <Kubernetes/>,
        'GSP': <Google/>,
        'AWS': <Aws/>,
        'Azure': <Azure/>,
        'OVH': <Ovh/>,
      }
      return iconMap[title]
    }

    renderTabName = ( tab) => {

        return(
            <div key={tab.title}>
                <div className='downloadBlock downloadBlock_slider'>
                    {this.getIcon(tab.title)}
                    {tab.title}
                </div>
            </div>
        )
    }

    render(){
        const { t } = this.props

        const settings = {
          dots: true,
          infinite: false,
          className: 'center',
          centerMode: true,
          centerPadding: '20px',
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
      }

      const list = Array.from(t('repos', { returnObjects: true }))

        return(
            <div className='isoImage'>
                <div className='tabs_header'>
                <Slider {...settings}>
                        {list.map(this.renderTabName)}
                   </Slider>
                </div>
              
            </div>
        )
    }
}

export default withNamespaces()(DistributionSlider)