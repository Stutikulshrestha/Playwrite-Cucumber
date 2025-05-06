const { Given, When, Then } = require('@cucumber/cucumber');

Given('user is on the login page', async function () {
  // Navigate to login page
  await browser.url('https://yourwebsite.com/login');
});

When('user enters the username as {string}', async function (username) {
  // Find username field and set value
  await $('#usernameField').setValue(username);
});

When('user enters text password as {string}', async function (password) {
  // Find password field and set value
  await $('#passwordField').setValue(password);
});

When('user clicks on login button', async function () {
  // Find login button and click
  await $('#loginButton').click();
});

Then('user navigates to home page', async function () {
  // Verify URL or home page element
  await expect(browser).toHaveUrlContaining('/home');
});

Then('user views an error message for the wrong password', async function () {
  // Check error message displayed
  const errorMessage = await $('#errorMessage').getText();
  expect(errorMessage).toContain('Invalid username or password');
});
