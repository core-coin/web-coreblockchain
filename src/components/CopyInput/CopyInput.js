import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard';

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


    render(){
        const { value } = this.props

        return(
            <div className='copyInput'>
                <CopyToClipboard text={ value }>
                    <div className="copy-button"><img src={Copy} alt="copy icon" /></div>
                </CopyToClipboard>
            </div>
        )
    }
}
