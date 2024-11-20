describe('Login functional',() => {
    beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
})

it('As an admin, I should not be able to log in with an empty username and password', () => {
    cy.get('div.login').find('input.button[value="Log In"]')
    .click()

    cy.get('.error')
    .should('contains.text', 'Please enter a username and password')
    .and('be.visible')
})

it('As an admin, I should not be able to log in with an incorrect username and password', () => {
    cy.get('div.login').find('input.input[name="username"]')
    .type('adminzzx')

    cy.get('div.login').find('input.input[name="password"]')
    .type('adminxxz')

    cy.get('div.login').find('input.button[value="Log In"]')
    .click()

    cy.get('.error')
    .should('contains.text', 'The username and password could not be verified.')
    .and('be.visible')
})

it('As an admin, I should not be able to log in with an unregistered username and password', () => {
    cy.get('div.login').find('input.input[name="username"]')
    .type('adminzzz')

    cy.get('div.login').find('input.input[name="password"]')
    .type('adminxxx')

    cy.get('div.login').find('input.button[value="Log In"]')
    .click()

    cy.get('.error')
    .should('contains.text', 'The username and password could not be verified.')
    .and('be.visible')
})
})