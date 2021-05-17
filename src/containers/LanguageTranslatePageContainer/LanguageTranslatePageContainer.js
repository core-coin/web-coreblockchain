import React, { PureComponent } from 'react'
import MetaTags from 'react-meta-tags'

import LanguageTranslatePage from '../../components/LanguageTranslatePage'

class LanguageTranslatePageContainer extends PureComponent {
    static propTypes = {}

    static defaultProps = {}

    render() {
	    const { t } = this.props

        return(
          <>
	          <MetaTags>
		          <title>
			          {t('Translation Program')}
		          </title>
	          </MetaTags>
	          <LanguageTranslatePage />
          </>
        )
    }
}

export default LanguageTranslatePageContainer