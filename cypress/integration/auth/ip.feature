Feature: Basic Authentication
  Scenario: public ip
    Given my ip address is public
    When I go to the home page
    And open session details
    Then I should see "Public Pages Customer (Pharos)" in the "Institution Name"
    And I should see "US" in the "Country Code"

  Scenario: internal ip
    Given my ip address is internal
    When I go to the home page
    And open session details
    Then I should see "PHAROS TREEHOUSE (INTERNAL)" in the "Institution Name"
    Then I should see "US" in the "Country Code"

