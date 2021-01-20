Feature: Alert Page

  Scenario: Validate the Alert feature
    Given I am on the Alert page
    When I click on the second clickMe button and I see alert appear in 5 second
    Then I accept the alert by clicking ok button
