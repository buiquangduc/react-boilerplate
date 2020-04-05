import React from 'react'
import PropTypes from 'prop-types'
import { withLocalize } from 'react-localize-redux'
import logo from '../../../assets/images/logo.svg'

const Home = ({ translate }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{translate('thanks_text')}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate('learn_to_use')}
        </a>
      </header>
    </div>
  )
}

Home.propTypes = {
  translate: PropTypes.func.isRequired
}

export default withLocalize(Home)
