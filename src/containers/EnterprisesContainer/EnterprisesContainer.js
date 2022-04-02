import React, { PureComponent } from 'react'
import Content from '../../content/enterprises.mdx'
import MetaTags from 'react-meta-tags'
import '../../templates/md.scss'

const components = {
  em: props => <p {...props} />
}

class EnterprisesContainer extends PureComponent {

  render() {
    const { t } = this.props
    return(
      <>
        <MetaTags>
          <title>
            {t('Enterprises')}
          </title>
        </MetaTags>
        <div className="content-container">
          <Content components={components} />
        </div>
        </>
    )
  }
}

export default EnterprisesContainer
