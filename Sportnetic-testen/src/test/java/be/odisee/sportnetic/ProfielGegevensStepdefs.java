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

import java.util.List;
import java.util.concurrent.TimeUnit;

public class ProfielGegevensStepdefs {

    private WebDriver driver;

    public void Init(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Efrem\\Documents\\Github\\SoftwareTesting\\Sportnetic-testen\\chromedriver.exe");
        driver = new ChromeDriver();
        ClearBrowserCache();
    }


    @Given("^De gebruiker bevindt zich op de home pagina en is ingelogd$")
    public void deGebruikerBevindtZichOpDeHomePaginaEnIsIngelogd() {
        Init();
        Login();
    }
    private void Login(){
        driver.navigate().to("https://sportnetic-72e8e.web.app/login");
        // wacht tot de login pagina geladen is
        new WebDriverWait(driver, 10).until(ExpectedConditions
                .textToBePresentInElementLocated(By.tagName("body"), "LOGIN"));

        driver.findElement(By.name("email")).sendKeys("test@sportnetic.be");
        driver.findElement(By.name("password")).sendKeys("test12");
        driver.findElement(By.className("btn-login")).click();
        // wacht tot de home pagina geladen is
        new WebDriverWait(driver, 10).until(ExpectedConditions
                .textToBePresentInElementLocated(By.tagName("body"), "Free Shipping on all orders"));
        String bodyText = driver.findElement(By.tagName("body")).getText();
        Assert.assertTrue("Did not find this text: Return Policy on home page ",bodyText.contains("Return Policy"));
    }

    @When("^De gebruiker navigeert naar de \"([^\"]*)\" pagina$")
    public void deGebruikerNavigeertNaarDePaginaEnIsIngelogd(String paginaNaam) throws Throwable {
        driver.navigate().to("https://sportnetic-72e8e.web.app/"+paginaNaam);
        // wacht tot de profielpagina geladen is
        new WebDriverWait(driver, 10).until(ExpectedConditions
                .textToBePresentInElementLocated(By.tagName("body"), "Public Profile"));
    }

    @Then("^Bevindt hij zich in de profiel-pagina$")
    public void bevindtHijZichInDeProfielPagina() {
        String bodyText = driver.findElement(By.tagName("body")).getText();
        Assert.assertTrue("Did not find this text: Profile Heading ",bodyText.contains("Profile Heading"));
    }


    class LabelData {
        String label;
        String data;
    }

    @And("^worden zijn profielgegevens getoond$")
    public void wordenZijnProfielgegevensGetoond(List<LabelData> gegevens) {
        String bodyText = driver.findElement(By.tagName("body")).getText();
        for (LabelData ld: gegevens){
            String value = driver.findElement(By.name(ld.label)).getAttribute("value");
            Assert.assertEquals("Did not find label: " + "\n", value, ld.data);
        }
    }
    @Given("^De gebruiker bevindt zich op de profiel-pagina$")
    public void deGebruikerBevindtZichOpDeProfielPagina() {
        String bodyText = driver.findElement(By.tagName("body")).getText();
        Assert.assertTrue("Did not find this text: Profile Heading ",bodyText.contains("Profile Heading"));
    }

    @When("^de gebruiker zijn profile heading wijzigt naar \"([^\"]*)\"$")
    public void deGebruikerZijnProfileHeadingWijzigtNaar(String value) throws Throwable {
        driver.findElement(By.name("txtAbout")).clear();
        driver.findElement(By.name("txtAbout")).sendKeys(value);
    }

    @And("^op de update profile button drukt$")
    public void opDeUpdateProfileButtonDrukt() {
        driver.findElement(By.className("btnupdate")).click();
    }

    @Then("^krijgt de gebruiker een alert dat het succesvol is$")
    public void krijgtDeGebruikerEenAlertDatHetSuccesvolIs() {
        String text = driver.findElement(By.name("txtAbout")).getAttribute("value").trim();
        Assert.assertEquals("Could not update value", "Hallo dit is een test", text);
        driver.close();
    }

    public void ClearBrowserCache()
    {
        driver.manage().deleteAllCookies(); //delete all cookies
        driver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
    }
}
