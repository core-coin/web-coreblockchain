import React, { PureComponent } from 'react'
import { string, bool } from 'prop-types'

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
            <a href={url} className={centerMode ? 'animatedArrow center' : 'animatedArrow'}>{text}
                <span className='the-arrow'>
                    <span className='shaft'></span>
                </span>
            </a>
        )
    }
}