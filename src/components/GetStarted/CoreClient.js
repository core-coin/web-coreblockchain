import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'

import Select from '../Select'
import CopyInput from '../CopyInput'
import AnimatedArrow from '../AnimatedArrow'
import Button from '../Button'
import Key from '../SvgIcon/icons/Key'

import './GetStarted.scss'

const KeyIcon = <Key />

export class CoreClient extends PureComponent {
  static propTypes = {
    translate: object,
    language: string,
    ghostBtnText: string,
  }

  render() {
    const { translate } = this.props

    return (
      <>
        <div className="downloadBlock">
          <h3>{translate.CoreDaemonSoftware.title}</h3>
          <p>{translate.CoreDaemonSoftware.description}</p>
          <Select
            type="buttons"
            download
            id="daemonSoftware"
            labelText={translate.CoreDaemonSoftware.dropdownLabel}
            items={translate.CoreDaemonSoftware.osList}
            greenBtnText={translate.CoreDaemonSoftware.downloadBtn}
            ghostBtnText={translate.CoreDaemonSoftware.ipfsButton}
            addBtnText={translate.CoreDaemonSoftware.onionButton}
          />
          <div className="version-links">
            <AnimatedArrow
              url=""
              text={translate.CoreDaemonSoftware.previousLink}
            />
            <AnimatedArrow
              url=""
              text={translate.CoreDaemonSoftware.sourceLink}
            />
          </div>
          <hr />
          <h4>{translate.CoreDaemonSoftware.publicKey}</h4>
          <p>{translate.CoreDaemonSoftware.publicKeyDescription}</p>
          <CopyInput value={translate.CoreDaemonSoftware.OpenSSlKey} />
          <div className="downloadBlock_key">
            <Button
              theme="ghost"
              mobileFullWidth
              size="small"
              href={'#'}
              text={translate.CoreDaemonSoftware.keyBtn}
              icon={KeyIcon}
            />
          </div>
        </div>
      </>
    )
  }
}
