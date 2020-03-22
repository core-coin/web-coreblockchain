import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import Store from './store'

import PageContainer from './containers/PageContainer/PageContainer'

const store = Store()

export default class App extends PureComponent {
    render(){
        return(
            <Provider store={store}>
                <PageContainer />
            </Provider>
        )
    }
}
