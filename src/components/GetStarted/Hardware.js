import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'

import Button from '../Button'
import DesktopIcon from '../../images/getStarted/get-started-desktop.svg'
import { HardwareRequirements } from '../../mockData'

import './GetStarted.scss'
import i18next from 'i18next'

class Hardware extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'ISO Image'
        }
    }

    renderContent = (element) => (
        <li key={element}>
          {i18next.t(element)}
        </li>
    )

    render(){
        const { t } = this.props

        return(
          <div className='downloadBlock'>
            <img src={DesktopIcon} alt='search_icon' className="icon-card" />
              <div id="hardware"/>
            <h3>
                {t('Open Hardware //IoT Devices//')}
            </h3>
            <p>{t('Minimum Requirements')}</p>
            <ul>{HardwareRequirements.map(this.renderContent)}</ul>
            <div className="button-container">
                <Button
                  mobileFullWidth
                  theme='ghost'
                  size='small'
                  type={'href'}
                  href='https://blog.coreblockchain.net/mining'
                  text={t('Start mining')}
                />
                {/*<Button*/}
                {/*  mobileFullWidth*/}
                {/*  download*/}
                {/*  theme='ghost'*/}
                {/*  size='small'*/}
                {/*  href=''*/}
                {/*  text={t('Tested devices list')}*/}
                {/*/>*/}
            </div>
          </div>
        )
    }
}

export default withNamespaces()(Hardware)
