import React, { PureComponent } from 'react'
import { func } from 'prop-types'

import SearchIcon from '../Icon/icons/Search'

import './Search.scss'

export default class Search extends PureComponent{
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.state = {
            isSearchBarOpen: false,
        }
    }

    static propTypes = {
        onSearch: func,
    }

    openSearchBar = () => {
        this.setState({
            isSearchBarOpen: true,
        })
    }

    onSearchSubmit = () => {
        this.props.onSearch(this.searchInput.current.value)
    }

    render(){
        const { isSearchBarOpen } = this.state

        return(
            <div className='search'>
                <label className={isSearchBarOpen ? 'search_box search_box__open' : 'search_box'} >
                    <input
                        type='search'
                        placeholder='Search for a term or phrase...'
                        name='search'
                        className='search_box__input'
                        ref={this.searchInput}
                    />
                    <input
                        type='submit'
                        className='search_box__submit'
                        onClick={this.onSearchSubmit}
                        value='' />
                    <span className='search_box__icon' onClick={this.openSearchBar}><SearchIcon/></span>
                </label>
            </div>
        )
    }
}