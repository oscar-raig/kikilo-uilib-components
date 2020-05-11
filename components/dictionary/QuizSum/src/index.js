import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '@s-ui/react-context'
import {Thumbup, Thumbdown} from '@s-ui/react-icons'
import AtomButton from '@s-ui/react-atom-button'
import '@s-ui/react-atom-button/lib/index.scss'
import AtomIcon, {
  ATOM_ICON_COLORS,
  ATOM_ICON_SIZES
} from '@s-ui/react-atom-icon'
import '@s-ui/react-atom-icon/lib/index.scss'
export default function DictionaryQuizSum({digits = 1, title = 'SUM_NUMBERS'}) {
  const Icon = (
    <AtomIcon color={ATOM_ICON_COLORS.accent} size="large">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    </AtomIcon>
  )

  const {i18n} = useContext(Context)
  const generateRandomNumber = () =>
    Math.floor(Math.random() * Math.pow(10, digits))
  const [firstOperand, setFirstOperand] = useState(generateRandomNumber())
  const [secondOperand, setSecondOperand] = useState(generateRandomNumber())
  const [result, setResult] = useState('')
  const [hits, setHits] = useState(0)
  const [fails, setFails] = useState(0)
  const newQuizResolve = () => {
    // eslint-disable-next-line prettier/prettier
    console.log(`Resolve v1    ${result} ${firstOperand} ${secondOperand}`)
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
        <h1>{i18n.t(title)}</h1>
        <div className="kik-Fail">
          <Thumbdown fillColor="red" />
          <span> {fails} </span>
        </div>
        <div className="kik-Hit">
          <Thumbup fillColor="green" />
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
            size="4"
            value={result}
            type="number"
          />
        </div>
        <div className="kik-buttons-container">
          <div className="kik-Sum-new-quiz">
            <AtomButton className="kik-Sum-button" onClick={newQuizSum}>
              Nova Suma
            </AtomButton>
          </div>
          <div className="kik-Sum-resolve">
            <AtomButton
              size={ATOM_ICON_SIZES.extraLarge}
              className="kik-Sum-button"
              onClick={newQuizResolve}
              rightIcon={Icon}
            >
              Resol
            </AtomButton>
          </div>
        </div>
      </div>
    )
  }
  return <div className="kikilo-DictionaryQuizSum">{showSum()}</div>
}

DictionaryQuizSum.displayName = 'DictionaryQuizSum'
DictionaryQuizSum.propTypes = {
  digits: PropTypes.number,
  title: PropTypes.string
}
