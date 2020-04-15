import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { install, combineReducers } from 'redux-loop'
import indexReducer from './reducer/index'

export const history = createBrowserHistory()

export default function configureStore(initialState) {

    const store = createStore(createRootReducer(history), composeWithDevTools(
        install(),
        applyMiddleware(
            routerMiddleware(history),
        ),
    ))

    return store
}

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    index: indexReducer,
})