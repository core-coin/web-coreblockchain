import React, { PureComponent } from 'react'
import { string, bool } from 'prop-types'
import { Link } from 'react-router-dom'

import './AnimatedArrow.scss'

export default class Solutions extends PureComponent{
    static propTypes = {
        text: string,
        url: string,
        centerMode: bool,
    }

    static defaultProps = {
        text: 'get started',
    }

    render(){
        const { text, url, centerMode } = this.props

        return(
            <Link to={url} className={centerMode ? 'animatedArrow center' : 'animatedArrow'}>{text}
                {/*<span className='the-arrow'>*/}
                {/*    <span className='shaft'></span>*/}
                {/*</span>*/}
            </Link>
        )
    }
}
