package testQAStepsDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testQAPageObj.ModalClosePageObj;

public class ModalCloseSteps extends BaseSteps {

    ModalClosePageObj modPageObj = new ModalClosePageObj(webDriver);

    @Given("^I am on the Modal Dial Page$")
    public void i_am_on_the_Modal_Dial_Page() {
        goToUrl("https://demoqa.com/modal-dialogs");
    }

    @When("^I click on the small modal button$")
    public void i_click_on_the_small_modal_button() {
        modPageObj.setModalBtn();
    }

    @When("^I see a popup od \"(.*?)\"$")
    public void i_see_a_popup_od(String arg1) {
        modPageObj.setSmallModalDisplay();
    }

    @When("^I click on the close tab$")
    public void i_click_on_the_close_tab() {
        modPageObj.setSmallModalClose();
    }

    @Then("^I am back on the previous page$")
    public void i_am_back_on_the_previous_page() {
        
    }

}
