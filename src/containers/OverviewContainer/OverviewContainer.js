import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../../reducer/actions'
import blogOverview from '../../markdown-pages/post-2.md'

import BlogTemplate from '../../templates/blogTemplate'

class OverviewContainer extends PureComponent {

    static defaultProps = {}

    render() {

        return(
          <BlogTemplate source={blogOverview}/>
        )
    }
}

function mapStateToProps(state) {
    return{
        translate: state.index.translate,
        language: state.index.language,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: setLanguage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer)