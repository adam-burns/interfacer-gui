/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
// @ts-ignore
Cypress.Commands.add('login', () => {
    const attrs = "authName authId eddsa_public_key eddsa_key authUsername seed authEmail eddsa".split(" ")
    for (const attr of attrs) {
        cy.setLocalStorage(attr, Cypress.env(attr))
    }
})

Cypress.Commands.add('checkLinks', () => {
    cy.get("a:not([href*='mailto:'])").each(($el) => {
        const href = $el.prop('href')
        cy.request(href).its('status').should('eq', 200)
    })
});

// Prevent TypeScript from reading file as legacy script
export { }
