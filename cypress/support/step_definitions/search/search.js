import generateAutoPhrases from 'picklejs/cypress';

import {setElementSelector, setScreens,} from 'picklejs/common/variables';
import {elInEl, r, string} from 'picklejs/common/regexBuilder'
import {getNormalized} from 'picklejs/cypress/cypressFunctions';

import selectors from '../selectors.json';
import screens from '../screens.json';

setScreens(screens);
setElementSelector(selectors);

generateAutoPhrases();

Given('I am at the search page', function (term) {
    cy.openBranch(`/search`, this.ip, this.cc);
});

Given('I searched for {string}', function (term) {
    cy.openBranch(`/search?q=${term}`, this.ip, this.cc);
});

Then(`{string} should not have {string}`, (ele, text) => {
    getNormalized(ele, {singular:true}).should('not.have.text', text)
});

Then('I type {string}', value => cy.get('*:focus').type(value, {delay: 10}));
