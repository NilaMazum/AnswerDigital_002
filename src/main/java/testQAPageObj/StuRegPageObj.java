package testQAPageObj;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.awt.*;
import java.awt.event.KeyEvent;


public class StuRegPageObj {

    public WebDriver webDriver;

    public StuRegPageObj(WebDriver webDriver){
        PageFactory.initElements(webDriver,this);
        this.webDriver =webDriver; }

    @FindBy(id = "firstName")
    private WebElement fNameFld;

    @FindBy(id = "lastName")
    private WebElement lNameFld;

    @FindBy(id = "userEmail")
    private WebElement emailFld;

    @FindBy(css = "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.practice-form-wrapper form:nth-child(2) div.mt-2.row:nth-child(3) div.col-md-9.col-sm-12 div.custom-control.custom-radio.custom-control-inline:nth-child(2) > label.custom-control-label")
    private WebElement genderRadBtn;

    @FindBy(id = "userNumber")
    private WebElement mobileFld;

    @FindBy(id = "dateOfBirthInput")
    private WebElement dOBFld;

    @FindBy(xpath = "//select[@class=\"react-datepicker__month-select\"]/option[contains(text(),'June')]")
    private WebElement mOBFld;

    @FindBy(xpath = "//select[@class=\"react-datepicker__year-select\"]/option[contains(text(),'1990')]")
    private WebElement yOBFld;

    @FindBy(xpath = "//div[contains(text(),'15')]")
    private WebElement dateOBFld;

    @FindBy(xpath = "//body/div[@id='app']/div[1]/div[1]/div[2]/div[2]/div[1]/form[1]/div[6]/div[2]/div[1]/div[1]/div[1]")
    WebElement subFld;

    @FindBy(css = "div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div.practice-form-wrapper form:nth-child(2) div.mt-2.row:nth-child(7) div.col-md-9.col-sm-12 div.custom-control.custom-checkbox.custom-control-inline:nth-child(3) > label.custom-control-label")
    private WebElement hobbiesRadBtn;

    @FindBy(id = "uploadPicture")
    WebElement chooseFileTab;

    @FindBy(xpath = "//button[@id='submit']")
    WebElement submitBtn;

    @FindBy(id = "currentAddress")
    private WebElement addressFld;

    @FindBy(xpath = "//div[contains(text(),'Select State')]")
    private WebElement sltState;

    @FindBy(xpath = "//div[contains(text(),\"Thanks for submitting the form\")]")
    private WebElement submitForm;

    @FindBy(xpath = " //div[contains(text(),'Practice Form')]")
    private WebElement nonCredentialTest;

    public void getFName(String tableValue){
        fNameFld.sendKeys(tableValue); }

    public void getLName(String tableValue){
        lNameFld.sendKeys(tableValue); }

    public void getEmail(String tableValue){
        emailFld.sendKeys(tableValue); }

    public void clkGenderRadBtn(){
        genderRadBtn.click();
    }

    public void enterMobFld(String mobVal){
        mobileFld.sendKeys(mobVal);
    }

    public void clickDOBFld(){
        dOBFld.click();
    }

    public void setCalender(){
        mOBFld.click();
        yOBFld.click();
        dateOBFld.click();
    }

    public void clkSubFld(String subVal){
        Actions actions = new Actions(webDriver);
        actions.sendKeys(subFld,subVal).build().perform();
        actions.sendKeys(Keys.ENTER).build().perform();
    }

    public void setHobbiesRadBtn(){
        Actions actions = new Actions(webDriver);
        actions.moveToElement(hobbiesRadBtn).click().build().perform();
    }

    public void clkChoosePic() {
        chooseFileTab.sendKeys("//Users//Dwainila//Desktop//Nila_Picture.jpeg");
    }

    public void setAddFld(String addVal){
        addressFld.sendKeys(addVal);
    }

    public void clkSltState(){
        Actions actions = new Actions(webDriver);
        sltState.click();
        actions.sendKeys(Keys.ENTER).build().perform();
    }

    public void setSubmitBtn(){
        submitBtn.submit();
    }

    public void setSubmitForm(){
        System.out.println("find"+submitForm);
    }

    public void setNonCredentialTest(){
        nonCredentialTest.isDisplayed();
    }


}
