/// <reference types="Cypress" />

context('Basic Auth', () => {
  it('should be Public Pages Customer (Pharos)/ca', () => {
    cy.openBranch('/', Cypress.env('ipPublic'), 'ca');

    cy.get('#header').wait(1000).then(() => {
      cy.get('body')
        .type('{esc}')
        .type('{esc}')
        .type('{esc}')
        .get('.modal-window')
        .then(() => {
          cy.get('dd[data-id="institutionName"]').should('have.text', 'Public Pages Customer (Pharos)');
          cy.get('dd[data-id="ipCountryCode"]').should('have.text', 'ca');
        });
    });
  });

  it('should be PHAROS TREEHOUSE (INTERNAL)/us', () => {
    cy.openBranch('/', Cypress.env('ipInternal'), 'us');
    cy.get('#header').wait(1000).then(() => {
      cy.get('body')
        .type('{esc}')
        .type('{esc}')
        .type('{esc}')
        .get('.modal-window')
        .then(() => {
          cy.get('dd[data-id="ipCountryCode"]').should('have.text', 'us');
          cy.get('dd[data-id="institutionName"]').should('have.text', 'PHAROS TREEHOUSE (INTERNAL)');
        });
    });
  });
})
