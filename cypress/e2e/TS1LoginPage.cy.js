describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://gregarious-lamington-46cf8d.netlify.app')
    cy.get('.email').type("admin")
    cy.get('.pass').type("password")
    cy.get('.p-button.p-component').click()
  })

})