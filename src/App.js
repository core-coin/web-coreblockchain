import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import Store, { history } from './store'
import createSearchIndex from './reducer/search'
import createMarkdownIndex from './reducer/mdFiles'

import Layout from './components/Layout'

import PageContainer from './containers/PageContainer/PageContainer'
import LanguagePageContainer from './containers/LanguagePageContainer/LanguagePageContainer'
import LanguageTranslatePageContainer from './containers/LanguageTranslatePageContainer/LanguageTranslatePageContainer'
import GetStartedContainer from './containers/GetStartedContainer/GetStartedContainer'
import DevelopersContainer from './containers/DevelopersContainer'
import SearchContainer from './containers/SearchContainer'
import OverviewContainer from './containers/OverviewContainer'
import CommunityContainer from './containers/CommunityContainer'
import withLanguageHoc from './containers/withLanguageHoc'

const store = Store()
let mdFilesPromise = createMarkdownIndex(store)
createSearchIndex(store, mdFilesPromise)


export default class App extends PureComponent {

  render() {

    let lang = store.getState().index.language

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Switch>
              <Route path='/:lang/language' component={withLanguageHoc(LanguagePageContainer)} />
              <Route path='/:lang/language-program' component={withLanguageHoc(LanguageTranslatePageContainer)} />
              <Route path='/:lang/get-started' component={withLanguageHoc(GetStartedContainer)} />
              <Route path='/:lang/developers' component={withLanguageHoc(DevelopersContainer)} />
              <Route path='/:lang/search' component={withLanguageHoc(SearchContainer)} />
              <Route path='/:lang/community' component={withLanguageHoc(CommunityContainer)} />
              <Route path='/:lang/*' component={withLanguageHoc(OverviewContainer)}/>
              <Route
                exact
                path="/:lang/" component={withLanguageHoc(PageContainer)}
              />
              <Redirect to={lang}/>
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    )
  }
}
