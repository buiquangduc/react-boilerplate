import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withLocalize } from 'react-localize-redux'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage } from '../../../stores/lang/actions'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: 0,
    minWidth: 120
  }
}))

const LanguageSwitcher = ({ languages, setActiveLanguage }) => {
  const classes = useStyles()
  const lang = useSelector(state => state.lang)
  const dispatch = useDispatch()

  const _handleLanguageChange = (e) => {
    const newLang = e.target.value

    setActiveLanguage(newLang)
    dispatch(changeLanguage(newLang))
  }

  return (
    <div className="language-switcher">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={lang}
          onChange={_handleLanguageChange}
        >
          { languages.map(language => (
            <MenuItem value={language.code} key={language.code}>
              <span className="language-code">{language.name}</span> <img className="language-flag" src={language.flag}/>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

LanguageSwitcher.propTypes = {
  translate: PropTypes.func.isRequired,
  languages: PropTypes.array,
  setActiveLanguage: PropTypes.func.isRequired,
  lightTheme: PropTypes.bool
}

export default withLocalize(LanguageSwitcher)
