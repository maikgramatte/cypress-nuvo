== Cypress custom environment properties ==

Create a file named `cypress.*.json` like `cypress.master.json` and change the paramaters like you want. Please check default cypress.json from time to time, as maybe paramaters are getting added.

Calling `yarn test --config-file cypress.*.json` will use this configuration file.

`
{
  "defaultCommandTimeout": 6000,
  "chromeWebSecurity": false,
  "pageLoadTimeout": 30000,
  "blacklistHosts": [
    "*google-analytics.com",
    "*consent.truste.com"
  ],
  "env": {
    "branch": "https://suhltu8v95.execute-api.us-east-1.amazonaws.com/dev",
    "ipPublic": "12.12.12.12",
    "ipInternal": "50.202.243.2"
  }
}
`