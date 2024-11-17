import {login} from "../support/commands";

describe('Verify assign leave successful', () => {
beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    login('username', 'password')
}) 

it('should assign leave successfully', () => {
    cy.xpath('//button[@title="Assign Leave"]')
    .should('be.visible')
    .click()

    cy.url().should('include', '/assignLeave');

    cy.xpath('//input[@placeholder="Type for hints..."]')
    .type('Sara Howe')
    .should('contains', 'Sara Howe')
    .click({force: true})

    //cy.contains('.oxd-autocomplete-text-input--after', 'Sara Howe').click()

    cy.get('.oxd-select-text-input').click()
    cy.contains('.oxd-select-dropdown', 'CAN - FMLA').click()
    
    

})
})