import React, { PureComponent } from 'react'
import { array, string } from 'prop-types'
import ReactSelect, { components } from 'react-select'

import Button from '../Button'
import Download from '../SvgIcon/icons/Download'
import ArrowDown from '../../images/arrow.svg'
import Dots from '../../images/ListBullets.svg'

import './Select.scss'

const DownloadIcon = <Download/>

export default class Select extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            showMenu: false,
        }
    }
    static propTypes = {
        labelText: string,
        id: string,
        items: array,
        greenBtnText: string,
        ghostBtnText: string,
        sourceCodeLink: string,
        placeholder: string
    }

    // renderOption = (option, index) => (
    //     <option key={index} value={option.title}>{option.title}</option>
    // )

    onSelectChange = (data) => {
        this.setState({
            value: data.value
        })
    }

  showMenu = (event) => {
      event.preventDefault();
      console.log(this.state.showMenu)
      if (this.state.showMenu){
        this.closeMenu()
      } else {
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu, true);
        });
      }
  }

  closeMenu = () => {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
  }

    render(){
        const { items, greenBtnText, ghostBtnText, sourceCodeLink, placeholder } = this.props

        let selectedItem = this.props.items.filter((item) => item.value === this.state.value)
      const DropdownIndicator = (propsSelect) => {
        return (
          <components.DropdownIndicator className="dropdown-container" {...propsSelect}>
            <img src={ArrowDown} alt="arrow down" className='img-fluid arrow-down' />
          </components.DropdownIndicator>
        )
      }
      const IndicatorSeparator = (propsSelect) => {
        return <components.IndicatorSeparator className="indicator-separator" {...propsSelect} />
      }

            return (
                <>
                  <div className='select-container'>
                    <div className="select">
                      <ReactSelect
                        options={items}
                        placeholder={placeholder}
                        components={{ DropdownIndicator, IndicatorSeparator }}
                        isClearable={false}
                        menuPlacement="auto"
                        onChange={this.onSelectChange}
                        value={items.find((o) => o.value === this.state.value)}
                        styles={{
                          control: (base) => ({
                            ...base,
                            boxShadow: 'none',
                            border: '1px solid #303040',
                            backgroundColor: '#18181F',
                            borderRadius: '8px',
                            paddingRight: '8px',
                            height: '48px',
                            cursor: 'pointer',
                            "&:hover": {
                              borderColor: "#77778C"
                            },
                            "&:hover > * > *": {
                              color: "#FFF"
                            },
                            "&:hover > * > .dropdown-container": {
                              backgroundColor: "#303040",
                            },
                            "&:hover > * > .dropdown-container > .arrow-down": {
                              filter: 'brightness(0) invert(1)',
                            }
                          }),
                          indicatorsContainer: (base) => ({
                            ...base,
                            '& > div': {
                              padding: '0',
                            },
                          }),
                          placeholder: (base) => ({
                            ...base,
                            color: '#77778C',
                            fontSize: '16px',
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            paddingLeft: '16px',
                            paddingRight: '8px',
                          }),
                          singleValue: (base) => ({
                            ...base,
                            backgroundColor: '#18181F',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 400,
                            marginRight: '0',
                            marginLeft: '0',
                          }),
                          dropdownIndicator: (base, state) => ({
                            ...base,
                            width: '32px',
                            height: '32px',
                            padding: '13px 11px',
                            borderRadius: '8px',
                            '& > .arrow-down': {
                              transition: 'all .2s ease',
                              transform: state.selectProps.menuIsOpen  ? 'rotate(180deg)' : null,
                            },
                            "&:hover": {
                              backgroundColor: "#77778C !important",
                            }
                          }),
                          menu: (base) => ({
                            ...base,
                            backgroundColor: '#24242E',
                            border: '1px solid #303040',
                            color: '#77778C',
                            padding: '8px'
                          }),
                          option: (styles, {isDisabled, isFocused, isSelected }) => {
                            return {
                              ...styles,
                              fontSize: '14px',
                              fontWeight: '400',
                              borderRadius: '8px',
                              backgroundColor: isDisabled
                                ? undefined
                                : isSelected
                                ? '#303040'
                                : isFocused
                                ? '#303040'
                                : undefined,
                              color: isDisabled
                                ? undefined
                                : isSelected
                                  ? '#fff'
                                  : isFocused
                                    ? '#fff'
                                    : undefined,
                            }
                          }
                        }}
                      />
                    </div>
                    <div>
                      <div className="button-menu" onClick={this.showMenu}>
                        <img src={Dots} alt="arrow down" className='img-fluid dots' />
                      </div>
                      {
                        this.state.showMenu
                          && (
                            <div className="menu">
                              <a href="/"> Get public key </a>
                              <a href="/"> Previous versions </a>
                            </div>
                          )
                      }
                    </div>
                  </div>
                  <Button
                        mobileFullWidth
                        download
                        theme='green'
                        size='small'
                        href={selectedItem.linkToDownLoad}
                        text={greenBtnText}
                        icon={DownloadIcon}
                        disabled={this.state.value === ''}
                    />
                    <Button
                        mobileFullWidth
                        download
                        theme='ghost'
                        size='small'
                        href={sourceCodeLink}
                        text={ghostBtnText}
                    />
                </>
            )
        }
}
