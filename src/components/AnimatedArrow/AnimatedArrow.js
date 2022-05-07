import React, { PureComponent } from 'react'
import { string, bool } from 'prop-types'

import './AnimatedArrow.scss'

export default class Solutions extends PureComponent{
    static propTypes = {
        text: string,
        url: string,
        centerMode: bool,
        targetBlack: bool
    }

    static defaultProps = {
        text: 'get started',
        targetBlack: false
    }

    render(){
        const { text, url, centerMode, targetBlack } = this.props

        return targetBlack ?
          (
            <a href={url} className={centerMode ? 'animatedArrow center' : 'animatedArrow'} target='_blank' rel="noreferrer">{text}
            {/*<span className='the-arrow'>*/}
            {/*    <span className='shaft'></span>*/}
            {/*</span>*/}
            </a>
          ) : (
            <a href={url} className={centerMode ? 'animatedArrow center' : 'animatedArrow'}>{text}
                {/*<span className='the-arrow'>*/}
                {/*    <span className='shaft'></span>*/}
                {/*</span>*/}
            </a>
          )
    }
}
