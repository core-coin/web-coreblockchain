import React, { PureComponent } from 'react'
import { string, object } from 'prop-types'
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Index, Configure } from 'react-instantsearch-dom';
import AutoComplete from './AutoComplete';

import '../Overview/Overview.scss'

export default class SearchPage extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.translate.DEVELOPERS.tabs[0].tabName,
        }
    }
    static propTypes = {
        language: string,
        translate: object,
    }
    


    render(){

        
        const searchClient = algoliasearch(
            'latency',
            '6be0576ff61c053d5f9a3225e2a90f76'
          )


        return(
            <div className='developers'>
                <Container>
                    <Row>
                      <Col className='content'>
                      <h3>
                          Search Results
                          <InstantSearch indexName="instant_search" searchClient={searchClient}>
                            <h1>React InstantSearch - Autocomplete with multiple indices</h1>

                            <Configure hitsPerPage={3} />
                            <AutoComplete
                            onSuggestionSelected={(event, { suggestion, suggestionValue }) => {
                                console.log('Suggestion:', suggestion);
                                console.log('Suggestion value:', suggestionValue);
                            }}
                            />

                            <Index indexName="instant_search" />
                            <Index indexName="instant_search_price_desc" />
                        </InstantSearch>
                          
                      </h3>
                      </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}