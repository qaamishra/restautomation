$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Smoke.feature");
formatter.feature({
  "line": 2,
  "name": "some description goes here",
  "description": "As a user\r\nI want to perform something\r\nSo that I acheive a business goal",
  "id": "some-description-goes-here",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "1.Verify the validate endpoint",
  "description": "",
  "id": "some-description-goes-here;1.verify-the-validate-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I have the valid data to post",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "a valid response should be fetched",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPost()"
});
formatter.result({
  "duration": 496663696,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 3809009077,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aValidResponseShouldBeFetched()"
});
formatter.result({
  "duration": 11790715,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "2.Verify the failure when value date is before trade date",
  "description": "",
  "id": "some-description-goes-here;2.verify-the-failure-when-value-date-is-before-trade-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I have the value date data older to trade date",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "a response contains the required error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheValueDateDataOlderToTradeDate()"
});
formatter.result({
  "duration": 3320445,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 111135234,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessage()"
});
formatter.result({
  "duration": 198985,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "3.Verify the failure when a date is on non business day",
  "description": "",
  "id": "some-description-goes-here;3.verify-the-failure-when-a-date-is-on-non-business-day",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I have the value date as non business date",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "a response contains the required error message of weekend",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheValueDateAsNonBusinessDate()"
});
formatter.result({
  "duration": 2536587,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 150958300,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageOfWeekend()"
});
formatter.result({
  "duration": 432707,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "4.Verify the failure when a invalid customer name is provided",
  "description": "",
  "id": "some-description-goes-here;4.verify-the-failure-when-a-invalid-customer-name-is-provided",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I have the data with invalid customer name",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "a response contains the required error message for invalid customer name",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataWithInvalidCustomerName()"
});
formatter.result({
  "duration": 9515035,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 116902780,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageForInvalidCustomerName()"
});
formatter.result({
  "duration": 168023,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#This is failing,as the business scenario as only one legal enity is used CS Zurich, but even a invalid name is returning success so assertion fails."
    }
  ],
  "line": 28,
  "name": "5.Verify the failure when a invalid Legal Entity is provided",
  "description": "",
  "id": "some-description-goes-here;5.verify-the-failure-when-a-invalid-legal-entity-is-provided",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I have the data with invalid Legal Entity",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "a response contains the required error message for invalid Legal Entity",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataWithInvalidLegalEntity()"
});
formatter.result({
  "duration": 5798885,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 44412182,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageForInvalidLegalEntity()"
});
formatter.result({
  "duration": 756295,
  "error_message": "java.lang.AssertionError: Actual response was \n{\n    \"status\": \"SUCCESS\",\n    \"messages\": null\n}\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheRequiredErrorMessageForInvalidLegalEntity(Smoke.java:190)\r\n\tat ✽.Then a response contains the required error message for invalid Legal Entity(features/Smoke.feature:31)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 33,
  "name": "6.Verify the failure with invalid product type",
  "description": "",
  "id": "some-description-goes-here;6.verify-the-failure-with-invalid-product-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I have the data to post with invalid product type",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "a response contains the required error message for product type",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithInvalidProductType()"
});
formatter.result({
  "duration": 426666,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 188361451,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageForProductType()"
});
formatter.result({
  "duration": 170667,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "7.Verify the Optiona with Style as American",
  "description": "",
  "id": "some-description-goes-here;7.verify-the-optiona-with-style-as-american",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I have the data to post with style American",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "a response contains the required message for style American",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithStyleAmerican()"
});
formatter.result({
  "duration": 393062,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 23974868,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredMessageForStyleAmerican()"
});
formatter.result({
  "duration": 137439,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "8.Verify the Optiona with Style as American excersise date falls after trade date but before expiry date",
  "description": "",
  "id": "some-description-goes-here;8.verify-the-optiona-with-style-as-american-excersise-date-falls-after-trade-date-but-before-expiry-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I have the data to post with style American with excersise and trade dates before expiry",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "a response contains the required message for style American",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithStyleAmericanWithExcersiseAndTradeDatesBeforeExpiry()"
});
formatter.result({
  "duration": 766866,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 36653275,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredMessageForStyleAmerican()"
});
formatter.result({
  "duration": 121958,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "9.Verify the Options with Invalid Style",
  "description": "",
  "id": "some-description-goes-here;9.verify-the-options-with-invalid-style",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I have the data to post with invalid style",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "a response contains the error message for invalid style",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithInvalidStyle()"
});
formatter.result({
  "duration": 18275664,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 17625848,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForInvalidStyle()"
});
formatter.result({
  "duration": 170289,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "10.Verify the Options when expiry date and premium date are after delivery date",
  "description": "",
  "id": "some-description-goes-here;10.verify-the-options-when-expiry-date-and-premium-date-are-after-delivery-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I have the data to post with invalid date date",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "a response contains the error message for invalid date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithInvalidDateDate()"
});
formatter.result({
  "duration": 929226,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 26027398,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForInvalidDate()"
});
formatter.result({
  "duration": 143480,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "11.Verify the Options when excercise date is before trade date",
  "description": "",
  "id": "some-description-goes-here;11.verify-the-options-when-excercise-date-is-before-trade-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "I have the data to post with excercise date before trade date",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "a response contains the error message for invalid date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithExcerciseDateBeforeTradeDate()"
});
formatter.result({
  "duration": 804247,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 22679767,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForInvalidDate()"
});
formatter.result({
  "duration": 160094,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "11.Verify the Options when wrong date data",
  "description": "",
  "id": "some-description-goes-here;11.verify-the-options-when-wrong-date-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "I have the data to post with wrong date data",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "a response contains the error message for wrong date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithWrongDateData()"
});
formatter.result({
  "duration": 1475963,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 30505883,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForWrongDate()"
});
formatter.result({
  "duration": 211445,
  "status": "passed"
});
});