const { generatedRandomArray, generatedRandomString } = require('../../support/utilities_array.js')


describe('Register functionality', () => {
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    it('Verify register successfully', () => {
        const randomValueString = generatedRandomString(10)
        const randomValueArray = generatedRandomArray(12)

        cy.contains('a', 'Register').click()

        
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

        cy.get('#customer\\.password').type('admin123')
        cy.get('#repeatedPassword').type('admin123')

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