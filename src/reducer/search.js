import { docs as originDocsList } from '../sidebar'
import lunr from 'lunr'
import metadataParser from 'markdown-yaml-metadata-parser'
import { fillSearchIndex } from './actions'

let ID = () => {
  return Math.floor(Math.random() * 10000000000)
}

let createSearchIndex = store => {
  let mainPromise = getAllDocs()
  mainPromise.then(docsList => {
    return docsList.map(item => {
      return metadataParser(item)
    })
  })
  .then(mdxList => {

    let docs = mdxList.map(md => {
      let searchId = ID()
      return {
      title: md.metadata.title.toLowerCase(),
      description: md.metadata.description,
      keyword: md.metadata.keyword,
      link: md.metadata.link,
      ref: searchId,
      content: md.content,
      metadataWhitelist: searchId,
    }})

    let docsMap = {}

    docs.forEach(item => {
      docsMap[item.ref] = item
    })

    let idx = lunr(function () {
      this.ref('ref')
      this.field('title')
      this.field('description')
      this.field('keyword')
      this.field('link')
      this.field('content')

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