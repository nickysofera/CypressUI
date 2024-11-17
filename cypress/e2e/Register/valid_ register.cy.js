describe('Register functionality', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })


it('As an administrator, I should be able to register a new user successfully in the system ', ()=> {
    cy.contains('a', 'Register').click()

    cy.get('#customer\\.firstName')
    .type('admin')
    .should('have.value', 'admin')

    cy.get('#customer\\.lastName')
    .type('AAA')
    .should('have.value', 'AAA')

    cy.get('#customer\\.address\\.street')
    .type('Grogol Petamburan')
    .should('have.value', 'Grogol Petamburan')

    cy.get('#customer\\.address\\.city')
    .type('West Jakarta')
    .should('have.value', 'West Jakarta')

    cy.get('#customer\\.address\\.state')
    .type('Indonesia')
    .should('have.value', 'Indonesia')

    cy.get('#customer\\.address\\.zipCode')
    .type('12309')
    .should('have.value', '12309')

    cy.get('#customer\\.phoneNumber')
    .type('089123000111')
    .should('have.value', '089123000111')

    cy.get('#customer\\.ssn')
    .type('1233')
    .should('have.value', '1233')

    cy.get('#customer\\.username')
    .type('adminaaa')
    .should('have.value', 'adminaaa')

    cy.get('#customer\\.password')
    .type('admin123')

    cy.get('#repeatedPassword')
    .type('admin123')

    cy.get('[colspan="2"] > .button')
    .should('have.value', 'Register')
    .click()

    cy.on('window:confirm', (message) => {
        expect(message).to.include('Save address?')
        return true;
      })
      .then(() => {
        cy.get('#rightPanel > p').should('be.visible')
      })

      cy.get('#leftPanel > ul > :nth-child(8) > a')
      .click()

})
})


