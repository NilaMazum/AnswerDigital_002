package testQAStepsDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testQAPageObj.AlertPageObj;

public class AlertSteps extends BaseSteps{

    AlertPageObj alertPageObj = new AlertPageObj(webDriver);

    @Given("^I am on the Alert page$")
    public void i_am_on_the_Alert_page(){
        goToUrl("https://demoqa.com/alerts");
    }

    @When("^I click on the second clickMe button and I see alert appear in (\\d+) second$")
    public void i_click_on_the_second_clickMe_button_and_I_see_alert_appear_in_second(int arg1) throws Exception {
        alertPageObj.setClkMe();
    }

    @Then("^I accept the alert by clicking ok button$")
    public void i_accept_the_alert_by_clicking_ok_button(){
        alertPageObj.clickAlertBtn();
    }

}
