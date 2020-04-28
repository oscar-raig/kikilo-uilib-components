import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('DictionaryQuizPairWords', () => {
  it('Render', () => {
    render(<DictionaryQuizPairWords />)
    expect(true).to.be.eql(false)
  })
})
