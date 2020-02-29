Feature: No Results
  Scenario: should show message, with no-results & recover
    Given I searched for "noresultskeyword"
    Then I should see "0 Videos" in "search count"
    When I replace the contents of "search" with "peace{enter}"
    And I wait 5 seconds
    Then "search count" should not have "0 Videos"

