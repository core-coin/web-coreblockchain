import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Loading from '../../components/Loading'
import PageNotFound from '../../components/PageNotFound'

import BlogTemplate from '../../templates/blogTemplate'

class OverviewContainer extends PureComponent {
    static propTypes = {
        match: object,
        mdFiles: object,
        language: string,
    }

    static defaultProps = {}

    render() {
        const {
            mdFiles,
            match,
            language,
        } = this.props

      if (!mdFiles) {
        return(
         <Loading/>
        )
      }

      let file = mdFiles[match.url]

      if (file === undefined ){
        return (
          <PageNotFound language={language}/>
        )
      }

      return(
        <BlogTemplate mdFile={file}/>
      )
    }
}

function mapStateToProps(state) {
    return{
        mdFiles: state.index.markdownFiles,
        language: state.index.language,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)