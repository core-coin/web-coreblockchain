import React, { useCallback, useState } from 'react'
import docs from './docs.json'
import lunr from 'lunr'
import { keyBy } from 'lodash'
import './Search.scss'
import Mark from 'mark.js'

import SearchResults from './SearchResults'
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

  function handleStatusChange() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="search">
      <label className="search_box search_box__open">
        <input
          type="text"
          placeholder="Search for a term or phrase..."
          name="search"
          autoFocus={true}
          className="search_box__input"
          onChange={useCallback((e) => {
            const res = idx.search(`${e.target.value}`)
            const searchRes = res.map((i) => index[i.ref])
            let target = e.target.value.split('')
            let show = false
            const match = target
              .sort(function (a, b) {
                return a[0] - b[0]
              })
              .slice()

            searchRes.forEach((node) => {
              const text = document.createElement('p')
              text.textContent = node.description

              //
              var ind = 0

              // Highlight
              const startOffset = match[0]
              const endOffset = match[match.length - 1]
              const range = document.createRange()
              const mark = document.createElement('mark')

              if (match.length > 0) {
                show = true
                var options = {}
                var instance = new Mark(text)
                instance.mark(e.target.value, options)
                var results = document.getElementById('results')
                results.appendChild(text)
                console.log(searchRes)
                setResults(searchRes)
              } else if (match.length === 0 ) {
                setResults([])
                //results.removeChild(text)
                console.log(show)
              }

              // range.setStart(li, startOffset);
              // range.setEnd(li, endOffset);

              // mark.dataset.rangeStart = startOffset
              // mark.dataset.rangeEnd = endOffset

              // range.surroundContents(mark);
              // ind =  match[0] + match[1]
              console.log(searchRes)
              console.log(match.length)
            })
          }, [])}
        />
        <input
          type="text"
          className="search_box__submit"
          onChange={useCallback((e) => {
            const res = idx.search(`${e.target.value}`)
            const searchRes = res.map((i) => index[i.ref])
            setResults(searchRes)
          }, [])}
        />
        <span className="search_box__icon" onClick={handleStatusChange}>
          <SearchIcon />
        </span>
      </label>
      <div className="results" id="results">
        {/* {results.map((prod) => (
        <div key={prod.title}>
          <h3>{prod.title}</h3>
          <p>{prod.description}</p>
         
        <p>{prod.metadataWhitelist}</p>
        </div>
      ))
      } */}
      </div>
    </div>
  )
}

export default SearchBar
