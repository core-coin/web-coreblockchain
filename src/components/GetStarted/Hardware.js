import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'

import Button from '../Button'
import DesktopIcon from '../../images/getStarted/get-started-desktop.svg'

import './GetStarted.scss'

class Hardware extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'ISO Image'
        }
    }

    renderContent = (element) => (
      <ul>
        <li>
          {element}
        </li>
      </ul>
    )

    render(){
        const { t } = this.props
        const list = Array.from(t('hardware requirements', { returnObjects: true }))

        return(
          <div className='downloadBlock'>
            <img src={DesktopIcon} alt='search_icon' className="icon-card" />
            <h3>{t('Open Hardware (IOT Devices)')}</h3>
            <p>{t('Minimum requirements')}</p>
            <p>
              {list.map(this.renderContent)}
            </p>
            <div className="button-container">
                <Button
                  mobileFullWidth
                  download
                  theme='ghost'
                  size='small'
                  href=''
                  text={t('Build your own')}
                />
                <Button
                  mobileFullWidth
                  download
                  theme='ghost'
                  size='small'
                  href=''
                  text={t('Tested devices list')}
                />
            </div>
          </div>
        )
    }
}

export default withNamespaces()(Hardware)
