import React, { PureComponent } from 'react'
import MetaTags from 'react-meta-tags'
import TermsConditions from '../../components/TermsConditions'
import '../../templates/md.scss'


class OverviewContainer extends PureComponent {

  render() {
    const { t } = this.props
    return(
      <>
        <MetaTags>
          <title>
            {t('Terms and Conditions')}
          </title>
        </MetaTags>
        <div className="content-container">
          <TermsConditions />
        </div>
      </>
    )
  }
}

export default OverviewContainer