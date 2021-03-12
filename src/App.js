import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom'
import Store, { history } from './store'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'
import LanguagePageContainer from './containers/LanguagePageContainer/LanguagePageContainer'
import LanguageTranslatePageContainer from './containers/LanguageTranslatePageContainer/LanguageTranslatePageContainer'
import GetStartedContainer from './containers/GetStartedContainer/GetStartedContainer'
import DevelopersContainer from './containers/DevelopersContainer'
import CommunityContainer from './containers/CommunityContainer'
import SearchContainer from './containers/SearchContainer'
import OverviewContainer from './containers/OverviewContainer'

const store = Store()

export default class App extends PureComponent {

  render() {
    
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route exact path='/' component={PageContainer} /> 
              <Route path='/language' component={LanguagePageContainer} />
              <Route path='/language-program' component={LanguageTranslatePageContainer} />
              <Route path='/get-started' component={GetStartedContainer} />
              <Route path='/developers' component={DevelopersContainer} />
              <Route path='/community' component={CommunityContainer} />
              <Route path='/search' component={SearchContainer} />
              <Route path='/overview' component={OverviewContainer} />
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    )
  }
}
