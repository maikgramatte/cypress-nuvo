/// <reference types="Cypress" />

context('Basic Auth', () => {
  it('should be Public Pages Customer (Pharos)/ca', () => {
    // given my ip is public
    // when I go to the home page
    cy.openBranch('/', Cypress.env('ipPublic'), 'ca');

    // then I should be logged in as "Public Pages Customer (Pharos)"
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
    // given my ip is internal
    // when I go to the home page
    cy.openBranch('/', Cypress.env('ipInternal'), 'us');

    // then I should be logged in as "PHAROS TREEHOUSE (INTERNAL)"
    cy.get('#header').wait(1000).then(() => {
      cy.get('body')
        .type('{esc}')
        .type('{esc}')
        .type('{esc}')
        .get('.modal-window')
        .then(() => {
          cy.get('dd[data-id="institutionName"]').should('have.text', 'PHAROS TREEHOUSE (INTERNAL)');
          cy.get('dd[data-id="ipCountryCode"]').should('have.text', 'us');
        });
    });
  });
})
