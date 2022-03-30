import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'

import Select from '../Select'
import AnimatedArrow from '../AnimatedArrow'
import Shield from '../../images/getStarted/get-started-shield.png'
import Link from '../../images/getStarted/get-started-link.svg'

import './GetStarted.scss'

class CoreClient extends PureComponent {

  render() {
    const { t } = this.props
    const list = Array.from(t('operating systems list', { returnObjects: true }))


    return (
      <>
        <div className='downloadBlock'>
          <img src={Link} alt="shield" className="icon-card"/>
          <h3>{t('Download the Core clientt')}</h3>
          <p>{t('Go-core is the the command line interface for running a full Core node implemented in Go.')}</p>
          <Select
            id='daemonSoftware'
            labelText={t('Choose your operating system') + ':'}
            items={list}
            greenBtnText={t('Download')}
            ghostBtnText={t('Source code')}
            sourceCodeLink={'/'}
            placeholder={t('Choose your operating system')}
          />
          <div className='downloadBlock_card'>
            <div>
              <img src={Shield} alt="shield"/>
            </div>
            <div className="downloadBlock_card_card-content">
              <h4>{t('Get verified Core Blockchain data')}</h4>
              <p>{t('This download consist of all blocks that have been verified')}:</p>
              <div className='version-links'>
                <AnimatedArrow
                  url=''
                  text={t('Google Drive')}
                />
                <AnimatedArrow
                  url=''
                  text={t('Yandex')}
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

