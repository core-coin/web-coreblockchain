import React, { PureComponent } from 'react'
import { string, bool } from 'prop-types'

import './AnimatedArrow.scss'
import i18n from 'i18next'

export default class Solutions extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            showMenu: false,
        }
    }
    static propTypes = {
        text: string,
        url: string,
        centerMode: bool,
        targetBlack: bool,
        dropdown: bool,
        dropdownItems: []
    }

    static defaultProps = {
        text: 'get started',
        targetBlack: false,
        dropdown: false,
        dropdownItems: []
    }

    renderItems = (items) => (
      <a href={items.link} target='_blank' rel="noreferrer">{i18n.t(items.label)} </a>
    )
    showMenu = (event) => {
        event.preventDefault();
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
        const { text, url, centerMode, targetBlack, dropdownItems, dropdown } = this.props

        return (
          <div>
              {targetBlack ?
              (
                <a href={url} className={centerMode ? 'animatedArrow center' : 'animatedArrow'} target='_blank' rel="noreferrer">{text}
                {/*<span className='the-arrow'>*/}
                {/*    <span className='shaft'></span>*/}
                {/*</span>*/}
                </a>
              ) : (
                <a href={url} className={centerMode ? 'animatedArrow center' : 'animatedArrow'} onClick={dropdown && this.showMenu}>{text}
                    {/*<span className='the-arrow'>*/}
                    {/*    <span className='shaft'></span>*/}
                    {/*</span>*/}
                </a>
              )}
              {
                this.state.showMenu && dropdown
                && (
                  <div className="menu">
                      {dropdownItems.map(this.renderItems)}

                  </div>
                )
              }
          </div>
        )

    }
}
