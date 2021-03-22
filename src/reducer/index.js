import { createReducer } from 'redux-act'
import { Cmd, loop } from 'redux-loop'
import { goBack } from 'connected-react-router'

import LocalizedStrings from '../locale'

import { setLanguage } from './actions'


const initialState = {
    language: null,
    translate: LocalizedStrings,
    blockTime: 200,
    algorithm: 'RandomY',
    difficulty: 333,
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

const actions ={
    [setLanguage]: handleSetLanguage,
}

const reducer = createReducer(actions, initialState)

export default reducer
