import { demologin } from "../../support/commands.js";

describe('Accounts Overview' , () => {
    const userid = 'adminaaa'
    const userpassword = 'admin123'

    beforeEach(() => {
        demologin(userid, userpassword)
    })

    it('As an admin, I should be able to transfer', () => {
        cy.contains('a', 'Transfer Funds').click()

        cy.url().should('include', '/transfer')

        cy.get('#amount').type('2000')

        cy.get('.button')
        .eq(0)
        .click()

        cy.get('.title')
        .should('contain.text', 'ParaSoft Demo Website')

        // cy.get('.title')
        // .should('contain.text', 'Transfer Complete!')

        cy.contains('a', 'Log Out').click()
    })

})