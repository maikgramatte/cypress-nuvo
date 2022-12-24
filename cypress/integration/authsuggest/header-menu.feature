Feature: Header Menu
  Background:
    Given I am at the home page

  Scenario: should find input and search for BBC
    When I type "BB" into "search"
    And I wait 1 seconds
    Then there should not be any suggestions
    When I type "C" into "search"
    Then there should be some suggestions
