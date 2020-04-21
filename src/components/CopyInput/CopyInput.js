import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import Copy from '../Icon/icons/Copy'

import './CopyInput.scss'

export default class CopyInput extends PureComponent{
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }

    static propTypes = {
        value: string,
    }

    copyToClipboard = () => {
        let textField = this.textInput.current
        textField.select()
        document.execCommand('copy')
    }

    render(){
        const { value } = this.props

        return(
            <div className='copyInput input-group'>
                <input
                    type='text'
                    value={value}
                    ref={this.textInput}
                    readOnly
                />
                <hr className='vertical'/>
                <button type='button' onClick={this.copyToClipboard}><Copy/></button>
            </div>
        )
    }
}
