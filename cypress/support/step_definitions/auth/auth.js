import generateAutoPhrases from 'picklejs/cypress';

import {setElementSelector, setScreens,} from 'picklejs/common/variables';

import selectors from '../selectors.json';
import screens from '../screens.json';

generateAutoPhrases();
setScreens(screens);
setElementSelector(selectors);

Given('my ip address is {word}', async function (value) {
    const ips = Cypress.env("ips");
    this.ip = value in ips ? ips[value] : value;
});

When('I go to the home page', function () {
    cy.openBranch('/', this.ip, this.cc);
});

When('(I )open session details', cy.openSessionDetails);
