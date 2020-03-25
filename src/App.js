import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Store from './store'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'

const store = Store()

export default class App extends PureComponent {
    render(){
        return(
            <Provider store={store}>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path='/'>
                                <PageContainer />
                            </Route>
                            <Route path='/language'>
                                <div>text</div>
                            </Route>
                        </Switch>
                    </Router>
                </Layout>
            </Provider>
        )
    }
}
