import React, { PureComponent } from 'react'
import { object, string, func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Navbar from '../../components/HeaderNavbar'

class HeaderContainer extends PureComponent {
    static propTypes = {
        setLanguage: func,
        translate: object,
        language: string,
        searchIndex: object,
        searchDocs: object,
    }

    static defaultProps = {}

    render() {
        const {
            translate,
            language,
            setLanguage,
            searchIndex,
            searchDocs
        } = this.props

        return(
            <Navbar 
            language={language}
            translate={translate}
            setLanguage={setLanguage}
            searchIndex={searchIndex}
            searchDocs={searchDocs}
            />
        )
    }
}

function mapStateToProps(state) {
    return{
        translate: state.index.translate,
        language: state.index.language,
        searchIndex: state.index.searchIndex,
        searchDocs: state.index.searchDocs,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)