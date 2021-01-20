package testQAPageObj;

import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DragAndDropPageObj {

    public WebDriver webDriver;

    public DragAndDropPageObj(WebDriver webDriver){
        PageFactory.initElements(webDriver,this);
        this.webDriver = webDriver;
    }

    @FindBy(id = "draggable")
    private WebElement dragMeTab;

    @FindBy(id = "droppable")
    private WebElement dropMeBox;

    @FindBy(xpath = "//p[contains(text(),'Dropped!')]")
    private WebElement validateText;


    public void setDragMeTab() {
       dragMeTab.click();
    }

    public void setDropMeBox(){
        Actions actions = new Actions(webDriver);
        actions.clickAndHold(dragMeTab).moveToElement(dropMeBox).release().build().perform();

    }

    public void getValidateText(){
        Assert.assertTrue(validateText.isDisplayed());
    }


}
