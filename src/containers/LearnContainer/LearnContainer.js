import React, { PureComponent } from 'react'
import Content from '../../content/learn.mdx'
import MetaTags from 'react-meta-tags'
import '../../templates/md.scss'

const components = {
  em: props => <p {...props} />
}

class LearnContainer extends PureComponent {

  render() {
    const { t } = this.props
    return(
      <>
        <MetaTags>
          <title>
            {t('Learn')}
          </title>
        </MetaTags>
        <div className="content-container">
          <Content components={components} />
        </div>
        </>
    )
  }
}

export default LearnContainer
