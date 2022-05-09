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
                {t('Core Blockchain')}
              </title>
            </MetaTags>
				    <GetStarted />
          </>
        )
    }
}

export default GetStartedContainer