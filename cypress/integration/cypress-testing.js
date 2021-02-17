describe('Cafe main page', () => {
  it('Should be able to visit the cafe page', () => {
    cy.visit('http://localhost:3000/')
  })

  it('Should render with a form and existing reservations', () => {
    cy.get('.resy-form form')
      .get('.resy-container .reservation-card')
  })

  it('Should render with all form elements', () => {
    cy.get('.resy-form')
      .get('#name')
      .get('#date')
      .get('#time')
      .get('#guests')
  })

  it('Should not allow users to submit without all input fields being filled', () => {
    cy.get('.resy-form')
      .get('#submit').should('be.disabled')
  })

  it('Should allow users to enter reservation details in the reservation form', () => {
    cy.get('.resy-form')
      .get('#name').type('Foo')
      .get('#date')
      .get('#time')
      .get('#guests')
  })
})
