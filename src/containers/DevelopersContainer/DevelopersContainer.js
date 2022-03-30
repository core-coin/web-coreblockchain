import React, { PureComponent } from 'react'
import MetaTags from 'react-meta-tags'
import Content from '../../content/community.mdx'
import '../../templates/md.scss'

// import Developers from '../../components/Developers'

const components = {
  em: props => <p {...props} />
}


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
            <div className="content-container">
              <Content components={components} />
            </div>
	          {/*<Developers />*/}
          </>
        )
    }
}


export default DevelopersContainer
