describe('homo.com', () => {
  it('suckk dick kyle', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('Get All Users').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('.opblock-control__btn').contains('Execute').click()
  })
  it('suckk dick jorge', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('Read User').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="user_id"]').type('5')
    cy.get('.opblock-control__btn').contains('Execute').click()
  })
  it('ball sack', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('User Change Password').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="user_id"]').type('5')
    cy.get('input[placeholder="password"]').type('jorgebayot123')
    cy.get('.opblock-control__btn').contains('Execute').click()
  })
  it('ball sack ni kyle', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('Delete Account').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="account_id"]').type('56')
    cy.get('.opblock-control__btn').contains('Execute').click()
  })

})