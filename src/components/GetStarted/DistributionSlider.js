import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

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

export class DistributionSlider extends PureComponent{

    static propTypes = {
        translate: object,
        language: string,
    }

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
        const { translate } = this.props

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

        return(
            <div className='isoImage'>
                <div className='tabs_header'>
                <Slider {...settings}>
                        {translate.repos.map(this.renderTabName)}
                   </Slider>
                </div>
              
            </div>
        )
    }
}