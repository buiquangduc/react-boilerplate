import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { withLocalize } from 'react-localize-redux'
import LanguageSwitcher from './LanguageSwitcher'

const Header = ({ translate }) => {
  return (
    <div className="header">
      <Container className="header-container">
        <div className="header-left">{translate('app_name')}</div>
        <div className="header-right">
          <LanguageSwitcher />
        </div>
      </Container>
    </div>
  )
}

Header.propTypes = {
  translate: PropTypes.func.isRequired
}

export default withLocalize(Header)
