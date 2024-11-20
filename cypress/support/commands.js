import 'cypress-xpath';

// export function login (username, password) {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

//     cy.xpath('//input[@name="username"]').type('Admin')

//     cy.xpath('//input[@name="password"]').type('admin123')

//     cy.get('.oxd-button').click()

//    cy.url().should('include', '/dashboard')
//   };


export function demologin (userid, userpassword) {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    
    cy.get('div.login').find('input.input[name="username"]')
    .type(userid)

    cy.get('div.login').find('input.input[name="password"]')
    .type(userpassword)

    cy.get('div.login').find('input.button[value="Log In"]')
    .click()

    cy.url().should('include', '/overview')

}