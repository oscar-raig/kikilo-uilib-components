import React from 'react'
import PropTypes from 'prop-types'

export default function DictionaryQuizPairWords({wordPairs}) {
  const generateId = (value, key) => {
    return `${key}-${value}`
  }
  const renderWords = () => {
    let index = 0
    return Object.entries(wordPairs).map(([key, value]) => {
      index++
      return (
        <div
          className="kik-DictionaryQuizPairWords"
          key={generateId('container', index)}
          id={generateId('container', index)}
        >
          <div className="kik-element-key" key={`{key}-key`}>
            <span>{key}</span>
          </div>
          <div className="kik-element-input">
            <input id={generateId('input', index)} type="text" size="1" />
          </div>
          <div className="kik-element-index">
            <span>{index}</span>
          </div>
          <div className="kik-element-value">
            <span>{value}</span>
          </div>
        </div>
      )
    })
  }

  const resloveQuiz = () => {
    console.log('Just resolved!!!')  // eslint-disable-line
  }

  return (
    <div className="kik-DictionaryQuizPairWords-container">
      <h1>DictionaryQuizPairWords</h1>
      {renderWords()}
      <button className="button-result" onClick={resloveQuiz}>
        Resolts
      </button>
    </div>
  )
}

DictionaryQuizPairWords.displayName = 'DictionaryQuizPairWords'
DictionaryQuizPairWords.propTypes = {
  wordPairs: PropTypes.object.isRequired
}
