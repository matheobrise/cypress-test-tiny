/// <reference types="cypress" />
describe('page', () => {
  it('does not work', () => {
    cy.visit('https://app.recruitee.com/login')
  })

  it('works', () => {
    cy.visit('https://auth.recruitee.com/?redirect=https%3A%2F%2Fapp.recruitee.com%2Flogin')
  })


})
