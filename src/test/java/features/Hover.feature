Feature: Hovering feature

  Scenario: Validate the hovering over the button and field
    Given I am on the tool page
    When I hover the mouse over the "Hover Me To See" button
    Then I hover the mouse over the "Hover Me To See" field
