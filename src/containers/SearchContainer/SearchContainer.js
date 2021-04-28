import React, { PureComponent } from 'react'
import { object } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchPage from '../../components/SearchPage'

class SearchContainer extends PureComponent {
    static propTypes = {
        searchIndex: object,
        searchDocs: object,
    }

    static defaultProps = {}

    render() {
        const {
            searchIndex,
            searchDocs
        } = this.props

        return(
            <SearchPage
                searchIndex={searchIndex}
                searchDocs={searchDocs}
            />
        )
    }
}

function mapStateToProps(state) {

    return{
        searchIndex: state.index.searchIndex,
        searchDocs: state.index.searchDocs,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)