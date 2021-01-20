package testQAStepsDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testQAPageObj.DragAndDropPageObj;

public class DragAndDropSteps extends BaseSteps {

    DragAndDropPageObj dAndDPageObj = new DragAndDropPageObj(webDriver);

    @Given("^I am on the Droppable page$")
    public void i_am_on_the_Droppable_page(){
       goToUrl("https://demoqa.com/droppable");
    }

    @When("^I click on the Drag me$")
    public void i_click_on_the_Drag_me(){
        dAndDPageObj.setDragMeTab();
    }

    @When("^I Drag to Drop me box$")
    public void i_Drag_to_Drop_me_box(){
       dAndDPageObj.setDropMeBox();
    }

    @Then("^I see a success message \"(.*?)\"$")
    public void i_see_a_success_message(String arg1){
        dAndDPageObj.getValidateText();
    }

}
