import PropTypes from 'prop-types'

export default function DictionaryServices({childrens}) {
  // eslint-disable-next-line no-console
  console.log('DictionaryServices ' + childrens)
  // eslint-disable-next-line no-console
  const service = () => console.log('service has been injected now')
  // const service = 'el meu servei '
  return service && childrens(service)
}

DictionaryServices.displayName = 'DictionaryServices'
DictionaryServices.propTypes = {
  childrens: PropTypes.func.isRequired
}
