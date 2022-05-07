import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'
import { isMobile } from '../../utils'
import Select from '../Select'
import AnimatedArrow from '../AnimatedArrow'
import Shield from '../../images/getStarted/get-started-shield.png'
import Link from '../../images/getStarted/get-started-link.svg'
import { DownloadLinks } from '../../mockData'

import './GetStarted.scss'

class CoreClient extends PureComponent {

  render() {
    const { t } = this.props


    return (
      <>
        <div className='downloadBlock'>
          <img src={Link} alt="shield" className="icon-card"/>
          <h3>{t('Download the Core Client')}</h3>
          <p>{t('Go-core is the command-line interface for running a full Core node //Boid// implemented in Go.')}</p>
          <Select
            id='daemonSoftware'
            labelText={t('Choose your operating system') + ':'}
            items={DownloadLinks}
            greenBtnText={t('Download')}
            ghostBtnText={t('Source Code')}
            sourceCodeLink={'https://github.com/core-coin/go-core'}
            placeholder={isMobile() ? t('Choose your operating system').slice(0, 16)+'...' : t('Choose your operating system')}
          />
          <div className='downloadBlock_card'>
            <div>
              <img src={Shield} alt="shield"/>
            </div>
            <div className="downloadBlock_card_card-content">
              <h4>{t('Get Verified Core Blockchain Data')}</h4>
              <p>{t('This download consists of all blocks that have been verified.')}</p>
              <div className='version-links'>
                <AnimatedArrow
                  url='https://drive.google.com/drive/folders/1VzaVD2rqnzyv3ypbQQXCeRjevUgXfcl8?usp=sharing'
                  text={t('Google Drive')}
                  targetBlack
                />
                <AnimatedArrow
                  url='https://disk.yandex.com/d/tKo7gyXuB3asHA'
                  text={t('Yandex')}
                  targetBlack
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withNamespaces()(CoreClient)

