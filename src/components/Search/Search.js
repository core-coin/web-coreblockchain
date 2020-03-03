import React, { PureComponent } from 'react'

import SearchIcon from '../Icon/icons/Search'

import Button from '../Button'

import './Search.scss'

const icon = (
    <div className='account_icon'>
        <SearchIcon />
    </div>
);

export default class Search extends PureComponent{
    render(){

        return(
            <div className='search'>
                <Button
                    icon={icon}
                    theme='ghost'
                    size='extraSmall'
                    hover={false}
                />
            </div>
        )
    }
}