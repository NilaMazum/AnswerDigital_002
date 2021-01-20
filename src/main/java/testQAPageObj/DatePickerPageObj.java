package testQAPageObj;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DatePickerPageObj {

    public WebDriver webDriver;

    public DatePickerPageObj(WebDriver webDriver){
        PageFactory.initElements(webDriver,this);
        this.webDriver = webDriver;
    }

    @FindBy(id = "datePickerMonthYearInput")
    private WebElement datePickerFld;

    @FindBy(xpath = "//button[contains(text(),'Next Month')]")
    private WebElement selectNextMonth;

    public void setDatePickerFld() {
        datePickerFld.click();
    }

    public void setSelectNextMonth() {
        selectNextMonth.click();
        DateFormat dateFormat = new SimpleDateFormat("dd");
        Date date = new Date();
        String date1= dateFormat.format(date);
        System.out.println(date1);
        WebElement selectDateAndMonth = webDriver.findElement(By.xpath("//div[contains(text(),'"+date1+"')]"));
        selectDateAndMonth.click();
    }

    public void getVal() {
        String actualUrl = webDriver.getCurrentUrl();
        String expectedUrl = "https://demoqa.com/date-picker";
        Assert.assertEquals(expectedUrl,actualUrl);
    }
}
