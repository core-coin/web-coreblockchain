import { createReducer } from 'redux-act'

// import {} from './actions'

const initialState = {
    blockTime: '13.60',
    networkHashrate: '143.1',
    difficulty: '0.00',
}


const actions ={}

const reducer = createReducer(actions, initialState)

export default reducer