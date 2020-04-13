import React, { PureComponent } from 'react'
import { object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import GetStarted from '../../components/GetStarted'

class GetStartedContainer extends PureComponent {
    static propTypes = {
        translate: object,
        language: string,
    }

    static defaultProps = {}

    render() {
        const {
            translate,
            language
        } = this.props

        return(
            <GetStarted translate={translate} language={language}/>
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
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(GetStartedContainer)