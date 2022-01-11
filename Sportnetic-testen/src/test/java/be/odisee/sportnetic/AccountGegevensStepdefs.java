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
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class AccountGegevensStepdefs {

    private WebDriver driver;
    private JavascriptExecutor jsExecutor;


    public void Init(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Efrem\\Documents\\Github\\SoftwareTesting\\Sportnetic-testen\\chromedriver.exe");
        driver = new ChromeDriver();
        jsExecutor = (JavascriptExecutor) driver;
    }

    @Given("^De gebruiker is ingelogd$")
    public void deGebruikerIsIngelogd() {
        Init();
        //login voor accountgegevens te bekijken en wijzigen
        Login();
    }

    @When("^Gebruiker navigeert naar de \"([^\"]*)\" pagina$")
    public void gebruikerNavigeertNaarDePagina(String accountpagina) throws Throwable {
        driver.navigate().to("https://sportnetic-72e8e.web.app/" + accountpagina);
        // wacht tot de accountpagina geladen is
        new WebDriverWait(driver, 10).until(ExpectedConditions
                .textToBePresentInElementLocated(By.tagName("body"), "Reset password"));
    }

    @Then("^Bevindt hij zich in de account-pagina$")
    public void bevindtHijZichInDeAccountPagina() {
        //bekijkt of de btnupdate de text "Update Account" bevat
        String bodyText = driver.findElement(By.className("btnupdate")).getText();
        Assert.assertTrue("Did not find this text: Update Account ",bodyText.contains("Update Account"));
    }

    @And("^worden zijn gegevens van zijn account getoond$")
    public void wordenZijnGegevensVanZijnAccountGetoond() {
        //get localstorage om informatie te hebben over de gebruiker
        String user = (String) jsExecutor.executeScript("return localStorage.getItem('CurrentUser')");

        //toon de user
        System.out.println(user);

        //kijk na of de name correct is
        String name = driver.findElement(By.name("first name")).getAttribute("value");
        Assert.assertTrue("Did not find name: " , user.contains(name));

        //kijk na of de email correct is
        String email = driver.findElement(By.name("email")).getAttribute("value");
        Assert.assertTrue("Did not find email: " , user.contains(email));

        //kijk na of de gender correct is
        String selectedOption = new Select(driver.findElement(By.xpath("//*[@name='gender']"))).getFirstSelectedOption().getText();
        Assert.assertTrue("Did not find gender: " , user.contains(selectedOption));

        //kijk na of de telephone correct is
        String telephone = driver.findElement(By.name("telephone")).getAttribute("value");
        Assert.assertTrue("Did not find telephone: " , user.contains(telephone));
    }

    @Given("^De gebruiker bevindt zich op de account-pagina$")
    public void deGebruikerBevindtZichOpDeAccountPagina() {
        String bodyText = driver.findElement(By.className("btnupdate")).getText();
        Assert.assertTrue("Did not find this text: Update Account ",bodyText.contains("Update Account"));
    }

    @When("^De gebruiker zijn naam wijzigt naar \"([^\"]*)\"$")
    public void deGebruikerZijnNaamWijzigtNaar(String arg0) throws Throwable {
        driver.findElement(By.name("first name")).clear();
        driver.findElement(By.name("first name")).sendKeys(arg0);
    }

    @And("^zijn telefoonnummer wijzigt naar \"([^\"]*)\"$")
    public void zijnTelefoonnummerWijzigtNaar(String arg0) throws Throwable {
        driver.findElement(By.name("telephone")).clear();
        driver.findElement(By.name("telephone")).sendKeys(arg0);
    }

    @And("^zijn geslacht wijzigt \"([^\"]*)\"$")
    public void zijnGeslachtWijzigt(String arg0) throws Throwable {
        Select selectedOption = new Select(driver.findElement(By.name("gender")));
        selectedOption.selectByVisibleText(arg0);
    }

    @And("^op de update account button drukt$")
    public void opDeUpdateAccountButtonDrukt() throws InterruptedException {
        driver.findElement(By.className("btnupdate")).click();
        Thread.sleep(1000);
    }

    @Then("^zijn de gegevens gewijzigd$")
    public void zijnDeGegevensGewijzigd() {
        //ik voer deze functie uit om te kijken of de nieuwe textvelden overeenkomen met de start data
        //kijk of de name gewijzigd is met onze start data
        String name = driver.findElement(By.name("first name")).getAttribute("value").trim();
        Assert.assertEquals("Could not update value", "test2 sportnetic", name);

        //kijk of de telephone gewijzigd is met onze start data
        String telephone = driver.findElement(By.name("telephone")).getAttribute("value").trim();
        Assert.assertEquals("Could not update value", "0488280611", telephone);

        //kijk of de gender gewijzigd is met onze start data
        String selectedOption = new Select(driver.findElement(By.xpath("//*[@name='gender']"))).getFirstSelectedOption().getText();
        Assert.assertEquals("Could not update value", "Female", selectedOption);
    }

    @And("^opgeslagen$")
    public void opgeslagen() {
        driver.navigate().refresh();
        wordenZijnGegevensVanZijnAccountGetoond();
        driver.close();
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
}
