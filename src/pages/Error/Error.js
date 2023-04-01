import React from 'react'
import { Helmet } from 'react-helmet'
import { AnimatedTitle } from '../../utils/AnimatedTitle'

function Error() {
  return (
    <div>
      <Helmet><title>{AnimatedTitle} RAZIUR | error</title></Helmet>

      404 not found</div>
  )
}

export default Error