describe('Visitor Route API', () => {
  it('It gets all visitors booking Info', () => {
    cy.visit('http://127.0.0.1:8000/docs#/')
    cy.get('.opblock-summary-description').contains('Get All Visitors Booking').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('.opblock-control__btn').contains('Execute').click()
  })
  it('It creates a visitors transaction', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('Create Visitor Transaction').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="visitor_First_name"]').type('George')
    cy.get('input[placeholder="visitor_Last_name"]').type('Capangit')
    cy.get('input[placeholder="purpose"]').type('Cashier')
    cy.get('input[placeholder="date_of_visit"]').type('2024-04-15')
    cy.get('input[placeholder="time_of_visit"]').type('11:00am')
    cy.get('.opblock-control__btn').contains('Execute').click()
  })
  it('It deletes a visitors Info', () => {
    cy.visit('http://127.0.0.1:8000/docs')
    cy.get('.opblock-summary-description').contains('Delete Visitor Info').click()
    cy.get('.try-out__btn').contains('Try it out').click()
    cy.get('input[placeholder="visitor_id"]').type('8')
    cy.get('.opblock-control__btn').contains('Execute').click()

  })
})