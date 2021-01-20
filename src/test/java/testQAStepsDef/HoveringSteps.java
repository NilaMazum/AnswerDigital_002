package testQAStepsDef;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import testQAPageObj.HoverPageObj;

public class HoveringSteps extends BaseSteps {

    HoverPageObj hoverPageObj = new HoverPageObj(webDriver);

    @Given("^I am on the tool page$")
    public void i_am_on_the_tool_page(){
       goToUrl("https://demoqa.com/tool-tips");
    }

    @When("^I hover the mouse over the \"(.*?)\" button$")
    public void i_hover_the_mouse_over_the_button(String arg1){
       hoverPageObj.getHoverBtn();
    }

    @Then("^I hover the mouse over the \"(.*?)\" field$")
    public void i_hover_the_mouse_over_the_field(String arg1){
       hoverPageObj.getHoverFld();
    }


}
