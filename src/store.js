import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/index'

export default function configureStore(initialState) {

    const store = createStore(rootReducer, composeWithDevTools(
    ))

    return store
}