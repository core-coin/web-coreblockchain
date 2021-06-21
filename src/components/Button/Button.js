import React, { PureComponent } from 'react'
import { string, bool, func, oneOf, node } from 'prop-types'
import { Link } from 'react-router-dom'

import classNames from 'classnames/bind'

import styles from './Button.scss'

let cx = classNames.bind(styles)

export default class Button extends PureComponent {
    static propTypes = {
        theme: oneOf(['green', 'ghost']),
        text: string,
        href: string,
        download: bool,
        size: oneOf(['normal', 'small', 'extraSmall']),
        type: oneOf(['router', 'button', 'a']),
        onClick: func,
        icon: node,
        hover: bool,
        margin: oneOf(['15', '35']),
        mobileFullWidth: bool,
    }

    static defaultProps = {
        theme: 'green',
        text: '',
        href: '',
        size: 'small',
        type: 'button',
        onClick: () => {},
        icon: null,
        hover: true,
        download: false,
        margin: '15',
        mobileFullWidth: false,
    }

    renderBody() {
        const { icon, text } = this.props;

        return (
            <span className={cx('body')}>
                {icon && <span className={cx('body_icon')}>{icon}</span>}
                {text && <span className={cx('body_text')}>{text}</span>}
            </span>
        )
    }

    render() {
        const {
            type,
            size,
            theme,
            href,
            download,
            onClick,
            hover,
            margin,
            mobileFullWidth
        } = this.props

        const className = cx('button', {
            [`theme_${theme}`]: theme,
            [`size_${size}`]: size,
            [`margin_${margin}`]: margin,
            hover,
            mobileFullWidth,
        })

        if (type === 'router') {
            return (
                <Link to={href} className={className} onClick={onClick}>
                    {this.renderBody()}
                </Link>
            )
        }

        if (download) {
            return (
                <a className={className} href={href} download={download}>
                    {this.renderBody()}
                </a>
            )
        }

        if (href) {
            return (
                <a className={className} href={href}>
                    {this.renderBody()}
                </a>
            )
        }

        return (
            <button
                className={className}
                type={type}
                onClick={onClick}
            >
                {this.renderBody()}
            </button>
        )
    }
}
