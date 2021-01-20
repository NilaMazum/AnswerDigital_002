package testQAPageObj;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ModalClosePageObj {

    public WebDriver webDriver;

    public ModalClosePageObj(WebDriver webDriver){
        PageFactory.initElements(webDriver,this);
        this.webDriver = webDriver;
    }

    @FindBy(id = "showSmallModal")
    private WebElement modalBtn;

    @FindBy(id = "example-modal-sizes-title-sm")
    private WebElement smallModalDisplay;

    @FindBy(id = "closeSmallModal")
    private WebElement smallModalClose;

    public void setModalBtn() {
        modalBtn.click();
    }

    public void setSmallModalDisplay() {
        Assert.assertTrue(smallModalDisplay.isDisplayed());
    }

    public void setSmallModalClose() {
        smallModalClose.click();
    }

    public void getValidation() {
        String actualUrl = webDriver.getCurrentUrl();
        String expectedUrl = "https://demoqa.com/modal-dialogs";
        Assert.assertEquals(expectedUrl,actualUrl);
    }
}
