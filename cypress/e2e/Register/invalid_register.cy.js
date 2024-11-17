const { generatedRandomArray, generatedRandomString } = require("../../support/utilities_array")

describe('Register functionality', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

it('As an admin, I should not able to register with empty mandatory fields ', ()=> {

    cy.contains('a', 'Register')
    .click()

    cy.get('[colspan="2"] > .button')
    .should('have.value', 'Register')
    .click()
  
    cy.get('.error').should('have.length.greaterThan', 0);
    cy.get('.error').each(($el) => {
        expect($el.text()).to.match(/is required/);
      });
})


it('As an admin, I should not be able to register with an already registered username.', ()=> {
    cy.contains('a', 'Register').click()

    cy.get('#customer\\.firstName')
    .type('John')
    .should('have.value', 'John')

    cy.get('#customer\\.lastName')
    .type('Terry')
    .should('have.value', 'Terry')

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

    cy.get(':nth-child(10) > [width="50%"]')
    .should('contains.text', 'This username already exists.')
})

it('As an admin, I should not be able to register if the password and confirm password do not match.', ()=> {
    cy.contains('a', 'Register').click()

    const randomValueArray = generatedRandomArray(10)
    const randomValueString = generatedRandomString(12)

    cy.get('#customer\\.firstName')
            .type(randomValueString)
            .should('have.value', randomValueString)

        cy.get('#customer\\.firstName').then(($input) => {
            expect($input.val()).to.equal(randomValueString); 
        })

        cy.get('#customer\\.lastName')
            .type(randomValueString)
            .should('have.value', randomValueString)

        cy.get('#customer\\.lastName').then(($input) => {
            assert.equal($input.val(), randomValueString, `Last name should be ${randomValueString}`); 
        })

        cy.get('#customer\\.address\\.street')
            .type(randomValueString)
            .should('have.value', randomValueString)

        cy.get('#customer\\.address\\.street').then(($input) => {
            expect($input.val()).to.contain(randomValueString);
        })

        cy.get('#customer\\.address\\.city')
            .type(randomValueString)
            .should('have.value', randomValueString)

        cy.get('#customer\\.address\\.state')
            .type(randomValueString)
            .should('have.value', randomValueString)

        cy.get('#customer\\.address\\.state').then(($input) => {
            expect($input.val()).to.equal(randomValueString);
        })

        cy.get('#customer\\.address\\.zipCode')
            .type(randomValueArray)
            .should('have.value', randomValueArray) 

        cy.get('#customer\\.address\\.zipCode').then(($input) => {
            assert.equal($input.val(), randomValueArray, `Zip code should be ${randomValueArray}`)
        })

        cy.get('#customer\\.phoneNumber')
            .type(randomValueArray)
            .should('have.value', randomValueArray)

        cy.get('#customer\\.phoneNumber').then(($input) => {
            expect($input.val()).to.equal(randomValueArray);
        })

        cy.get('#customer\\.ssn')
            .type(randomValueArray)
            .should('have.value', randomValueArray)

        cy.get('#customer\\.ssn').then(($input) => {
            assert.equal($input.val(), randomValueArray, `SSN should be ${randomValueArray}`)
        })

        cy.get('#customer\\.username')
            .type('adminabb')
            .should('have.value', 'adminabb')

        cy.get('#customer\\.username').then(($input) => {
            expect($input.val()).to.equal('adminabb')
        })

    cy.get('#customer\\.password')
    .type('admin123')

    cy.get('#repeatedPassword')
    .type('admin124')

    cy.get('[colspan="2"] > .button')
    .should('have.value', 'Register')
    .click()

    cy.get(':nth-child(12) > [width="50%"]')
    .should('contains.text', 'Passwords did not match')
})

})


