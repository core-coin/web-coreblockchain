import React, { PureComponent } from 'react'
import Content from '../../content/community.mdx'
import MetaTags from 'react-meta-tags'
import '../../templates/md.scss'

const components = {
  em: props => <p {...props} />
}

class CommunityContainer extends PureComponent {

  render() {
    const { t } = this.props
    return(
      <>
        <MetaTags>
          <title>
            {t('connect with community')}
          </title>
        </MetaTags>
        <div className="content-container">
          <Content components={components} />
        </div>
        </>
    )
  }
}

export default CommunityContainer
