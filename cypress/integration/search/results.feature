Feature: Results
  Background:
    Given I searched for "peace"

  Scenario: facets should load after manually activated
    When I click on "search filters"
    Then I should see 6 "filter options"


