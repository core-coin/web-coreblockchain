import React, { PureComponent } from 'react'
import { oneOf, string } from 'prop-types'
import Key from '../SvgIcon/icons/Key'

import './InputKey.scss'

export default class InputKey extends PureComponent {
  static propTypes = {
    theme: oneOf(['green', 'ghost']),
    text: string,
  }

  static defaultProps = {
    theme: 'ghost',
    text: '',
  }

  render() {

    const { text } = this.props

    return (
      <div className='input__wrapper'>
        <input
          name='file'
          type='file'
          id='input__file'
          className='input input__wrapper-file button theme_ghost size_small mobileFullWidth'
        ></input>
        <label
          htmlFor='input__file'
          className='input__wrapper-file-button button hover theme_ghost size_small mobileFullWidth'
        >
          <span className='input__wrapper-file-icon-wrapper'>
            <Key />
          </span>
          <span className='input__wrapper-file-button-text'>{text}</span>
        </label>
      </div>
    )
  }
}
