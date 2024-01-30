import { createReducer } from 'redux-act'

import { setLanguage, fillSearchIndex, setMarkdownFiles } from './actions'


const initialState = {
    language: 'en',
    blockTime: 7,
    algorithm: 'RandomY',
    difficulty: 333,
    searchIndex: null,
    searchDocs: null,
    markdownFiles: null,
}

const handleSetLanguage = (state, newLanguage) => {
    if(state.language !== newLanguage) {
        return {
          ...state,
          language: newLanguage,
        }
    }
}

const handleFillSearchIndex = (state, {docsMap, idx}) => ({
  ...state,
  searchIndex: idx,
  searchDocs: docsMap,
})

const handleSetMarkdownFiles = (state,  mdFiles) => ({
  ...state,
  markdownFiles: mdFiles,
})

const actions ={
    [setLanguage]: handleSetLanguage,
    [fillSearchIndex]: handleFillSearchIndex,
    [setMarkdownFiles]: handleSetMarkdownFiles,
}

const reducer = createReducer(actions, initialState)

export default reducer
