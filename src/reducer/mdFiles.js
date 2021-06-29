import metadataParser from 'markdown-yaml-metadata-parser'
import { setMarkdownFiles } from './actions'

let createMarkdownIndex = store => {
  let mainPromise = getAllDocs()
  return mainPromise.then(docsList => {
    let files = {}
    docsList.forEach(item => {
      let file = metadataParser(item)
      files[file.metadata.link] = file
    })
    store.dispatch(setMarkdownFiles(files))
    return Object.values(files)
  })
}

let getAllDocs = () => {
  return Promise.all(originDocsList.map(item => {
    return fetch(item.link).then(res => res.text())
  }))
}

export default createMarkdownIndex
