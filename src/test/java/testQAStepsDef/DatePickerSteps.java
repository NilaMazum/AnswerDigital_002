package testQAStepsDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testQAPageObj.DatePickerPageObj;

public class DatePickerSteps extends BaseSteps{

    DatePickerPageObj datePickerPageObj = new DatePickerPageObj(webDriver);

    @Given("^I am on the Date Picker page$")
    public void i_am_on_the_Date_Picker_page(){
        goToUrl("https://demoqa.com/date-picker");
    }

    @When("^I select a date using date picker from ‘Select Date’ field$")
    public void i_select_a_date_using_date_picker_from_Select_Date_field() {
        datePickerPageObj.setDatePickerFld();
    }

    @When("^I select one month from today’s date$")
    public void i_select_one_month_from_today_s_date() {
        datePickerPageObj.setSelectNextMonth();
    }

    @Then("^I land on the previous page$")
    public void i_land_on_the_previous_page(){
        datePickerPageObj.getVal();
    }
}
