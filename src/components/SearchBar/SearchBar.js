import React, { useCallback, useState, useEffect } from 'react'
import docs from '../../markdown-pages/docs.json'
import lunr from 'lunr'
import { keyBy } from 'lodash'
import Mark from 'mark.js'
import './Search.scss'

import SearchIcon from '../SvgIcon/icons/Search'

const index = keyBy(docs, 'basename')

var idx = lunr(function () {
  this.ref('basename')
  this.field('title')
  this.field('description')

  this.metadataWhitelist = ['position']

  docs.forEach((doc) => {
    this.add({
      basename: doc.basename,
      title: doc.title.toLowerCase(),
      description: doc.description,
      metadataWhitelist: doc.basename,
    })
  })
})

const SearchBar = () => {
  const [results, setResults] = useState([])
  let [value, setValue] = useState([])
  var markInstance = new Mark(document.querySelector('.search'))

  useEffect(() => {
    setTimeout(() => {
      markInstance.unmark({
        done: function() {
          markInstance.mark(value, {
            element: 'em'
          })
        }
      })
    }, 0)
  }, [value])

  return (
    <div className='search'>
      <label className='search_box search_box__open'>
        <input
          type='search'
          placeholder='Search for a term or phrase...'
          name='search'
          autoFocus={true}
          className='search_box__input'
          onChange={useCallback((e) => {
            const res = idx.search(`${e.target.value}`)
            const searchRes = res.map((i) => index[i.ref])
            value = e.target.value

            setValue(value)
            setResults(searchRes)
         
          }, [])}
        />
        <span className='search_box__icon'>
          <SearchIcon />
        </span>
      </label>
      <div className='results' id='results'>
        {results.map((doc) => (
          <a href={doc.slug} key={doc.basename}>
            <h3>{doc.title}</h3>
            <p>
              {doc.description.substr(0, 280)}
              ...
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
