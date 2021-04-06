import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { withNamespaces } from 'react-i18next'

import Select from '../Select'
import CopyInput from '../CopyInput'
import AnimatedArrow from '../AnimatedArrow'
import Button from '../Button'
import Key from '../SvgIcon/icons/Key'

import './GetStarted.scss'

const KeyIcon = <Key />

class CoreClient extends PureComponent {
  static propTypes = {
    translate: object,
    language: string,
    ghostBtnText: string,
  }

  render() {
    const { translate, t } = this.props

    return (
      <>
        <div className="downloadBlock">
          <h3>{t('Core client boid')}</h3>
          <p>{t('Go-core is the the command line interface for running a full Core node implemented in Go.')}</p>
          <Select
            type="buttons"
            download
            id="daemonSoftware"
            labelText={t('Choose your operating system')+ ':'} 
            items={translate.CoreDaemonSoftware.osList}
            greenBtnText={t('Download')}
            ghostBtnText={t('IPFS')}
            addBtnText={t('Onion')}
          />
          <div className="version-links">
            <AnimatedArrow
              url=""
              text={t('Previous version')}
            />
            <AnimatedArrow
              url=""
              text={t('Source code')}
            />
          </div>
          <hr />
          <h4>{t('Public key')}</h4>
          <p>{t('As a reminder, all release binaries are signed. You can manually verify the signatures with the command')}:</p>
          <CopyInput value='openssl dgst -sha256 -verify core.pem -signature core.sig core' />
          <div className="downloadBlock_key">
            <Button
              theme="ghost"
              mobileFullWidth
              size="small"
              href={'#'}
              text={t('Public Key')}
              icon={KeyIcon}
            />
          </div>
        </div>
      </>
    )
  }
}

export default withNamespaces()(CoreClient)

