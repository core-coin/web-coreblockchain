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
        size: oneOf(['normal', 'small', 'extraSmall']),
        type: oneOf(['router', 'button']),
        onClick: func,
        icon: node,
        hover: bool,
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
    }

    renderBody() {
        const { icon, text } = this.props;

        return (
            <span className={cx('body')}>
                {icon && <span className={cx('body_icon')}>{icon}</span>}
                <span className={cx('body_text')}>{text}</span>
            </span>
        );
    }

    render() {
        const {
            type,
            size,
            theme,
            href,
            onClick,
            hover
        } = this.props

        const className = cx('button', {
            [`theme_${theme}`]: theme,
            [`size_${size}`]: size,
            hover
        })

        if (type === 'router') {
            return (
                <Link to={href} className={className}>
                    {this.renderBody()}
                </Link>
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