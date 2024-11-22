import { demologin } from "../../support/commands.js";

describe('Open New Account', () => {
    const userid = "adminaaa"
    const userpassword = "admin123"

    beforeEach(() => {
        demologin (userid, userpassword)
    })

    it('As an admin, I should be able to Open New Account', () => {
        cy.contains('a', 'Open New Account').click()

        cy.url().should('include', '/openaccount')

        cy.get('#openAccountForm > .title')
        .should('have.text', 'Open New Account')

        cy.get('#type')
        .select(1)
        .find(':selected')
        .should('have.text', 'SAVINGS')

        // cy.get('#fromAccountId')
        // .select('14787')
        // .find(':selected')
        // .should('have.text', '14787')

        cy.get('.button')
        .eq(0)
        .click()

        cy.get('.title')
        .should('contain.text', 'ParaSoft Demo Website')

        // cy.get('#openAccountResult')
        // .should('contain.text', 'Congratulations, your account is now open')

        cy.contains('a', 'Log Out').click()
    })
})