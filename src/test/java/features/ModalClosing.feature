Feature: Close the small modal

  Scenario: Validate the close modal feature
    Given I am on the Modal Dial Page
    When I click on the small modal button
    And I see a popup od "Small Modal"
    And I click on the close tab
    Then I am back on the previous page