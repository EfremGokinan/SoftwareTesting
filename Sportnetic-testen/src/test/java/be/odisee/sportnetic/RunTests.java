package be.odisee.sportnetic;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty", "html:target/cucumber"},features = "classpath:be.odisee.sportnetic")
public class RunTests {

}
