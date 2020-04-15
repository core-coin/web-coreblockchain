import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import {
    Label,
    Input
} from 'reactstrap'

import Button from '../Button'
import Download from '../Icon/icons/Download'
import Torrent from '../Icon/icons/Torrent'
import Copy from '../Icon/icons/Copy'

import './GetStarted.scss'

const DownloadIcon = <Download/>
const TorrentIcon = <Torrent/>

export class CoreSoftware extends PureComponent{
static propTypes = {
        translate: object,
        language: string,
    }

    renderOption = (option, index) => (
        <option key={index}>{option}</option>
    )

    render(){
        const { translate } = this.props

        return(
            <>
                <h1 className='title'>{translate.coreSoftware} <span>{translate.coreSoftwareHighlight}</span></h1>
                <p className='description'>{translate.coreSoftwareDescription}</p>
                <div className='downloadBlock coreWallet'>
                    <h3>{translate.CoreWalletBlock.title}</h3>
                    <p>{translate.CoreWalletBlock.description}</p>
                    <Label for='coreWallet'>{translate.CoreWalletBlock.dropdownLabel}</Label>
                    <Input type='select' name='select' id='coreWallet'>
                        {translate.CoreWalletBlock.dropdownList.map(this.renderOption)}
                    </Input>
                    <Button
                        mobileFullWidth
                        theme='green'
                        size='small'
                        href=''
                        text={translate.CoreWalletBlock.downloadBtn}
                        icon={DownloadIcon}
                    />
                    <Button
                        mobileFullWidth
                        theme='ghost'
                        size='small'
                        href=''
                        text={translate.CoreWalletBlock.torrentButton}
                        icon={TorrentIcon}
                    />
                </div>

                <div className='downloadBlock'>
                    <h3>{translate.CoreDaemonSoftware.title}</h3>
                    <p>{translate.CoreDaemonSoftware.description}</p>
                    <Label for='coreWallet'>{translate.CoreDaemonSoftware.dropdownLabel}</Label>
                    <Input type='select' name='select' id='coreWallet'>
                        {translate.CoreDaemonSoftware.dropdownList.map(this.renderOption)}
                    </Input>
                    <Button
                        mobileFullWidth
                        theme='green'
                        size='small'
                        href=''
                        text={translate.CoreDaemonSoftware.downloadBtn}
                        icon={DownloadIcon}
                    />
                    <Button
                        mobileFullWidth
                        theme='ghost'
                        size='small'
                        href=''
                        text={translate.CoreDaemonSoftware.torrentButton}
                        icon={TorrentIcon}
                    />
                    <hr/>
                    <h4>{translate.CoreDaemonSoftware.publicKey}</h4>
                    <p>{translate.CoreDaemonSoftware.publicKeyDescription}</p>
                    <div className='input-group'>
                        <input type='text' value={translate.CoreDaemonSoftware.key} readOnly />
                        <hr className='vertical'/>
                        <button type='button'><Copy/></button>
                    </div>
                    <p>{translate.CoreDaemonSoftware.linkToDownLoad} <a href=''>{translate.CoreDaemonSoftware.here}</a></p>
                </div>
            </>
        )
    }
}
