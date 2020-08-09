package RunnerPackage;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"features/Login.feature"} ,
glue= {"stepdefinition"},

dryRun=false,
monochrome=true,
tags= {"@SignUp"},
format= {"html:reports/cucumber.html", "json:reports/cucumber.json"}
)
public class RunnerClass {

}
