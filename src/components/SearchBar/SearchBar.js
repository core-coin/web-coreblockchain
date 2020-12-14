import React, { useState } from 'react'
import lunr from 'lunr'
import { useLunr } from 'react-lunr'
import { Formik, Form, Field } from 'formik'

const docs = {
  title: 'Twelfth-Night',
  body: 'If music be the food of love, play on: Give me excess of it…',
  author: 'William Shakespeare',
  id: '1'
}

const index = lunr(function() {
    this.field('title')
    this.field('body')
  
    this.add(docs)
  })

const store = {
  1: { id: 1, title: 'Document 1' },
  2: { id: 2, title: 'Document 2' },
  3: { id: 3, title: 'Document 3' },
}
 
const SearchBar = () => {
  const [query, setQuery] = useState(null)
  const results = useLunr(query, index, store)
 
  return (
    <>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field name='query' />
        </Form>
      </Formik>
      <h1>Results</h1>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </>
  )

}

export default SearchBar