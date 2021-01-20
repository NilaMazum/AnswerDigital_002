Feature: Date Picker

  Scenario: Use the date picker to set the date to 1 month in the future
    Given I am on the Date Picker page
    When I select a date using date picker from ‘Select Date’ field
    And I select one month from today’s date
    Then I land on the previous page