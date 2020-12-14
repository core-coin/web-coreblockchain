import React, { PureComponent } from 'react'
import { array, string, oneOf } from 'prop-types'
import { Label, Input } from 'reactstrap'

import Button from '../Button'
import Download from '../SvgIcon/icons/Download'
import Ipfs from '../SvgIcon/icons/Ipfs'
import Onion from '../SvgIcon/icons/Onion'

import './Select.scss'

const DownloadIcon = <Download/>
const OnionIcon = <Onion />
const IpfsIcon = <Ipfs />

export default class Select extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            value: props.items[0].title,
        }
    }
    static propTypes = {
        type: oneOf(['buttons', 'button', 'select']),
        labelText: string,
        id: string,
        items: array,
        greenBtnText: string,
        ghostBtnText: string,
        addBtnText: string,
    }

    renderOption = (option, index) => (
        <option key={index} value={option.title}>{option.title}</option>
    )

    onSelectChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render(){
        const { id, labelText, items, greenBtnText, ghostBtnText, addBtnText, type } = this.props

        let selectedItem = this.props.items.filter((item) => item.title === this.state.value)[0]

        const SELECT = (
            <>
                {labelText && <Label className='select_label' for={id}>{labelText}</Label>}
                <Input
                    className='select_input'
                    type='select'
                    name='select'
                    id={id}
                    onChange={this.onSelectChange}
                    value={this.state.value}
                >
                    {items.map(this.renderOption)}
                </Input>
            </>
        )

        if (type === 'buttons') {
            return (
                <>
                    {SELECT}
                    <Button
                        mobileFullWidth
                        download
                        theme='green'
                        size='small'
                        href={selectedItem.linkToDownLoad}
                        text={greenBtnText}
                        icon={DownloadIcon}
                    />
                    <Button
                        mobileFullWidth
                        download
                        theme='ghost'
                        size='small'
                        href={selectedItem.ipfsLink}
                        text={ghostBtnText}
                        icon={IpfsIcon}
                    />
                    <Button
                        mobileFullWidth
                        download
                        theme='ghost'
                        size='small'
                        href={selectedItem.onionLink}
                        text={addBtnText}
                        icon={OnionIcon}
                    />
                </>
            )
        }

        if (type === 'button') {
            return (
                <>
                    {SELECT}
                    <Button
                        mobileFullWidth
                        theme='green'
                        size='small'
                        href={selectedItem.link}
                        text={greenBtnText}
                    />
                </>
            )
        }

        return(
            <>
                {SELECT}
            </>
        )
    }
}
