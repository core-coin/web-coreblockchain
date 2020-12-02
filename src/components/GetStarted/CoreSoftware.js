import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import Select from '../Select'

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

               
            </>
        )
    }
}
