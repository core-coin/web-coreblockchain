import React, { PureComponent } from 'react'
import MetaTags from 'react-meta-tags'

import Developers from '../../components/Developers'

class DevelopersContainer extends PureComponent {
    static propTypes = {}

    static defaultProps = {}

    render() {

        const { t } = this.props

        return(
          <>
	          <MetaTags>
		          <title>
			          {t('connect with dev community')}
		          </title>
	          </MetaTags>
	          <Developers />
          </>
        )
    }
}


export default DevelopersContainer