import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import Store, { history } from './store'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'
import LanguagePageContainer from './containers/LanguagePageContainer/LanguagePageContainer'

const store = Store()

export default class App extends PureComponent {
    render(){
        return(
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout>
                        <Switch>
                            <Route exact path='/'>
                                <PageContainer />
                            </Route>
                            <Route path='/language'>
                                <LanguagePageContainer/>
                            </Route>
                        </Switch>
                    </Layout>
                </ConnectedRouter>
            </Provider>
        )
    }
}
