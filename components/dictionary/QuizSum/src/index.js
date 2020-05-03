import React, {useState} from 'react'
// import PropTypes from 'prop-types'

export default function DictionaryQuizSum() {
  const generateRandomNumber = () => Math.floor(Math.random() * 10)
  const [firstOperand, setFirstOperand] = useState(generateRandomNumber())
  const [secondOperand, setSecondOperand] = useState(generateRandomNumber())
  const [result, setResult] = useState('')
  const [hits, setHits] = useState(0)
  const [fails, setFails] = useState(0)
  const newQuizResolve = () => {
    // eslint-disable-next-line prettier/prettier
    console.log(`Resolve   ${result} ${firstOperand} ${secondOperand}`)
    if (parseInt(firstOperand) + parseInt(secondOperand) === parseInt(result)) {
      setHits(hits + 1)
    } else {
      setFails(fails + 1)
    }
  }
  const newQuizSum = () => {
    setSecondOperand(generateRandomNumber())
    setFirstOperand(generateRandomNumber())
    setResult('')
  }
  const resultChanged = event => {
    setResult(event.target.value)
  }

  const showSum = () => {
    return (
      <div className="kik-Sum-Container">
        <div className="kik-Fail">
          <span>Errades</span>
          <span> {fails} </span>
        </div>
        <div className="kik-Hit">
          <span> Encerts </span>
          <span> {hits} </span>
        </div>
        <div className="kik-Sum-first-operand">
          <span> {firstOperand} </span>
        </div>
        <div className="kik-Sum-operand">
          <span> + </span>
        </div>
        <div className="kik-Sum-second-operand">
          <span> {secondOperand} </span>
        </div>
        <div>
          <input
            className="kik-Sum-result"
            onChange={resultChanged}
            size="3"
            value={result}
            type="number"
          />
        </div>
        <div className="kik-buttons-container">
          <div className="kik-Sum-resolve">
            <button onClick={newQuizResolve}>Resol</button>
          </div>
          <div className="kik-Sum-new-quiz">
            <button onClick={newQuizSum}>Nova Suma</button>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="kikilo-DictionaryQuizSum">
      <h1>DictionaryQuizSum</h1>
      {showSum()}
    </div>
  )
}

DictionaryQuizSum.displayName = 'DictionaryQuizSum'
DictionaryQuizSum.propTypes = {}
