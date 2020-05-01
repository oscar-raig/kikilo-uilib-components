import React from 'react'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'
import {render} from '@testing-library/react'

chai.use(chaiDOM)

describe('DictionaryServices', () => {
  it('Render', () => {
    render(<DictionaryServices />)
    expect(true).to.be.eql(false)
  })
})
