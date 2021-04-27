import React, { useState } from 'react'
import { Marker } from 'react-mark.js'
import './Search.scss'

import SearchIcon from '../SvgIcon/icons/Search'

const SearchBar = ({searchIndex, searchDocs}) => {
  const [results, setResults] = useState([])
  let [isOpen, setIsOpen] = useState(false)
  let [value, setValue] = useState([])

  function handleStatusChange() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='search'>
      <div className={isOpen ? 'search__overlay' : 'd-none'} onClick={handleStatusChange}></div>
      <label className={isOpen ? 'search_box search_box__open' : 'search_box'} >
        <input
          type='search'
          placeholder={'Search for a term or phrase...'}
          name='search'
          autoFocus={true}
          className="search_box__input"
          onChange={(e) => {
            const res = searchIndex.search(`${e.target.value}`)
            const searchRes = res.map((i) => searchDocs[i.ref])
            value = e.target.value
            setValue(value)
            setResults(searchRes)
          }}
        />
        <span className='search_box__icon' onClick={handleStatusChange}>
          <SearchIcon />
        </span>
      </label>
      <div className={results.length > 0 && isOpen && value ? 'results' : 'd-none'} id='results'>
        {results.map((doc) => (
           <Marker mark={value}>
          <a href={doc.link} key={doc.ref}>
            <h3>{}</h3>
            <p>
              {doc.title.substr(0, 180)}
              ...
            </p>
          </a>
          </Marker>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
