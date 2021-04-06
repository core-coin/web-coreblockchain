import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { withNamespaces, Trans } from 'react-i18next'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

class Devices extends PureComponent {
  static propTypes = {
    translate: object,
    language: string,
  }

  renderList = (item, idx) => {
    return (
      <li key={idx}>
        <p>{item}</p>
      </li>
    )
  }

  render() {
    const { translate, t } = this.props

    const isMobile = window.innerWidth <= 767

    return (
      <>
        <h1 className='title'>
          <Trans i18nKey='Core Ecosystem'>
           Core <em>ecosystem</em>
          </Trans>
        </h1>
        <p className='description'>{t('Join Core Blockchain ecosystem and enjoy all its ts')}</p>
        <div className='downloadBlock cpuMiners'>
          <h3>{t('IoT Devices')}</h3>
          <p>{t('Minimum requirements')}:</p>
          <ul>{translate.devicesList.map(this.renderList)}</ul>
          <AnimatedArrow url='' text={t('Build Your Own')} />
          {(!isMobile && <AnimatedArrow url='' text={t('Tested Devices List')} /> )}
        </div>
      </>
    )
  }
}

export default withNamespaces()(Devices)
