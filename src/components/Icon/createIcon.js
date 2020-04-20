import React, { PureComponent } from 'react'
import { oneOfType, string, number } from 'prop-types'
import Icon from './Icon'

export default (path, props = {}) =>
    class Icon extends PureComponent {
        static propTypes = {
            width: oneOfType([number, string]),
            height: oneOfType([number, string]),
            display: string,
            viewBox: string
        }

        static defaultProps = {
            width: props.width,
            height: props.height,
            display: props.display,
            viewBox: props.viewBox
        }

        render() {
            const { width, height, display, viewBox } = this.props;

            return (
                <Icon
                    width={width}
                    height={height}
                    display={display}
                    viewBox={viewBox}
                >
                    {path}
                </Icon>
            )
        }
    }