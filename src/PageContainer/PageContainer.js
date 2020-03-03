import React, { PureComponent } from 'react'
import {  } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Navbar from '../components/HeaderNavbar'

class PageContainer extends PureComponent {
    static propTypes = {
    }

    static defaultProps = {}

    render() {
        const { } = this.props

        return(
            <>
                <Navbar/>
            </>
        )
    }
}

function mapStateToProps(state) {
    return{
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PageContainer)