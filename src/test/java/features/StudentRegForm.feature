Feature: Student Registration Form
Background:
  Given I am on the registration page

  Scenario: Validate the Registration form with valid credentials
    When I enter valid first name, last name and email
    | Gina | Smith | gina_smith@yoodle.com |
    And I click on the gender selection radio button
    And I enter valid Mobile number "7880870355"
    And I on the DoB field
    And I select month, year and date from the dropdown the calender
    And I enter "Maths" in the subject field
    And I select the Hobbies check box and select Music
    And click on the choose file tab to select a photo
    And I enter valid address in the current address field "161 Super Nagar, Vivek Street"
    And I select state from the dropdown "NCR"
    And I click the submit button
    Then I see a success message popup with information displayed


  Scenario: Validate the Registration form with no credentials
    And I click the submit button
    Then I stay on the same page


  Scenario: Validate the Registration form with invalid credentials
    When I enter valid first name, last name and email
      | s | h | gina_smith123@yoodle |
    And I click on the gender selection radio button
    And I enter valid Mobile number "355"
    And I on the DoB field
    And I select month, year and date from the dropdown the calender
    And I enter "Maths" in the subject field
    And I select the Hobbies check box and select Music
    And I enter valid address in the current address field "161wefw ef Super Nagar, Vivek wdwdStreet"
    And I select state from the dropdown "NCR"
    And I click the submit button
    Then I stay on the same page





