import React, { Fragment } from 'react'

import Header from '../components/guest/partials/Header'
import Footer from '../components/guest/partials/Footer'
import Main from '../components/guest/partials/Main'

const GuestContainer = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default GuestContainer
