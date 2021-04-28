import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LanguagePage from '../../components/LanguagePage'

class LanguagePageContainer extends PureComponent {
    static propTypes = {
        language: string,
    }

    static defaultProps = {}

    render() {
        const {
            language,
        } = this.props

        return(
            <LanguagePage
                language={language}
            />
        )
    }
}

function mapStateToProps(state) {
    return{
        language: state.index.language,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(LanguagePageContainer)