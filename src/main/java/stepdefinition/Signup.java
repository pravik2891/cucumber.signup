package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Signup {
	WebDriver driver;


	@Given("^User goes to linkedin site$")
	public void user_goes_to_linkedin_site() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Mike\\eclipse-workspace\\Javatest\\drive\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.navigate().to("https://www.linkedin.com/home");
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);

	}

	@Given("^user clicks sign up$")
	public void user_clicks_sign_up() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[text()='Join now']"));

	}

	@Then("^user fills number$")
	public void user_fills_number() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//label[@for='email-or-phone']")).sendKeys("7812804993");

	}

	@Then("^fills password and clicks ok$")
	public void fills_password_and_clicks_ok() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@type='password']")).sendKeys("Google@12345");
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}

	@Then("^fills first name and last name and clicks ok$")
	public void fills_first_name_and_last_name_and_clicks_ok() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='first-name']")).sendKeys("Pravin");
		driver.findElement(By.xpath("//input[@id='last-name']")).sendKeys("elumalai");
		driver.findElement(By.xpath("//button[text()='Continue']")).click();

	}


	@Then("^fills verification code and clicks ok$")
	public void fills_verification_code_and_clicks_ok() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.switchTo().frame(0);
		driver.findElement(By.xpath("//input[@validation='pin']")).sendKeys("553726" +Keys.ENTER);

	}

	@Then("^choose country$")
	public void choose_country() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String text = driver.findElement(By.xpath("//input[@id='typeahead-input-for-country']")).getText();
		if(text.equals("India")) {
			System.out.println("India");
		}


	}

	@Then("^choose city andclicks ok$")
	public void choose_city_andclicks_ok() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//*[@id=\'typeahead-input-for-city-district\']")).sendKeys("Chennai, Tamil Nadu, India");
		driver.findElement(By.xpath("//button[@id='ember28']")).click();
	}

	@Then("^fills job title$")
	public void fills_job_title() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		WebElement drop = driver.findElement(By.xpath("//input[@id='typeahead-input-for-title']"));
		Select select = new Select(drop);
		select.selectByValue("Engineer" +Keys.ENTER);

	}



	@Then("^company name and clicks ok$")
	public void company_name_and_clicks_ok() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='typeahead-input-for-company']")).sendKeys("Giesecke And Devrient India Private Limited" + Keys.ENTER);
		driver.findElement(By.xpath("//button[@id='ember307']")).click();
	}

	@Then("^click Yes$")
	public void click_Yes() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//button[@id='ember592']")).click();
	}

	@Then("^click skip$")
	public void click_skip() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//button[@id='ember611']")).click();

	}


}
