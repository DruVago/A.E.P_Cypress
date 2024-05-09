describe('Guards Route API', () => {
  it('It gets all guards Info', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('Get All Guards').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('.opblock-control__btn').contains('Execute').click()
  })

})