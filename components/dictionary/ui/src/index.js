import React from 'react'
import DictionaryContainer from './DictionaryContainer/DictionaryContainer.js'
import DictionaryServices from '../../services/src'
// import PropTypes from 'prop-types'

export default function DictionaryUi() {
  return (
    <DictionaryServices>
      {service => <DictionaryContainer service={service} />}
    </DictionaryServices>
  )
}

DictionaryUi.displayName = 'DictionaryUi'
DictionaryUi.propTypes = {}
