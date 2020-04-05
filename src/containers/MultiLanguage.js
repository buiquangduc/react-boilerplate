import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'
import { renderToStaticMarkup } from 'react-dom/server'
import { withLocalize } from 'react-localize-redux'
import en from '../translations/en'
import vi from '../translations/vi'
import history from '../history'
import Loading from '../components/common/Loading'
import PageContainer from './Page'
import viFlag from '../assets/images/vi-flag.png'
import enFlag from '../assets/images/en-flag.png'

const MultiLanguage = ({ initialize, addTranslationForLanguage }) => {
  const [loadingLanguage, setLoadingLanguage] = useState(true)
  const lang = useSelector(state => state.lang)

  useEffect(() => {
    initialize({
      languages: [
        { name: 'EN', code: 'en', flag: enFlag },
        { name: 'VI', code: 'vi', flag: viFlag }
      ],
      options: {
        renderToStaticMarkup,
        defaultLanguage: lang,
        onMissingTranslation: () => ''
      }
    })

    addTranslationForLanguage(en, 'en')
    addTranslationForLanguage(vi, 'vi')

    setLoadingLanguage(false)
  }, [lang])

  return loadingLanguage
    ? <Loading />
    : (
      <Router history={history}>
        <Switch>
          <Route path="/" component={PageContainer} />
        </Switch>
      </Router>
    )
}

MultiLanguage.propTypes = {
  initialize: PropTypes.func.isRequired,
  addTranslationForLanguage: PropTypes.func.isRequired
}

export default withLocalize(MultiLanguage)
