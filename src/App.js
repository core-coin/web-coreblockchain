import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import Store, { history } from './store'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'
import LanguagePageContainer from './containers/LanguagePageContainer/LanguagePageContainer'
import GetStartedContainer from './containers/GetStartedContainer/GetStartedContainer'
import DevelopersContainer from './containers/DevelopersContainer'

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
                            <Route path='/get-started'>
                                <GetStartedContainer/>
                            </Route>
                            <Route path='/developers'>
                                <DevelopersContainer/>
                            </Route>
                        </Switch>
                    </Layout>
                </ConnectedRouter>
            </Provider>
        )
    }
}
