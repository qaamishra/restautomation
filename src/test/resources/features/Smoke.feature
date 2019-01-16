@Smoke
Feature: some description goes here
  As a user
  I want to perform something
  So that I acheive a business goal

  Scenario: 1.Verify the validate endpoint
    Given I have the valid data to post
    When I post the data
    Then a valid response should be fetched

  Scenario: 2.Verify the failure when value date is before trade date
    Given I have the value date data older to trade date
    When I post the data
    Then a response contains the required error message

  Scenario: 3.Verify the failure when a date is on non business day
    Given I have the value date as non business date
    When I post the data
    Then a response contains the required error message of weekend

  Scenario: 4.Verify the failure when a invalid customer name is provided
    Given I have the data with invalid customer name
    When I post the data
    Then a response contains the required error message for invalid customer name

  #This is failing,as the business scenario as only one legal enity is used CS Zurich, but even a invalid name is returning success so assertion fails.
  Scenario: 5.Verify the failure when a invalid Legal Entity is provided
    Given I have the data with invalid Legal Entity
    When I post the data
    Then a response contains the required error message for invalid Legal Entity

  Scenario: 6.Verify the failure with invalid product type
    Given I have the data to post with invalid product type
    When I post the data
    Then a response contains the required error message for product type

  Scenario: 7.Verify the Optiona with Style as American
    Given I have the data to post with style American
    When I post the data
    Then a response contains the required message for style American

  Scenario: 8.Verify the Optiona with Style as American excersise date falls after trade date but before expiry date
    Given I have the data to post with style American with excersise and trade dates before expiry
    When I post the data
    Then a response contains the required message for style American

  Scenario: 9.Verify the Options with Invalid Style
    Given I have the data to post with invalid style
    When I post the data
    Then a response contains the error message for invalid style

  Scenario: 10.Verify the Options when expiry date and premium date are after delivery date
    Given I have the data to post with invalid date date
    When I post the data
    Then a response contains the error message for invalid date

  Scenario: 11.Verify the Options when excercise date is before trade date
    Given I have the data to post with excercise date before trade date
    When I post the data
    Then a response contains the error message for invalid date

  Scenario: 11.Verify the Options when wrong date data
    Given I have the data to post with wrong date data
    When I post the data
    Then a response contains the error message for wrong date
