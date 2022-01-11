package be.odisee.sportnetic;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class InloggenStepdefs {

    private WebDriver driver;
    private JavascriptExecutor jsExecutor ;

    public void Init(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Efrem\\Documents\\Github\\SoftwareTesting\\Sportnetic-testen\\chromedriver.exe");
        driver = new ChromeDriver();
        jsExecutor = (JavascriptExecutor) driver;
    }


    @Given("^De gebruiker bevindt zich op de pagina waar hij zijn gegevens moet invullen om in te loggen$")
    public void deGebruikerBevindtZichOpDePaginaWaarHijZijnGegevensMoetInvullenOmInTeLoggen() {
        Init();
        driver.navigate().to("https://sportnetic-72e8e.web.app/login");
        // wacht tot de login pagina geladen is
        new WebDriverWait(driver, 10).until(ExpectedConditions
                .textToBePresentInElementLocated(By.tagName("body"), "LOGIN"));
    }

    @When("^De gebruiker voert zijn email adres \"([^\"]*)\" in$")
    public void deGebruikerVoertZijnEmailAdresIn(String email) throws Throwable {
        driver.findElement(By.name("email")).sendKeys(email);
    }

    @And("^zijn paswoord \"([^\"]*)\" invoert$")
    public void zijnPaswoordInvoert(String pwd) throws Throwable {
        driver.findElement(By.name("password")).sendKeys(pwd);
    }

    @And("^op de login button drukt$")
    public void opDeButtonDrukt() throws Throwable {
        driver.findElement(By.className("btn-login")).click();
    }

    @Then("^bevindt hij zich op de home pagina$")
    public void bevindtHijZichOpDeHomePagina() {
        // wacht tot de home pagina geladen is
        new WebDriverWait(driver, 10).until(ExpectedConditions
                .textToBePresentInElementLocated(By.tagName("body"), "Free Shipping on all orders"));
        String bodyText = driver.findElement(By.tagName("body")).getText();
        Assert.assertTrue("Did not find this text: Return Policy on home page ",bodyText.contains("Return Policy"));
    }

    @And("^is de gebruiker ingelogd$")
    public void isDeGebruikerIngelogd() {
        //Controleren of de variabel CurrentUser opgeslagen is in local storage
        String user = (String) jsExecutor.executeScript("return localStorage.getItem('CurrentUser')");
        System.out.println(user);
        Assert.assertNotNull("User is not logged in ", user);
        driver.close();

    }
}
