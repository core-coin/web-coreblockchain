import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import Copy from '../../images/getStarted/CopySimple.svg'

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
            <div className='copyInput'>
                <input
                    type='text'
                    value={value}
                    ref={this.textInput}
                    style={{display: 'none'}}
                    readOnly
                />
                <button className="copy-button" onClick={this.copyToClipboard}><img src={Copy} alt="copy icon" /></button>
            </div>
        )
    }
}
