import { createReducer } from 'redux-act'
import { Cmd, loop } from 'redux-loop'
import { goBack } from 'connected-react-router'

import LocalizedStrings from '../locale'

import { setLanguage, fillSearchIndex, setMarkdownFiles } from './actions'


const initialState = {
    language: null,
    translate: LocalizedStrings,
    blockTime: 200,
    algorithm: 'RandomY',
    difficulty: 333,
    searchIndex: null,
    searchDocs: null,
    markdownFiles: null,
}

const handleSetLanguage = (state, newLanguage) => {
    if(state.language !== newLanguage) {
        const translate = state.translate
        translate.setLanguage(newLanguage)
        return loop (
            {
                ...state,
                language: newLanguage,
                translate: translate,
            },
            Cmd.action(goBack())
        )
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
