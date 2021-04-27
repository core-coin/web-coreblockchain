import React, { PureComponent } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import { withNamespaces } from 'react-i18next'

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

class Image extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: '',
    }
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

  render() {
    const { t } = this.props

    const { activeTab } = this.state

    const list = Array.from(t('images', { returnObjects: true }))

    return (
      <div className='isoImage'>
        <div className='tabs_header'>
          <Nav tabs>{list.map(this.renderTabName)}</Nav>
        </div>
        <div>
          <TabContent activeTab={activeTab}>
            {list.map((tab, index) => {
              return (
                <TabPane key={index} tabId={tab.title}>
                  <Button
                    mobileFullWidth
                    download
                    theme='green'
                    size='small'
                    href={tab.downloadLink}
                    text={t('Download')}
                    icon={DownloadIcon}
                  />
                  <Button
                    mobileFullWidth
                    theme='ghost'
                    size='small'
                    href={tab.downloadLink}
                    text={t('Magnet Link')}
                    icon={TorrentIcon}
                  />
                  <hr></hr>
                  <p>{t('Verify your download by running this script')}:</p>
                  <CopyInput value='openssl dgst -sha256 -verify core.pem -signature core.sig core' />

                  <Button
                    theme='ghost'
                    mobileFullWidth
                    size='small'
                    href={'#'}
                    text={t('Public key')}
                    icon={KeyIcon}
                  />
                </TabPane>
              )
            })}
          </TabContent>
        </div>
      </div>
    )
  }
}

export default withNamespaces()(Image)
