import React, { PureComponent } from 'react'
import { node, number, string, oneOfType } from 'prop-types'
import classNames from 'classnames/bind'

import styles from './Icon.scss'

let cx = classNames.bind(styles)

export default class Icon extends PureComponent {
    static propTypes = {
        children: node,
        width: oneOfType([number, string]),
        height: oneOfType([number, string]),
        display: string,
        viewBox: string
    }

    static defaultProps = {
        children: null,
        width: 16,
        height: 16,
        viewBox: '0 0 16 16'
    }

    render() {
        const { children, width, height, viewBox } = this.props;

        return (
            <svg
                className={cx('Icon')}
                viewBox={viewBox}
                width={width}
                height={height}
                focusable={false}
                style={{
                    width,
                    height
                }}
            >
                {children}
            </svg>
        )
    }
}