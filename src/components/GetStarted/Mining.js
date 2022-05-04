import React, { PureComponent } from 'react'
import { withNamespaces } from 'react-i18next'
import Rings from '../../images/getStarted/get-started-rings.svg'

import './GetStarted.scss'
import Button from '../Button'
import Lock from '../../images/getStarted/get-started-lock.png'
import Arrow from '../../images/arrow.svg'

class Mining extends PureComponent {


  render() {
    const { t } = this.props
    // const isMobile = window.innerWidth <= 767

    return (
      <>
        <div className='downloadBlock'>
          <img src={Rings} alt='icon' className="icon-card" />
          <h3>{t('How to get started with Core Mining')}</h3>
          <p>{t('Contribute to the Core Network with the computation power of your CPU and receive rewards in Ores.')}</p>
          <div className="button-container">
            <Button
              mobileFullWidth
              theme='ghost'
              size='small'
              hover={false}
              href={'https://catchthatrabbit.com/'}
              type='router'
              text={t('Mining pools')}
            />
          </div>
          <div className='downloadBlock_card'>
            <div>
              <img src={Lock} alt="shield"/>
            </div>
            <div className="downloadBlock_card_card-content">
              <h4>{t('Safe storage for your digital assets')}</h4>
              <p>{t('Store your freshly mined assets securely.')}</p>
              <div className="storage-type">
                <div className="tab-content-item safe-storage">
                  <div className="tab-content-item-tag safe-storage-tag">
                    <p className="tab-content-item-title safe-storage-title ">{t("Desktop wallet")}</p>
                  </div>
                  <div className="tab-content-item-icons safe-storage-icons">
                    <a href="https://github.com/core-coin/wallet-generator" className="tab-content-item-link safe-storage-link">
                      <img src={Arrow} alt="arrow right" className="arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="tab-content-item safe-storage">
                  <div className="tab-content-item-tag safe-storage-tag">
                    <p className="tab-content-item-title safe-storage-title">{t("Mobile wallet")}</p>
                  </div>
                  <div className="tab-content-item-icons safe-storage-icons">
                    <a href="https://corepass.net/" className="tab-content-item-link safe-storage-link">
                      <img src={Arrow} alt="arrow right" className="arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default withNamespaces()(Mining)
