describe('Landing Page', () => {

    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

  it('Verify that authentication result in a failed login', () => {
    

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Adm')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin12')

    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('Verify that authentication results in a successful login', () => {

    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

    cy.get('.oxd-button').click()

    cy.url().should("include", "/dashboard")
  })
})