import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import { withLocalize } from 'react-localize-redux'

const Footer = ({ translate }) => {
  return (
    <div className="footer">
      <Container className="footer-container">
        <p>{translate('copyright')}</p>
      </Container>
    </div>
  )
}

Footer.propTypes = {
  translate: PropTypes.func.isRequired
}

export default withLocalize(Footer)
