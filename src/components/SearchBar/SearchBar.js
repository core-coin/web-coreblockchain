import React, { useCallback, useState } from 'react'
import docs from './docs.json'
import lunr from 'lunr'
import { keyBy } from 'lodash'
import './Search.scss'

import SearchIcon from '../SvgIcon/icons/Search'

const index = keyBy(docs, 'id')

var idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('description')

  docs.forEach((doc) => {
    this.add({
      id: doc.id,
      title: doc.title.toLowerCase(),
      description: doc.description,
    })
  })
})

const SearchBar = () => {
  const [results, setResults] = useState([])
  let [isOpen, setIsOpen] = useState(false)

  function handleStatusChange() {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className='search'>
      <div
        className={isOpen ? 'search__overlay' : 'd-none'}
        onClick={handleStatusChange}
      ></div>
      <label className={isOpen ? 'search_box search_box__open' : 'search_box'}>
        <input
          type='search'
          placeholder='Search for a term or phrase...'
          name='search'
          className='search_box__input'
          onChange={useCallback((e) => {
            const res = idx.search(`${e.target.value}`)
            const searchRes = res.map((i) => index[i.ref])
console.log('change')
            setResults(searchRes)
          }, [])}
        />
        <input
          type='text'
          className='search_box__submit'
          onChange={useCallback((e) => {
            const res = idx.search(`${e.target.value}`)
            const searchRes = res.map((i) => index[i.ref])

            setResults(searchRes)
          }, [])}
        />
        <span className='search_box__icon' onClick={handleStatusChange}>
          <SearchIcon />
        </span>
      </label>
      <div className='results'>
        {results.map((prod) => (
          <div key={prod.id}>
            <h3>{prod.title}</h3>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
