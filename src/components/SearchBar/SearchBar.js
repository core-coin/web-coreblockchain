import React, { useCallback, useState } from 'react'
import docs from '../../markdown-pages/docs.json'
import lunr from 'lunr'
import { keyBy } from 'lodash'
import { Marker } from 'react-mark.js'
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
  let [isOpen, setIsOpen] = useState(false)
  let [value, setValue] = useState([])

  function handleStatusChange() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="search">
      <label className="search_box search_box__open">
        <input
          type="search"
          placeholder="Search for a term or phrase..."
          name="search"
          autoFocus={true}
          className="search_box__input"
          onChange={useCallback((e) => {
            const res = idx.search(`${e.target.value}`)
            const searchRes = res.map((i) => index[i.ref])
            value = e.target.value
            setValue(value)
            setResults(searchRes)
          }, [])}
        />
        <span className="search_box__icon" onClick={handleStatusChange}>
          <SearchIcon />
        </span>
      </label>
      <div className="results" id="results">
        {results.map((doc) => (
           <Marker mark={value}>
          <a href={doc.slug} key={doc.basename}>
            <h3>{doc.title}</h3>
            <p>
              {doc.description.substr(0, 280)}
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
