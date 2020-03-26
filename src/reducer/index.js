import { createReducer } from 'redux-act'
import LocalizedStrings from 'react-localization'
import { Cmd, loop } from 'redux-loop'
import { useHistory } from 'react-router-dom'

import { LOCALIZED_STRINGS } from '../constants'

import { setLanguage } from './actions'


const initialState = {
    language: null,
    translate: new LocalizedStrings(LOCALIZED_STRINGS),
    blockTime: '13.60',
    networkHashrate: '143.1',
    difficulty: '0.00',
}

const getBack = () => {
    let history = useHistory()
    history.goBack()
}

const handleSetLanguage = (state, newLanguage) => {
    if(state.language != newLanguage) {
        const translate = state.translate
        translate.setLanguage(newLanguage)
        return loop (
            {
                ...state,
                language: newLanguage,
                translate: translate,
            },
            Cmd.run(getBack)
        )
    }
}

const actions ={
    [setLanguage]: handleSetLanguage,
}

const reducer = createReducer(actions, initialState)

export default reducer