// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

// cy.openBranch();
// cy.openBranch('/watch/notfilm');
Cypress.Commands.add("openBranch", (path = '/', ip = Cypress.env('ipPublic'), cc = 'us') => {
  cy.visit(`${Cypress.env('branch')}${path}`);

  // clear storage
  window.sessionStorage.clear();
  window.localStorage.clear();

  window.localStorage.setItem('nuvo-test-country-code', cc);
  window.localStorage.setItem('nuvo-test-ip', ip);

  window.localStorage.setItem('REACT_APP_OVERWRITES', JSON.stringify({
    'app-qa-mode': 'dev',
    'accessibility-value': true,
    'accessibility-capture':  false,
  }));
});

//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
