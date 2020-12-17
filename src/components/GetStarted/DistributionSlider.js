import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

import Button from '../Button'
import CopyInput from '../CopyInput/CopyInput'
import Chain from '../SvgIcon/icons/Chain'
import Apt from '../SvgIcon/icons/Apt'
import Rpm from '../SvgIcon/icons/Rpm'
import Docker from '../SvgIcon/icons/Docker'
import AptIpfs from '../SvgIcon/icons/AptIpfs'
import Kubernetes from '../SvgIcon/icons/Kubernetes'
import Google from '../SvgIcon/icons/Google'
import Copy from '../SvgIcon/icons/Copy'
import Aws from '../SvgIcon/icons/Aws'
import Azure from '../SvgIcon/icons/Azure'
import Ovh from '../SvgIcon/icons/Ovh'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './GetStarted.scss'

const CopyIcon = <Copy/>
const ChainIcon = <Chain/>

export class DistributionSlider extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '',
            isActiveBtn: false,
        }
    }

    static propTypes = {
        translate: object,
        language: string,
    }

    toggle = tab => {
        if(this.state.activeTab !== tab) {
            this.setState({activeTab: tab})
        }
    }

    onToggleBtn = () => {
        this.setState({
            isActiveBtn: true,
        })
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
        const { activeTab } = this.state

        return(
            <NavItem key={tab.title}>
                <NavLink
                    className={activeTab === tab.title ? 'active' : ''}
                    onClick={() => { this.toggle(tab.title); }}
                >
                    {this.getIcon(tab.title)}
                    {tab.title}
                </NavLink>
            </NavItem>
        )
    }

    renderTabContent = ( tab, index ) => {
        return(
            <TabPane key={index} tabId={tab.title}>
                <Button
                    mobileFullWidth
                    theme='green'
                    size='small'
                    href={tab.openLink}
                    text={this.props.translate.openLinkBtn}
                    icon={ChainIcon}
                />
                  <Button
                    mobileFullWidth
                    theme='ghost'
                    size='small'
                    href={tab.downloadLink}
                    text={this.props.translate.copyBtn}
                    icon={CopyIcon}
                    value={tab.script}
                    onClick={this.onToggleBtn}
                />
                <div className={this.state.isActiveBtn ? 'd-block' : 'd-none'}>  <CopyInput  
                value={tab.script}/></div>
              
            </TabPane>
        )
    }

    render(){
        const { translate } = this.props

        const { activeTab } = this.state

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