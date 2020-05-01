import React from 'react'
import PropTypes from 'prop-types'

export default function DictionaryContainer() {
  // eslint-disable-next-line no-console
  console.log('Dictionary Container 1>> ')
  // eslint-disable-next-line no-console
  console.log('Dictionary Container<<')
  return (
    <div>
      <h1>hola</h1>
    </div>
  )
}

DictionaryContainer.displayName = 'DictionaryContainer'
DictionaryContainer.propTypes = {
  service: PropTypes.func.isRequired
}
