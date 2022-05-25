import React, { PureComponent } from 'react'
import MetaTags from 'react-meta-tags'
import PrivacyPolicy from '../../components/PrivacyPolicy'
import '../../templates/md.scss'

class OverviewContainer extends PureComponent {

  render() {
    const { t } = this.props
    return(
      <>
        <MetaTags>
          <title>
            {t('Privacy Policy')}
          </title>
        </MetaTags>
        <div className="content-container">
          <PrivacyPolicy />
        </div>
      </>
    )
  }
}

export default OverviewContainer
