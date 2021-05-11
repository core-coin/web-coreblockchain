import React, { PureComponent } from 'react'
import { withNamespaces, Trans } from 'react-i18next'

import Button from '../Button'
import Torrent from '../SvgIcon/icons/Torrent'

import AnimatedArrow from '../AnimatedArrow'

import './GetStarted.scss'

const TorrentIcon = <Torrent/>

class CoreNetwork extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 'ISO Image'
        }
    }

    render(){
        const { t } = this.props

        return(
            <>
                <h1 className='title'>
                    <Trans i18nKey='Core network'>
                       Core <em>network</em>
                    </Trans>
                </h1>
                <p className='description'>{t('We are monitoring network and provide the tools to monitor the health and track your transactions')}</p>
                <div className='downloadBlock nodeStatus'>
                    <h3>{t('Nodes status')}</h3>
                    <p>{t('Charts and metrics for the Core network. Explore our Boid locations Worldwide.')}</p>
                    <AnimatedArrow url='' text={t('Core stats')}/>
                    <Button
                    mobileFullWidth
                    download
                    theme='ghost'
                    size='small'
                    href=''
                    text={t('Download Blockchain from torrent')}
                    icon={TorrentIcon}
                />
                </div>
                <div className='downloadBlock'>
                    <h3>{t('Transaction explorer')}</h3>
                    <p className='transaction-text'>{t('Core Block Explorer is a web tool that provides detailed information about Core blocks, addresses, and transactions.')}</p>
                    <AnimatedArrow url='' text={t('CORE explorer')}/>
                </div>
              
            </>
        )
    }
}

export default withNamespaces()(CoreNetwork)