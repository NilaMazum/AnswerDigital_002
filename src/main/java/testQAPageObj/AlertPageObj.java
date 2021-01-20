package testQAPageObj;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class AlertPageObj {

    public WebDriver webDriver;

    public AlertPageObj(WebDriver webDriver){
        PageFactory.initElements(webDriver,this);
        this.webDriver = webDriver; }

    @FindBy(id = "timerAlertButton")
    private WebElement clkMe;

    public void setClkMe()throws Exception {
        clkMe.click();
        Thread.sleep(5000);
    }

    public void clickAlertBtn(){
        webDriver.switchTo().alert().accept();
    }
}
