import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { withNamespaces } from 'react-i18next'

import Button from '../Button'
import CopyInput from '../CopyInput/CopyInput'
import Chain from '../SvgIcon/icons/Chain'
import Apt from '../SvgIcon/icons/Apt'
import Rpm from '../SvgIcon/icons/Rpm'
import Docker from '../SvgIcon/icons/Docker'
import AptIpfs from '../SvgIcon/icons/AptIpfs'
import Kubernetes from '../SvgIcon/icons/Kubernetes'
import Google from '../SvgIcon/icons/Google'
import Aws from '../SvgIcon/icons/Aws'
import Azure from '../SvgIcon/icons/Azure'
import Ovh from '../SvgIcon/icons/Ovh'

import './GetStarted.scss'

const ChainIcon = <Chain />

class Repos extends PureComponent {
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

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  onToggleBtn = () => {
    this.setState({
      isActiveBtn: true,
    })
  }

  getIcon = (title) => {
    const iconMap = {
      'Apt-Get': <Apt />,
      'RPM': <Rpm />,
      'Docker Repo': <Docker />,
      'APT-IPFS': <AptIpfs />,
      'Kubernetes': <Kubernetes />,
      'GSP': <Google />,
      'AWS': <Aws />,
      'Azure': <Azure />,
      'OVH': <Ovh />,
    }
    return iconMap[title]
  }

  renderTabName = (tab) => {
    const { activeTab } = this.state

    return (
      <NavItem key={tab.title}>
        <NavLink
          className={activeTab === tab.title ? 'active' : ''}
          onClick={() => {
            this.toggle(tab.title)
          }}
        >
          {this.getIcon(tab.title)}
          {tab.title}
        </NavLink>
      </NavItem>
    )
  }

  render() {
    const { t } = this.props

    const { activeTab } = this.state

    const list = Array.from(t('repos', { returnObjects: true }))

    return (
      <div className='isoImage'>
        <div className='tabs_header'>
          <Nav tabs>{list.map(this.renderTabName)}</Nav>
        </div>
        <div>
          <TabContent activeTab={activeTab}>
            {list.map((tab, index) => {
              return (
                <TabPane key={index} tabId={tab.title} className='node_distributions-btn'>
                  <Button
                    mobileFullWidth
                    theme='green'
                    size='small'
                    href={tab.openLink}
                    text={t('Open link')}
                    icon={ChainIcon}
                  />
                  <CopyInput value={tab.script} />
                </TabPane>
              )
            })}
          </TabContent>
        </div>
      </div>
    )
  }
}

export default withNamespaces()(Repos)
