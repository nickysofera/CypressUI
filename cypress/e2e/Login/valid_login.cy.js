import { demologin } from "../../support/commands.js";

describe('Login functional', () => {
    const userid = 'adminaaa'
    const userpassword = 'admin123'

    beforeEach(() => {
        demologin(userid, userpassword)
    })

it('As an admin, I should be able to log in with a valid username and password.',() => {

    cy.url().should('include', '/overview')

})
})