import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import Select from '../Select'
import CopyInput from '../CopyInput'

import './GetStarted.scss'

export class CoreClient extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }


    render(){
        const { translate } = this.props

        return(
            <>
            

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
                    <CopyInput value={translate.CoreDaemonSoftware.OpenSSlKey}/>
                    <p>{translate.CoreDaemonSoftware.linkToDownLoad} <a href='/'>{translate.CoreDaemonSoftware.here}</a></p>
                </div>
            </>
        )
    }
}
