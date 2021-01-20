Feature: Drag and Drop feature

  Scenario: Validate the Drag and Drop feature
    Given I am on the Droppable page
    When I click on the Drag me
    And I Drag to Drop me box
    Then I see a success message "Dropped"