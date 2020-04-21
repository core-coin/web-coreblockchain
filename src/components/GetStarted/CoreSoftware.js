import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import Select from '../Select'
import CopyInput from '../CopyInput'

import './GetStarted.scss'

export class CoreSoftware extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }


    render(){
        const { translate } = this.props

        return(
            <>
                <h1 className='title'>{translate.coreSoftware} <span>{translate.coreSoftwareHighlight}</span></h1>
                <p className='description'>{translate.coreSoftwareDescription}</p>
                <div className='downloadBlock coreWallet'>
                    <h3>{translate.CoreWalletBlock.title}</h3>
                    <p>{translate.CoreWalletBlock.description}</p>
                    <Select
                        type='buttons'
                        id='coreWallet'
                        labelText={translate.CoreWalletBlock.dropdownLabel}
                        items={translate.CoreWalletBlock.osList}
                        greenBtnText={translate.CoreWalletBlock.downloadBtn}
                        ghostBtnText={translate.CoreWalletBlock.torrentButton}

                    />
                </div>

                <div className='downloadBlock'>
                    <h3>{translate.CoreDaemonSoftware.title}</h3>
                    <p>{translate.CoreDaemonSoftware.description}</p>
                    <Select
                        type='buttons'
                        id='daemonSoftware'
                        labelText={translate.CoreDaemonSoftware.dropdownLabel}
                        items={translate.CoreDaemonSoftware.osList}
                        greenBtnText={translate.CoreDaemonSoftware.downloadBtn}
                        ghostBtnText={translate.CoreDaemonSoftware.torrentButton}

                    />
                    <hr/>
                    <h4>{translate.CoreDaemonSoftware.publicKey}</h4>
                    <p>{translate.CoreDaemonSoftware.publicKeyDescription}</p>
                    <CopyInput value={translate.CoreDaemonSoftware.key}/>
                    <p>{translate.CoreDaemonSoftware.linkToDownLoad} <a href=''>{translate.CoreDaemonSoftware.here}</a></p>
                </div>
            </>
        )
    }
}
