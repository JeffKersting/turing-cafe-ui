describe('Cafe main page', () => {
  it('Should be able to visit the cafe page', () => {
    cy.visit('http://localhost:3000/')
  })
  it('Should render with a form', () => {
    cy.get('ReservationForm')
  })
})
