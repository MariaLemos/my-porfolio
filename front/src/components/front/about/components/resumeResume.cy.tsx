import React from 'react'
import Resume from './resume'

describe('<Resume />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Resume />)
  })
})