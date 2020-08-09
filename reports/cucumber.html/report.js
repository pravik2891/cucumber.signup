$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "User wats to create new account",
  "description": "",
  "id": "user-wats-to-create-new-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SignUp"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "User site is yahoo",
  "description": "",
  "id": "user-wats-to-create-new-account;user-site-is-yahoo",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User goes to linkedin site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks sign up",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user fills number",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "fills password and clicks ok",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "fills first name and last name and clicks ok",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "fills verification code and clicks ok",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "choose country",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "choose city andclicks ok",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "fills job title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "company name and clicks ok",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click Yes",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "click skip",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.user_goes_to_linkedin_site()"
});
formatter.result({
  "duration": 8351268444,
  "status": "passed"
});
formatter.match({
  "location": "Signup.user_clicks_sign_up()"
});
formatter.result({
  "duration": 824943539,
  "status": "passed"
});
formatter.match({
  "location": "Signup.user_fills_number()"
});
formatter.result({
  "duration": 197357353,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//label[@for\u003d\u0027email-or-phone\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.105)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MAHESH\u0027, ip: \u0027192.168.72.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\Mike\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:63570}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b79efc6d3fefb5621903357b7de12bec\n*** Element info: {Using\u003dxpath, value\u003d//label[@for\u003d\u0027email-or-phone\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepdefinition.Signup.user_fills_number(Signup.java:35)\r\n\tat ✽.Then user fills number(features/Login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Signup.fills_password_and_clicks_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.fills_first_name_and_last_name_and_clicks_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.fills_verification_code_and_clicks_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.choose_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.choose_city_andclicks_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.fills_job_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.company_name_and_clicks_ok()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.click_Yes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Signup.click_skip()"
});
formatter.result({
  "status": "skipped"
});
});