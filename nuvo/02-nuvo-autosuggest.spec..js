/// <reference types="Cypress" />

function closeHeader() {
  return cy.get('#header #search-input').clear().then(() => {
    cy.get('#header .close').click()
      .then(() => {
        cy.get('#header').then($el => {
          expect($el).to.not.have.class('search-mode');
        });
      });
  });
}

context('Header Menu', () => {
  before(() => {
    cy.openBranch();
  });

  it('should find input and search for BBC', () => {

    // when I click search
    cy.get('#header')
      .find('#search-input')
      .focus()
      .type('BB')
      .wait(4000)

      // then I should not see any suggestions
      .then(() => {
        cy.get('.react-autosuggest__container').then(($el) => {
          expect($el).to.not.have.class('react-autosuggest__container--open');
        });
      })


      // when I search for "BBC"
      .get('#search-input')
      .focus()
      .type('C')
      .then(() => {
        // then I should see channels
        cy.get('.react-autosuggest__container--open').then(() => {
          // Videos
          cy.get('.react-autosuggest__section-container--first li')
            .its('length')
            .should('be.gt', 0);
          // Channel
          cy.get('.react-autosuggest__section-container:not(.react-autosuggest__section-container--first) li')
            .its('length')
            .should('be.gt', 0);
        })
      }).then(() => {
        closeHeader();
      });
  });

  it('should search for channels only', () => {
    cy.get('#header')
    .find('#search-input')
    .focus()
    .get('#header .selectbox .sb-selected')
    .click()
    .get('#header .selectbox .sb-option:last-child')
    .click()
    .then(() => {
      cy.get('#header')
      .find('#search-input')
      .focus()
      .type('BBC')
      .get('.react-autosuggest__container--open').then(() => {
        cy.get('.react-autosuggest__section-container')
        .its('length')
        .should('be', 1);

        cy.get('.react-autosuggest__section-container li')
          .its('length')
          .should('be.greaterThan', 0);
      });
    })
    .then(closeHeader);
  });
})

context('Search within', () => {
  before(() => {
    cy.openBranch();
  });

  it('should navigate to search page', () => {
    cy.get('#header')
      .find('#search-input')
      .focus()
      .type('BBC')
      .get('.react-autosuggest__container--open')
      .then(() => {

      });
  });
});