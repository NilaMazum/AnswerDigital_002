import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import testQAStepsDef.BaseSteps;

public class Hooks {
    @Before
    public void startWith(){
        System.out.println("@Before start of the test");
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        BaseSteps.setWebDriver(driver);
    }

    @After
    public void tearDown(){
        System.out.println("At the End");
        TakesScreenshot takesScreenshot = ((TakesScreenshot)BaseSteps.getWebDriver());
        final byte [] screenShot = takesScreenshot.getScreenshotAs(OutputType.BYTES);
        BaseSteps.getWebDriver().quit();
    }
}
