import React, { PureComponent } from 'react'
import { func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../../reducer/actions'

import SearchPage from '../../components/SearchPage'

class SearchContainer extends PureComponent {
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
            <SearchPage
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
    setLanguage: setLanguage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)