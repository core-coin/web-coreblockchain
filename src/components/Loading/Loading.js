import React from 'react'

import './Loading.scss'

export const Loading = () => {
  return (
    <div className='loading'>
      <p>Loading...</p>
      <div className='loading_dots' />
    </div>
  )
}

export default Loading