import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import Store from './store'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'

const store = Store()

export default class App extends PureComponent {
    render(){
        return(
            <Provider store={store}>
                <Layout>
                    <PageContainer />
                </Layout>
            </Provider>
        )
    }
}
