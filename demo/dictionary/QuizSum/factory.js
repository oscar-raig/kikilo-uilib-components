import Rosetta from '@s-ui/i18n'
import Polyglot from '@s-ui/i18n/lib/adapters/polyglot'

const DEFAULT_CULTURE = 'ca-ES'
const DEFAULT_CURRENCY = 'EUR'

const listOfWords = {
  'es-ES': {
    SUM_NUMBERS: 'Suma los dos números'
  },
  'ca-ES': {
    SUM_NUMBERS: 'Suma els dos nombres'
  }
}

const languages = {
  toJSON: () => listOfWords
}

const LanguageUseCase = {
  execute: culture => Promise.resolve().then(() => languages)
}

const RealEstate = {
  get: useCase => LanguageUseCase
}

export default () =>
  RealEstate.get('languages_i18n_use_case')
    .execute({culture: window.sessionStorage.actualContext || DEFAULT_CULTURE})
    .then(languages => {
      const i18n = new Rosetta({adapter: new Polyglot()})
      i18n.languages = languages.toJSON()
      i18n.culture = DEFAULT_CULTURE
      i18n.currency = DEFAULT_CURRENCY

      return i18n
    })
