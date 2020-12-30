import React, { PureComponent } from 'react'
import { func, object, string } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLanguage} from '../../reducer/actions'
import Community from '../../components/Comminity'

class CommunityContainer extends PureComponent {
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
            <Community
                language={language}
                translate={translate}
                setLanguage={setLanguage}
            />
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


export default connect(mapStateToProps, mapDispatchToProps)(CommunityContainer)