package testQAStepsDef;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testQAPageObj.StuRegPageObj;

import java.awt.*;
import java.util.List;

public class StudentRegistrationSteps extends BaseSteps{

    StuRegPageObj stuRegPageObj =new StuRegPageObj(webDriver);

    @Given("^I am on the registration page$")
    public void i_am_on_the_registration_page(){
        goToUrl("https://demoqa.com/automation-practice-form");
    }

    @When("^I enter valid first name, last name and email$")
    public void i_enter_valid_first_name_last_name_and_email(DataTable tableValue){

        List<List<String>>list = tableValue.raw();
        String firstName = list.get(0).get(0);
        String lastName = list.get(0).get(1);
        String email = list.get(0).get(2);
        stuRegPageObj.getFName(firstName);
        stuRegPageObj.getLName(lastName);
        stuRegPageObj.getEmail(email);
    }

    @When("^I click on the gender selection radio button$")
    public void i_click_on_the_gender_selection_radio_button(){
        stuRegPageObj.clkGenderRadBtn();
    }

    @When("^I enter valid Mobile number \"(.*?)\"$")
    public void i_enter_valid_Mobile_number(String mobVal){
        stuRegPageObj.enterMobFld(mobVal);
    }
    
    @When("^I on the DoB field$")
    public void i_on_the_DoB_field(){
        stuRegPageObj.clickDOBFld();
    }

    @When("^I select month, year and date from the dropdown the calender$")
    public void i_select_month_year_and_date_from_the_dropdown_the_calender(){
        stuRegPageObj.setCalender();
    }

    @When("^I enter \"(.*?)\" in the subject field$")
    public void i_enter_in_the_subject_field(String subVal)  {
     stuRegPageObj.clkSubFld(subVal);
    }

    @When("^I select the Hobbies check box and select Music$")
    public void i_select_the_Music_check_box(){
        stuRegPageObj.setHobbiesRadBtn();
        wait(5);
    }

    @When("^click on the choose file tab to select a photo$")
    public void click_on_the_choose_file_tab_to_select_a_photo() {
        stuRegPageObj.clkChoosePic();
    }

    @When("^I enter valid address in the current address field \"(.*?)\"$")
    public void i_enter_valid_address_in_the_current_address_field(String addVal){
        stuRegPageObj.setAddFld(addVal);
    }

    @When("^I select state from the dropdown \"(.*?)\"$")
    public void i_select_state_from_the_dropdown(String arg1){
        stuRegPageObj.clkSltState();
    }

    @When("^I click the submit button$")
    public void i_click_the_submit_button(){
        stuRegPageObj.setSubmitBtn();
        wait(5);
    }

    @Then("^I see a success message popup with information displayed$")
    public void i_see_a_success_message_popup_with_information_displayed(){
        stuRegPageObj.setSubmitForm();
    }

    @Then("^I stay on the same page$")
    public void i_stay_on_the_same_page() {
    stuRegPageObj.setNonCredentialTest();
    }

}
