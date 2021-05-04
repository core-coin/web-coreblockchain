import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Navbar from '../../components/HeaderNavbar'

class HeaderContainer extends PureComponent {
    static propTypes = {
        language: string,
        searchIndex: object,
        searchDocs: object,
    }

    static defaultProps = {}

    render() {
        const {
            language,
            setLanguage,
            searchIndex,
            searchDocs
        } = this.props

        return(
            <Navbar 
            language={language}
            setLanguage={setLanguage}
            searchIndex={searchIndex}
            searchDocs={searchDocs}
            />
        )
    }
}

function mapStateToProps(state) {
    return{
        language: state.index.language,
        searchIndex: state.index.searchIndex,
        searchDocs: state.index.searchDocs,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)