import 'cypress-xpath';

export function login (username, password) {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    cy.xpath('//input[@name="username"]').type('Admin')

    cy.xpath('//input[@name="password"]').type('admin123')

    cy.get('.oxd-button').click()

   cy.url().should('include', '/dashboard')
  };


