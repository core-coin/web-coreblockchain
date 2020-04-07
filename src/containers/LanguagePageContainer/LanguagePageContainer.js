import React, { PureComponent } from 'react'
import { func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../../reducer/actions'

import LanguagePage from '../../components/LanguagePage'

class LanguagePageContainer extends PureComponent {
    static propTypes = {
        setLanguage: func,
        translate: object,
        language: string,
    }

    static defaultProps = {}

    render() {
        const {
            translate,
            language,
            setLanguage
        } = this.props

        return(
            <LanguagePage
                language={language}
                translate={translate}
                setLanguage={setLanguage}
            />
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