/// <reference types="Cypress" />

context('Search filtering /  No results', () => {
  before(() => {
    cy.openBranch('/search?q=noresultskeyword');
  });

  it('should show message, with no-results & recover', () => {
    cy.get('.search-result-area')
    .get('.search-empty-result')
      .get('header .search-count').should('have.text', '0 Videos').then(() => {
        cy.get('#header').find('#search-input')
        .focus()
        .clear()
        .type('peace')
        .wait(200)
        .get('.search-within-button button.search-button').click().then(() => {
          cy.get('.c-item').then(() => {
            cy.get('header .search-count').should('not.have.text', '0 Videos');
          });
        });
      });
  });
})

context('Search loading with facets', () => {
  before(() => {
    cy.openBranch('/search?q=peace');
  });

  it('facets should load after manually activated', () => {
    cy.get('.search-result-area')
    .get('.c-item').then(() => {
      cy.get('.search-header-bar__filter').click().then(() => {
        cy.get('.search-header-bar').should('have.class', 'search-header-bar--active');

        cy.get('.facet-group').its('length').should('eq', 6).then(() => {
          cy.get('.search-header-bar__filter').click().then(() => {
            cy.get('.search-header-bar').should('not.have.class', 'search-header-bar--active');
          });
        });
      });
    });
  });
})

context('Search within facets (remote)', () => {
  before(() => {
    cy.openBranch('/search');
  });

  it('facets should load after manually activated', () => {
    cy.get('.search-result-area')
    .get('.c-item').then(() => {
      cy.get('.search-header-bar__filter').click().then(() => {
        cy.get('.facet-group')
          .first()
          .find('input')
          .focus()
          .type('war')
          .then(() => {
            cy.get('.facet-group__items__loading').then(() => {
              cy.get('.facet-group')
                .first().find('.facet-item-row').its('length').should('gt', 10).then(() => {
                  cy.get('.facet-group')
                    .first()
                    .find('.facet-item-row').first().should('contain', 'War');
                });
            });
          });
        });
      });
  });
});