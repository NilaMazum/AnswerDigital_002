$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Alert.feature");
formatter.feature({
  "line": 1,
  "name": "Alert Page",
  "description": "",
  "id": "alert-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3981201370,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the Alert feature",
  "description": "",
  "id": "alert-page;validate-the-alert-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Alert page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the second clickMe button and I see alert appear in 5 second",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I accept the alert by clicking ok button",
  "keyword": "Then "
});
formatter.match({
  "location": "AlertSteps.i_am_on_the_Alert_page()"
});
formatter.result({
  "duration": 1242704302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 63
    }
  ],
  "location": "AlertSteps.i_click_on_the_second_clickMe_button_and_I_see_alert_appear_in_second(int)"
});
formatter.result({
  "duration": 5080363448,
  "status": "passed"
});
formatter.match({
  "location": "AlertSteps.i_accept_the_alert_by_clicking_ok_button()"
});
formatter.result({
  "duration": 28286591,
  "status": "passed"
});
formatter.after({
  "duration": 966657925,
  "status": "passed"
});
formatter.uri("src/test/java/features/DatePicker.feature");
formatter.feature({
  "line": 1,
  "name": "Date Picker",
  "description": "",
  "id": "date-picker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1738019213,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Use the date picker to set the date to 1 month in the future",
  "description": "",
  "id": "date-picker;use-the-date-picker-to-set-the-date-to-1-month-in-the-future",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Date Picker page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I select a date using date picker from ‘Select Date’ field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I select one month from today’s date",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I land on the previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "DatePickerSteps.i_am_on_the_Date_Picker_page()"
});
formatter.result({
  "duration": 1128316123,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerSteps.i_select_a_date_using_date_picker_from_Select_Date_field()"
});
formatter.result({
  "duration": 216981965,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerSteps.i_select_one_month_from_today_s_date()"
});
formatter.result({
  "duration": 189682857,
  "status": "passed"
});
formatter.match({
  "location": "DatePickerSteps.i_land_on_the_previous_page()"
});
formatter.result({
  "duration": 14149352,
  "status": "passed"
});
formatter.after({
  "duration": 837216617,
  "status": "passed"
});
formatter.uri("src/test/java/features/DragAnsDrop.feature");
formatter.feature({
  "line": 1,
  "name": "Drag and Drop feature",
  "description": "",
  "id": "drag-and-drop-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1765703815,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the Drag and Drop feature",
  "description": "",
  "id": "drag-and-drop-feature;validate-the-drag-and-drop-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Droppable page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the Drag me",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Drag to Drop me box",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I see a success message \"Dropped\"",
  "keyword": "Then "
});
formatter.match({
  "location": "DragAndDropSteps.i_am_on_the_Droppable_page()"
});
formatter.result({
  "duration": 958869383,
  "status": "passed"
});
formatter.match({
  "location": "DragAndDropSteps.i_click_on_the_Drag_me()"
});
formatter.result({
  "duration": 94624657,
  "status": "passed"
});
formatter.match({
  "location": "DragAndDropSteps.i_Drag_to_Drop_me_box()"
});
formatter.result({
  "duration": 295560834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dropped",
      "offset": 25
    }
  ],
  "location": "DragAndDropSteps.i_see_a_success_message(String)"
});
formatter.result({
  "duration": 70804896,
  "status": "passed"
});
formatter.after({
  "duration": 752404392,
  "status": "passed"
});
formatter.uri("src/test/java/features/Hover.feature");
formatter.feature({
  "line": 1,
  "name": "Hovering feature",
  "description": "",
  "id": "hovering-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1782558874,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the hovering over the button and field",
  "description": "",
  "id": "hovering-feature;validate-the-hovering-over-the-button-and-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the tool page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I hover the mouse over the \"Hover Me To See\" button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I hover the mouse over the \"Hover Me To See\" field",
  "keyword": "Then "
});
formatter.match({
  "location": "HoveringSteps.i_am_on_the_tool_page()"
});
formatter.result({
  "duration": 943880019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hover Me To See",
      "offset": 28
    }
  ],
  "location": "HoveringSteps.i_hover_the_mouse_over_the_button(String)"
});
formatter.result({
  "duration": 142583014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hover Me To See",
      "offset": 28
    }
  ],
  "location": "HoveringSteps.i_hover_the_mouse_over_the_field(String)"
});
formatter.result({
  "duration": 167884638,
  "status": "passed"
});
formatter.after({
  "duration": 791664228,
  "status": "passed"
});
formatter.uri("src/test/java/features/ModalClosing.feature");
formatter.feature({
  "line": 1,
  "name": "Close the small modal",
  "description": "",
  "id": "close-the-small-modal",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1874520501,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the close modal feature",
  "description": "",
  "id": "close-the-small-modal;validate-the-close-modal-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the Modal Dial Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the small modal button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see a popup od \"Small Modal\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on the close tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I am back on the previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "ModalCloseSteps.i_am_on_the_Modal_Dial_Page()"
});
formatter.result({
  "duration": 1086257737,
  "status": "passed"
});
formatter.match({
  "location": "ModalCloseSteps.i_click_on_the_small_modal_button()"
});
formatter.result({
  "duration": 135948481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Small Modal",
      "offset": 18
    }
  ],
  "location": "ModalCloseSteps.i_see_a_popup_od(String)"
});
formatter.result({
  "duration": 54714178,
  "status": "passed"
});
formatter.match({
  "location": "ModalCloseSteps.i_click_on_the_close_tab()"
});
formatter.result({
  "duration": 90409574,
  "status": "passed"
});
formatter.match({
  "location": "ModalCloseSteps.i_am_back_on_the_previous_page()"
});
formatter.result({
  "duration": 245275,
  "status": "passed"
});
formatter.after({
  "duration": 784370035,
  "status": "passed"
});
formatter.uri("src/test/java/features/StudentRegForm.feature");
formatter.feature({
  "line": 1,
  "name": "Student Registration Form",
  "description": "",
  "id": "student-registration-form",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1758077732,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentRegistrationSteps.i_am_on_the_registration_page()"
});
formatter.result({
  "duration": 1098963423,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Validate the Registration form with valid credentials",
  "description": "",
  "id": "student-registration-form;validate-the-registration-form-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I enter valid first name, last name and email",
  "rows": [
    {
      "cells": [
        "Gina",
        "Smith",
        "gina_smith@yoodle.com"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the gender selection radio button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter valid Mobile number \"7880870355\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I on the DoB field",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select month, year and date from the dropdown the calender",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Maths\" in the subject field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select the Hobbies check box and select Music",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click on the choose file tab to select a photo",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter valid address in the current address field \"161 Super Nagar, Vivek Street\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select state from the dropdown \"NCR\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I see a success message popup with information displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentRegistrationSteps.i_enter_valid_first_name_last_name_and_email(DataTable)"
});
formatter.result({
  "duration": 427611824,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_click_on_the_gender_selection_radio_button()"
});
formatter.result({
  "duration": 113053440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7880870355",
      "offset": 29
    }
  ],
  "location": "StudentRegistrationSteps.i_enter_valid_Mobile_number(String)"
});
formatter.result({
  "duration": 140883472,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_on_the_DoB_field()"
});
formatter.result({
  "duration": 241195858,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_select_month_year_and_date_from_the_dropdown_the_calender()"
});
formatter.result({
  "duration": 381534626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maths",
      "offset": 9
    }
  ],
  "location": "StudentRegistrationSteps.i_enter_in_the_subject_field(String)"
});
formatter.result({
  "duration": 309917472,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_select_the_Music_check_box()"
});
formatter.result({
  "duration": 173624302,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.click_on_the_choose_file_tab_to_select_a_photo()"
});
formatter.result({
  "duration": 88889018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "161 Super Nagar, Vivek Street",
      "offset": 52
    }
  ],
  "location": "StudentRegistrationSteps.i_enter_valid_address_in_the_current_address_field(String)"
});
formatter.result({
  "duration": 182643007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NCR",
      "offset": 34
    }
  ],
  "location": "StudentRegistrationSteps.i_select_state_from_the_dropdown(String)"
});
formatter.result({
  "duration": 150333527,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_click_the_submit_button()"
});
formatter.result({
  "duration": 83040057,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_see_a_success_message_popup_with_information_displayed()"
});
formatter.result({
  "duration": 33787004,
  "status": "passed"
});
formatter.after({
  "duration": 926777950,
  "status": "passed"
});
formatter.before({
  "duration": 1732201683,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentRegistrationSteps.i_am_on_the_registration_page()"
});
formatter.result({
  "duration": 1113865142,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate the Registration form with no credentials",
  "description": "",
  "id": "student-registration-form;validate-the-registration-form-with-no-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentRegistrationSteps.i_click_the_submit_button()"
});
formatter.result({
  "duration": 72601527,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_stay_on_the_same_page()"
});
formatter.result({
  "duration": 109482502,
  "status": "passed"
});
formatter.after({
  "duration": 765405249,
  "status": "passed"
});
formatter.before({
  "duration": 1714741616,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I am on the registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentRegistrationSteps.i_am_on_the_registration_page()"
});
formatter.result({
  "duration": 1114324436,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Validate the Registration form with invalid credentials",
  "description": "",
  "id": "student-registration-form;validate-the-registration-form-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I enter valid first name, last name and email",
  "rows": [
    {
      "cells": [
        "s",
        "h",
        "gina_smith123@yoodle"
      ],
      "line": 28
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I click on the gender selection radio button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid Mobile number \"355\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I on the DoB field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select month, year and date from the dropdown the calender",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter \"Maths\" in the subject field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select the Hobbies check box and select Music",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter valid address in the current address field \"161wefw ef Super Nagar, Vivek wdwdStreet\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select state from the dropdown \"NCR\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I stay on the same page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentRegistrationSteps.i_enter_valid_first_name_last_name_and_email(DataTable)"
});
formatter.result({
  "duration": 387784766,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_click_on_the_gender_selection_radio_button()"
});
formatter.result({
  "duration": 108177874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "355",
      "offset": 29
    }
  ],
  "location": "StudentRegistrationSteps.i_enter_valid_Mobile_number(String)"
});
formatter.result({
  "duration": 111978874,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_on_the_DoB_field()"
});
formatter.result({
  "duration": 210485237,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_select_month_year_and_date_from_the_dropdown_the_calender()"
});
formatter.result({
  "duration": 342745870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Maths",
      "offset": 9
    }
  ],
  "location": "StudentRegistrationSteps.i_enter_in_the_subject_field(String)"
});
formatter.result({
  "duration": 285797191,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_select_the_Music_check_box()"
});
formatter.result({
  "duration": 172456569,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "161wefw ef Super Nagar, Vivek wdwdStreet",
      "offset": 52
    }
  ],
  "location": "StudentRegistrationSteps.i_enter_valid_address_in_the_current_address_field(String)"
});
formatter.result({
  "duration": 178603683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NCR",
      "offset": 34
    }
  ],
  "location": "StudentRegistrationSteps.i_select_state_from_the_dropdown(String)"
});
formatter.result({
  "duration": 145186500,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_click_the_submit_button()"
});
formatter.result({
  "duration": 70622155,
  "status": "passed"
});
formatter.match({
  "location": "StudentRegistrationSteps.i_stay_on_the_same_page()"
});
formatter.result({
  "duration": 87048597,
  "status": "passed"
});
formatter.after({
  "duration": 692946718,
  "status": "passed"
});
});