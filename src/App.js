import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import Store, { history } from './store'
import CreateSearchIndex from './reducer/search'
import CreateMarkdownIndex from './reducer/mdFiles'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'
import LanguagePageContainer from './containers/LanguagePageContainer/LanguagePageContainer'
import LanguageTranslatePageContainer from './containers/LanguageTranslatePageContainer/LanguageTranslatePageContainer'
import GetStartedContainer from './containers/GetStartedContainer/GetStartedContainer'
import DevelopersContainer from './containers/DevelopersContainer'
import OverviewContainer from './containers/OverviewContainer'
import CommunityContainer from './containers/CommunityContainer'
import EnterprisesContainer from './containers/EnterprisesContainer'
import LearnContainer from './containers/LearnContainer'
import WithLanguageHoc from './containers/withLanguageHoc'

const store = Store()
let mdFilesPromise = CreateMarkdownIndex(store)
CreateSearchIndex(store, mdFilesPromise)


export default class App extends PureComponent {

  render() {

    let lang = store.getState().index.language

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route path='/:lang/language' component={WithLanguageHoc(LanguagePageContainer)} />
              <Route path='/:lang/language-program' component={WithLanguageHoc(LanguageTranslatePageContainer)} />
              <Route path='/:lang/get-started' component={WithLanguageHoc(GetStartedContainer)} />
              <Route path='/:lang/developers' component={WithLanguageHoc(DevelopersContainer)} />
              <Route path='/:lang/community' component={WithLanguageHoc(CommunityContainer)} />
              <Route path='/:lang/learn' component={WithLanguageHoc(LearnContainer)} />
              <Route path='/:lang/enterprises' component={WithLanguageHoc(EnterprisesContainer)} />
              <Route path='/:lang/*' component={WithLanguageHoc(OverviewContainer)}/>
              <Route
                exact
                path="/:lang/" component={WithLanguageHoc(PageContainer)}
              />
              <Redirect to={lang}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    )
  }
}
