Feature: Filters
  Scenario: facets should load after manually activated
    Given I am at the search page
    And I wait 5 seconds
    When I click on "search filters"
    And I wait 5 seconds
    And I click on "subject filter"
    And I type "War"
    And I click the "current filter"
    And I wait 5 seconds

