import React, { PureComponent } from 'react'
import { withNamespaces, Trans } from 'react-i18next'
import CoreLogo from '../../images/getStarted/get-started-lcore.svg'
import Download from '../SvgIcon/icons/Download'

import './GetStarted.scss'
import Button from '../Button'

const DownloadIcon = <Download/>

class CoreBlock extends PureComponent{

    render(){
        const { t } = this.props

        return(
            <>
                <h1 className='title'>
                    <Trans i18nKey='Unlock the Core Ecosystem®'>
                        Unlock the <em>Core Ecosystem®</em>
                    </Trans>
                </h1>
                <div className='downloadBlock'>
                  <img src={CoreLogo} alt='search_icon' className="icon-card" />
                  <h3>{t('CorePass digital identity')}</h3>
                  <p>{t('First blockchain based decentralized digital identity. CorePass represents the foundation of the Core ecosystem, allowing users to access all the Core platforms and aplications quickly and easily with a push of a button.')}</p>
                  <div className="button-container">
                    <Button
                      mobileFullWidth
                      download
                      theme='green'
                      size='small'
                      href={''}
                      text={t('Download')}
                      icon={DownloadIcon}
                    />
                    <Button
                      mobileFullWidth
                      theme='ghost'
                      size='small'
                      hover={false}
                      href={'/'}
                      type='router'
                      text={t('browse transactions')}
                    />
                  </div>
                </div>
            </>
        )
    }
}

export default withNamespaces()(CoreBlock)
