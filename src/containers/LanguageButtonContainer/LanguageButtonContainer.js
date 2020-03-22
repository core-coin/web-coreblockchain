import React, { PureComponent } from 'react'
import { func, } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {setLanguage} from '../../reducer/actions'
import Button from '../../components/Button'
import Language from '../../components/Icon/icons/Language'

const LanguageIcon = <Language/>

class PageContainer extends PureComponent {
    static propTypes = {
        setLanguage: func,
    }

    static defaultProps = {}

    render() {
        const {
            setLanguage,
        } = this.props

        return(
            <>
                <Button
                    icon={LanguageIcon}
                    theme='ghost'
                    size='extraSmall'
                    hover={false}
                    onClick={() => {setLanguage('sk')}}
                />
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    setLanguage: setLanguage,
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)