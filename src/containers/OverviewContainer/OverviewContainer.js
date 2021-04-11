import React, { PureComponent } from 'react'
import { func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../../reducer/actions'
import Loading from '../../components/Loading'
import PageNotFound from '../../components/PageNotFound'

import BlogTemplate from '../../templates/blogTemplate'

class OverviewContainer extends PureComponent {
    static propTypes = {
        setLanguage: func,
        translate: object,
        language: string,
        match: object,
        mdFiles: object,
    }

    static defaultProps = {}

    render() {
        const {
            translate,
            language,
            setLanguage,
            mdFiles,
            match
        } = this.props

      if (!mdFiles) {
        return(
         <Loading/>
        )
      }

      let file = mdFiles[match.url]
      if (file === undefined ){
        return (
          <PageNotFound/>
        )
      }

      return(
        <BlogTemplate mdFile={file}/>
      )
    }
}

function mapStateToProps(state) {
    return{
        translate: state.index.translate,
        language: state.index.language,
        mdFiles: state.index.markdownFiles,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: setLanguage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)