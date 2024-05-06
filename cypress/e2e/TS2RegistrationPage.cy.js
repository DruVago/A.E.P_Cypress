describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://gregarious-lamington-46cf8d.netlify.app')
    cy.get('a').contains('Register here').click()
    cy.get('.p-inputtext.p-component.p-inputtext-sm.iemail').type('PadillaReag@gmail.com')
    cy.get('.p-inputtext.p-component.p-inputtext-sm.user').type('ReagPadilla')
    cy.get('.p-inputtext.p-component.p-inputtext-sm.pass').type('ReagGwapo69')
    cy.get('.p-button.p-component').click()
  })
})