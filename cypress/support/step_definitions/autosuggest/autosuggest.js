import generateAutoPhrases from 'picklejs/cypress';

import {setElementSelector, setScreens,} from 'picklejs/common/variables';

import selectors from '../selectors.json';
import screens from '../screens.json';

generateAutoPhrases();
setScreens(screens);
setElementSelector(selectors);

import {elInEl, r, string} from 'picklejs/common/regexBuilder'
import {elDoesNotExist} from 'picklejs/cypress/cypressFunctions';


Given('I am at the home page', () => cy.openBranch('/'));

Then('there should not be any suggestions', () => {
    cy.get('.react-autosuggest__container').then(($el) => {
        expect($el).to.not.have.class('react-autosuggest__container--open');
    });
});

Then('there should be some suggestions', () => {
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
});