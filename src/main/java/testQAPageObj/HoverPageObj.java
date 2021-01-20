package testQAPageObj;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HoverPageObj {

    public WebDriver webDriver;

    public HoverPageObj (WebDriver webDriver){
        PageFactory.initElements(webDriver,this);
        this.webDriver = webDriver;
    }

    @FindBy(id = "toolTipButton")
    private WebElement hoverBtn;

    @FindBy(id = "toolTipTextField")
    private WebElement hoverFld;

    public void getHoverBtn(){
        Actions actions = new Actions(webDriver);
        actions.moveToElement(hoverBtn).build().perform();
    }

    public void getHoverFld(){
        Actions actions = new Actions(webDriver);
        actions.moveToElement(hoverFld).build().perform();
    }




}
