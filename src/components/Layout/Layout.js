import React, { PureComponent } from 'react'
import { node } from 'prop-types'

import HeaderContainer from '../../containers/HeaderContainer'
import FooterContainer from '../../containers/FooterContainer'

export default class Layout extends PureComponent{
    static propTypes = {
        children: node,
    }

    render(){
        const { children } = this.props

        return(
            <>
                <HeaderContainer/>
                {children}
                <FooterContainer/>
            </>
        )
    }
}