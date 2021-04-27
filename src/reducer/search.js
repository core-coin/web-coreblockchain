import { docs as originDocsList } from '../sidebar'
import lunr from 'lunr'
import metadataParser from 'markdown-yaml-metadata-parser'
import { fillSearchIndex } from './actions'
import { trim } from 'lodash'

let ID = () => {
  return Math.floor(Math.random() * 10000000000)
}

let splitDocs = docs => {
  let result = []
  docs.forEach(item => {
    let textBlocks = item.content.split(/\n##\s/).map(i => trim(i))
      textBlocks.forEach(block => {
        if (block.length == 0) {
          return
        }
        let description = block.split(/\n\n/)
        let title = description.shift().toLowerCase()
        result.push({
          title: title,
          description: description,
          link: item.link,
        })
      })
  })
  return result
}

let createSearchIndex = store => {
  let mainPromise = getAllDocs()
  mainPromise.then(docsList => {
    return docsList.map(item => {
      return metadataParser(item)
    })
  })
  .then(mdxList => {

    let contents = splitDocs(
      mdxList.map(md => {
        return {
          link: md.metadata.link,
          content: md.content,
        }})
    )

    let docs = contents.map(item => {
      let searchId = ID()
      return {
        ...item,
        ref: searchId,
        metadataWhitelist: searchId,
      }
    })

    let docsMap = {}

    docs.forEach(item => {
      docsMap[item.ref] = item
    })

    let idx = lunr(function () {
      this.ref('ref')
      this.field('title')
      this.field('description')
      this.field('link')

      this.metadataWhitelist = ['position']

       docs.forEach(item => {
        this.add(item)
      })
    })
    return {docsMap, idx}
  })
  .then(idx => {
    store.dispatch(fillSearchIndex(idx))
  })
}

let getAllDocs = () => {
  return Promise.all(originDocsList.map(item => {
    return fetch(item.link).then(res => res.text())
  }))
}

export default createSearchIndex