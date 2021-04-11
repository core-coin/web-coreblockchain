import React, { PureComponent } from 'react'
import { func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../../reducer/actions'

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
              <div>sorry dcw</div>
            )
      }

      let file = mdFiles[match.url]
      if (file === undefined ){
            console.log(mdFiles, match.url)
            return (
              <div>sorry unde</div>
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