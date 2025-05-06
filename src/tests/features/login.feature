Feature: Login functionality

Scenario: Verify the login functionality for valid credentials
    Given user is on the login page
    When user enters the username as "Admin"
    And user enters text password as "admin123"
    And user clicks on login button
    Then user navigates to home page

Scenario: Verify the login functionality for invalid credentials
    Given user is on the login page
    When user enters the username as "Admin"
    And user enters text password as "admin"
    And user clicks on login button
    Then user views an error message for the wrong password
