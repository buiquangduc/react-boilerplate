import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { LocalizeProvider } from 'react-localize-redux'
import '../assets/sass/style.scss'
import { store, persistor } from '../stores/store'
import MultiLanguage from './MultiLanguage'

const AppContainer = () => {
  return (
    <LocalizeProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MultiLanguage />
        </PersistGate>
      </Provider>
    </LocalizeProvider>
  )
}

export default AppContainer
