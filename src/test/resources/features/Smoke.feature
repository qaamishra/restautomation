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

    #Requirement : only one legal entity is used: CS Zurich
    #BUG : This is failing,as the business scenario as only one legal enity is used CS Zurich, but even a invalid name is returning success so assertion fails.
  Scenario: 5.Verify the failure when a invalid Legal Entity is provided
    Given I have the data with invalid Legal Entity
    When I post the data
    Then a response contains the required error message for invalid Legal Entity

  Scenario: 6.Verify the failure with invalid product type
    Given I have the data to post with invalid product type
    When I post the data
    Then a response contains the required error message for product type

    #Positive case for Options all valid data : the style can be either American or European
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

  Scenario: 12.Verify the Options when wrong date data
    Given I have the data to post with wrong date data
    When I post the data
    Then a response contains the error message for wrong date

  #Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date
  #BUG : As per above statement exerciseStartDate should be present in payload but even without it ,it returns success.
  Scenario: 13.Verify the the american style without exerciseStartDate fails
    Given I have the data to post without excercise date and american style
    When I post the data
    Then a response contains the error message for no excercise date

  # Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date
  #BUG : If Excercise date is before trade date it still passes
  Scenario: 14.Verify the if Excercise date is before trade date it fails
    Given I have the data to post where Excercise date is before trade date
    When I post the data
    Then a response contains the error message for excercise date cannot be behind


  #Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date
  #BUG : According to above exerciseStartDate should be before expiry date ,but even for ahead date it passes.
  Scenario: 15.Verify the if Excercise date is ahead of expiry date it fails
    Given I have the data to post where Excercise date is ahead of expiry date
    When I post the data
    Then a response contains the error message for excercise date cannot be ahead of expiry



  # Requirement : expiryDate and premium date shall be before deliveryDate
  #BUG : Wrong delivery date printed in error messages. It is picking the trade date for Premium date error messages
  #Sample :
  #  "tradeDate": "2017-08-11",##################
  #  "exerciseStartDate":"2017-08-15",
  #  "expiryDate": "2017-08-21",
  #  "premiumDate": "2017-08-25",###########
  #  "deliveryDate": "2017-08-22",###########
  #  {
  #  "status": "ERROR",
  #  "messages": [
  #  "Premium date 2017-08-25 has to be before delivery date 2017-08-11 " ###########>BUG
  #  ]
  #  }
  Scenario: 16.Verify the if premiumDate is ahead of deliveryDate it fails
    Given I have the data to post where premiumDate is ahead of deliveryDate
    When I post the data
    Then a response contains the error message for premiumDate date with value



  #Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date
  #BUG : As per above statement we can infer that EUROPEAN style will not have exerciseStartDate, but still it passes
  Scenario: 17.Verify the if EUROPEAN style will fail with exerciseStartDate
    Given I have the data to post where EUROPEAN style payload has exerciseStartDate
    When I post the data
    Then a response contains the error message  EUROPEAN cannot have payload has exerciseStartDate

    #BUG For zero amount in options it returns success. One cannot trade for 0 amount
  Scenario: 18.Verify the no trade happens for zero amount
    Given I have the data to post where amount is zero
    When I post the data
    Then a response contains the error message

    #BUG No Data validation for theses fields : "strategy": "a", "payCcy": "a", "premiumCcy": "a","premiumType": "a", "trader": 123.00
  Scenario: 19.Verify the data validation for strategy payCcy premiumCcy premiumType trader
    Given I have the data to post in valid data for strategy payCcy premiumCcy premiumType trader
    When I post the data
    Then a response contains the error message