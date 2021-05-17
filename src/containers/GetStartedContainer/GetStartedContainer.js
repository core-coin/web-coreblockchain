import React, { PureComponent } from 'react'
import GetStarted from '../../components/GetStarted'
import MetaTags from 'react-meta-tags'

class GetStartedContainer extends PureComponent {
    static propTypes = {}

    static defaultProps = {}

    render() {

        const { t } = this.props

        return(
          <>
	          <MetaTags>
		          <title>
			          {t('Core Block Explorer is a web tool that provides detailed information about Core blocks, addresses, and transactions.')}
              </title>
            </MetaTags>
				    <GetStarted />
          </>
        )
    }
}

export default GetStartedContainer