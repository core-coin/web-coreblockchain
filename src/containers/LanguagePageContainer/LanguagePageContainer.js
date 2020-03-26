import React, { PureComponent } from 'react'
import { func } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from "../../reducer/actions";

class LanguagePageContainer extends PureComponent {
    static propTypes = {
        setLanguage: func,
    }

    static defaultProps = {}

    render() {
        const {
            translate,
            language,
        } = this.props

        return(
            <div>text</div>
        )
    }
}

function mapStateToProps(state) {
    return{
        translate: state.translate,
        language: state.language,
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: setLanguage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(LanguagePageContainer)