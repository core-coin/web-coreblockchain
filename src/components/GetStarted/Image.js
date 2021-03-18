import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'

import Button from '../Button'
import CopyInput from '../CopyInput'
import Download from '../SvgIcon/icons/Download'
import Torrent from '../SvgIcon/icons/Torrent'
import Apt from '../SvgIcon/icons/Apt'
import CentOS from '../SvgIcon/icons/CentOS'
import Fedora from '../SvgIcon/icons/Fedora'
import Raspberry from '../SvgIcon/icons/Raspberry'
import Ubuntu from '../SvgIcon/icons/Ubuntu'
import Key from '../SvgIcon/icons/Key'

import './GetStarted.scss'

const DownloadIcon = <Download />
const TorrentIcon = <Torrent />
const KeyIcon = <Key />

export class Image extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: '',
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

  getIcon = (title) => {
    const iconMap = {
      Ubuntu: <Ubuntu />,
      Debian: <Apt />,
      CentOS: <CentOS />,
      Fedora: <Fedora />,
      'Ubuntu IoT': <Ubuntu />,
      'Raspberry OS': <Raspberry />,
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

  renderTabContent = (tab, index) => {
    return (
      <TabPane key={index} tabId={tab.title}>
        <Button
          mobileFullWidth
          download
          theme='green'
          size='small'
          href={tab.downloadLink}
          text={this.props.translate.download}
          icon={DownloadIcon}
        />
        <Button
          mobileFullWidth
          theme='ghost'
          size='small'
          href={tab.downloadLink}
          text={this.props.translate.magnetLink}
          icon={TorrentIcon}
        />
        <hr></hr>
        <p>{this.props.translate.distributionImageText}</p>
        <CopyInput value={this.props.translate.distributionImageScript} />

        <Button
          theme='ghost'
          mobileFullWidth
          size='small'
          href={'#'}
          text={this.props.translate.CoreDaemonSoftware.keyBtn}
          icon={KeyIcon}
        />
      </TabPane>
    )
  }

  render() {
    const { translate } = this.props

    const { activeTab } = this.state

    return (
      <div className='isoImage'>
        <div className='tabs_header'>
          <Nav tabs>{translate.images.map(this.renderTabName)}</Nav>
        </div>
        <div>
          <TabContent activeTab={activeTab}>
            {translate.images.map(this.renderTabContent)}
          </TabContent>
        </div>
      </div>
    )
  }
}
