import i18nFactory from './factory'

export default () =>
  i18nFactory().then(i18n => {
    return {
      default: {
        browser: {
          isMobile: true
        },
        i18n: {
          t: i18n.t.bind(i18n),
          c: i18n.c.bind(i18n),
          n: i18n.n.bind(i18n),
          f: i18n.f.bind(i18n)
        }
      }
    }
  })
