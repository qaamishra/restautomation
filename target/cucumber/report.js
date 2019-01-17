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
  "duration": 513213061,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 2050801604,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aValidResponseShouldBeFetched()"
});
formatter.result({
  "duration": 2399903,
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
  "duration": 1140672,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 30025977,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessage()"
});
formatter.result({
  "duration": 192189,
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
  "duration": 852200,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 30922732,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageOfWeekend()"
});
formatter.result({
  "duration": 212201,
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
  "duration": 1297367,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 27788811,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageForInvalidCustomerName()"
});
formatter.result({
  "duration": 166136,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 27,
      "value": "#Requirement : only one legal entity is used: CS Zurich"
    },
    {
      "line": 28,
      "value": "#BUG : This is failing,as the business scenario as only one legal enity is used CS Zurich, but even a invalid name is returning success so assertion fails."
    }
  ],
  "line": 29,
  "name": "5.Verify the failure when a invalid Legal Entity is provided",
  "description": "",
  "id": "some-description-goes-here;5.verify-the-failure-when-a-invalid-legal-entity-is-provided",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I have the data with invalid Legal Entity",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "a response contains the required error message for invalid Legal Entity",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataWithInvalidLegalEntity()"
});
formatter.result({
  "duration": 1440471,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 23738503,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageForInvalidLegalEntity()"
});
formatter.result({
  "duration": 746478,
  "error_message": "java.lang.AssertionError:  only one legal enity is used CS Zurich, but even a invalid name is returning success \n Actual response was \n{\n    \"status\": \"SUCCESS\",\n    \"messages\": null\n}\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheRequiredErrorMessageForInvalidLegalEntity(Smoke.java:190)\r\n\tat ✽.Then a response contains the required error message for invalid Legal Entity(features/Smoke.feature:32)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 34,
  "name": "6.Verify the failure with invalid product type",
  "description": "",
  "id": "some-description-goes-here;6.verify-the-failure-with-invalid-product-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I have the data to post with invalid product type",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "a response contains the required error message for product type",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithInvalidProductType()"
});
formatter.result({
  "duration": 866548,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 32056229,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredErrorMessageForProductType()"
});
formatter.result({
  "duration": 194077,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 39,
      "value": "#Positive case for Options all valid data : the style can be either American or European"
    }
  ],
  "line": 40,
  "name": "7.Verify the Optiona with Style as American",
  "description": "",
  "id": "some-description-goes-here;7.verify-the-optiona-with-style-as-american",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I have the data to post with style American",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "a response contains the required message for style American",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithStyleAmerican()"
});
formatter.result({
  "duration": 1128589,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 18455015,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredMessageForStyleAmerican()"
});
formatter.result({
  "duration": 99304,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "8.Verify the Optiona with Style as American excersise date falls after trade date but before expiry date",
  "description": "",
  "id": "some-description-goes-here;8.verify-the-optiona-with-style-as-american-excersise-date-falls-after-trade-date-but-before-expiry-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I have the data to post with style American with excersise and trade dates before expiry",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "a response contains the required message for style American",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithStyleAmericanWithExcersiseAndTradeDatesBeforeExpiry()"
});
formatter.result({
  "duration": 943574,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 27680446,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheRequiredMessageForStyleAmerican()"
});
formatter.result({
  "duration": 143103,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "9.Verify the Options with Invalid Style",
  "description": "",
  "id": "some-description-goes-here;9.verify-the-options-with-invalid-style",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "I have the data to post with invalid style",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "a response contains the error message for invalid style",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithInvalidStyle()"
});
formatter.result({
  "duration": 3350651,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 21354835,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForInvalidStyle()"
});
formatter.result({
  "duration": 1406488,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "10.Verify the Options when expiry date and premium date are after delivery date",
  "description": "",
  "id": "some-description-goes-here;10.verify-the-options-when-expiry-date-and-premium-date-are-after-delivery-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I have the data to post with invalid date date",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "a response contains the error message for invalid date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithInvalidDateDate()"
});
formatter.result({
  "duration": 803492,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 20580795,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForInvalidDate()"
});
formatter.result({
  "duration": 130265,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "11.Verify the Options when excercise date is before trade date",
  "description": "",
  "id": "some-description-goes-here;11.verify-the-options-when-excercise-date-is-before-trade-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 61,
  "name": "I have the data to post with excercise date before trade date",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "a response contains the error message for invalid date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithExcerciseDateBeforeTradeDate()"
});
formatter.result({
  "duration": 1983432,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 17163689,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForInvalidDate()"
});
formatter.result({
  "duration": 117050,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "12.Verify the Options when wrong date data",
  "description": "",
  "id": "some-description-goes-here;12.verify-the-options-when-wrong-date-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "I have the data to post with wrong date data",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "a response contains the error message for wrong date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithWrongDateData()"
});
formatter.result({
  "duration": 722690,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 34148782,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForWrongDate()"
});
formatter.result({
  "duration": 252224,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 70,
      "value": "#Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date"
    },
    {
      "line": 71,
      "value": "#BUG : As per above statement exerciseStartDate should be present in payload but even without it ,it returns success."
    }
  ],
  "line": 72,
  "name": "13.Verify the the american style without exerciseStartDate fails",
  "description": "",
  "id": "some-description-goes-here;13.verify-the-the-american-style-without-exercisestartdate-fails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "I have the data to post without excercise date and american style",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "a response contains the error message for no excercise date",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWithoutExcerciseDateAndAmericanStyle()"
});
formatter.result({
  "duration": 2208470,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 22554032,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForNoExcerciseDate()"
});
formatter.result({
  "duration": 414961,
  "error_message": "java.lang.AssertionError: exerciseStartDate should be present in payload but even without it ,it returns success.\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessageForNoExcerciseDate(Smoke.java:386)\r\n\tat ✽.Then a response contains the error message for no excercise date(features/Smoke.feature:75)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 77,
      "value": "# Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date"
    },
    {
      "line": 78,
      "value": "#BUG : If Excercise date is before trade date it still passes"
    }
  ],
  "line": 79,
  "name": "14.Verify the if Excercise date is before trade date it fails",
  "description": "",
  "id": "some-description-goes-here;14.verify-the-if-excercise-date-is-before-trade-date-it-fails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "I have the data to post where Excercise date is before trade date",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "a response contains the error message for excercise date cannot be behind",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWhereExcerciseDateIsBeforeTradeDate()"
});
formatter.result({
  "duration": 697014,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 37200390,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForExcerciseDateCannotBeBehind()"
});
formatter.result({
  "duration": 340201,
  "error_message": "java.lang.AssertionError: Excercise date is before trade date it still passed\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessageForExcerciseDateCannotBeBehind(Smoke.java:415)\r\n\tat ✽.Then a response contains the error message for excercise date cannot be behind(features/Smoke.feature:82)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 85,
      "value": "#Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date"
    },
    {
      "line": 86,
      "value": "#BUG : According to above exerciseStartDate should be before expiry date ,but even for ahead date it passes."
    }
  ],
  "line": 87,
  "name": "15.Verify the if Excercise date is ahead of expiry date it fails",
  "description": "",
  "id": "some-description-goes-here;15.verify-the-if-excercise-date-is-ahead-of-expiry-date-it-fails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 88,
  "name": "I have the data to post where Excercise date is ahead of expiry date",
  "keyword": "Given "
});
formatter.step({
  "line": 89,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "a response contains the error message for excercise date cannot be ahead of expiry",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWhereExcerciseDateIsAheadOfExpiryDate()"
});
formatter.result({
  "duration": 651704,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 23733594,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForExcerciseDateCannotBeAheadOfExpiry()"
});
formatter.result({
  "duration": 336047,
  "error_message": "java.lang.AssertionError: ExerciseStartDate should be before expiry date ,but even for ahead date it passes.\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessageForExcerciseDateCannotBeAheadOfExpiry(Smoke.java:443)\r\n\tat ✽.Then a response contains the error message for excercise date cannot be ahead of expiry(features/Smoke.feature:90)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 94,
      "value": "# Requirement : expiryDate and premium date shall be before deliveryDate"
    },
    {
      "line": 95,
      "value": "#BUG : Wrong delivery date printed in error messages. It is picking the trade date for Premium date error messages"
    },
    {
      "line": 96,
      "value": "#Sample :"
    },
    {
      "line": 97,
      "value": "#  \"tradeDate\": \"2017-08-11\",##################"
    },
    {
      "line": 98,
      "value": "#  \"exerciseStartDate\":\"2017-08-15\","
    },
    {
      "line": 99,
      "value": "#  \"expiryDate\": \"2017-08-21\","
    },
    {
      "line": 100,
      "value": "#  \"premiumDate\": \"2017-08-25\",###########"
    },
    {
      "line": 101,
      "value": "#  \"deliveryDate\": \"2017-08-22\",###########"
    },
    {
      "line": 102,
      "value": "#  {"
    },
    {
      "line": 103,
      "value": "#  \"status\": \"ERROR\","
    },
    {
      "line": 104,
      "value": "#  \"messages\": ["
    },
    {
      "line": 105,
      "value": "#  \"Premium date 2017-08-25 has to be before delivery date 2017-08-11 \" ###########\u003eBUG"
    },
    {
      "line": 106,
      "value": "#  ]"
    },
    {
      "line": 107,
      "value": "#  }"
    }
  ],
  "line": 108,
  "name": "16.Verify the if premiumDate is ahead of deliveryDate it fails",
  "description": "",
  "id": "some-description-goes-here;16.verify-the-if-premiumdate-is-ahead-of-deliverydate-it-fails",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 109,
  "name": "I have the data to post where premiumDate is ahead of deliveryDate",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "a response contains the error message for premiumDate date with value",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWherePremiumDateIsAheadOfDeliveryDate()"
});
formatter.result({
  "duration": 916011,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 43162012,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageForPremiumDateDateWithValue()"
});
formatter.result({
  "duration": 409297,
  "error_message": "java.lang.AssertionError: TradeDate is displayed instead of premium date \n {\n    \"status\": \"ERROR\",\n    \"messages\": [\n        \"Premium date 2019-03-15 has to be before delivery date 2019-03-06 \"\n    ]\n}\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessageForPremiumDateDateWithValue(Smoke.java:479)\r\n\tat ✽.Then a response contains the error message for premiumDate date with value(features/Smoke.feature:111)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 115,
      "value": "#Requirement : American option style will have in addition the exerciseStartDate, which has to be after the trade date but before the expiry date"
    },
    {
      "line": 116,
      "value": "#BUG : As per above statement we can infer that EUROPEAN style will not have exerciseStartDate, but still it passes"
    }
  ],
  "line": 117,
  "name": "17.Verify the if EUROPEAN style will fail with exerciseStartDate",
  "description": "",
  "id": "some-description-goes-here;17.verify-the-if-european-style-will-fail-with-exercisestartdate",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 118,
  "name": "I have the data to post where EUROPEAN style payload has exerciseStartDate",
  "keyword": "Given "
});
formatter.step({
  "line": 119,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "a response contains the error message  EUROPEAN cannot have payload has exerciseStartDate",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWhereEUROPEANStylePayloadHasExerciseStartDate()"
});
formatter.result({
  "duration": 724577,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 16576173,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessageEUROPEANCannotHavePayloadHasExerciseStartDate()"
});
formatter.result({
  "duration": 324720,
  "error_message": "java.lang.AssertionError: EUROPEAN style will not have exerciseStartDate, but still it passes\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessageEUROPEANCannotHavePayloadHasExerciseStartDate(Smoke.java:507)\r\n\tat ✽.Then a response contains the error message  EUROPEAN cannot have payload has exerciseStartDate(features/Smoke.feature:120)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 122,
      "value": "#BUG For zero amount in options it returns success. One cannot trade for 0 amount"
    }
  ],
  "line": 123,
  "name": "18.Verify the no trade happens for zero amount",
  "description": "",
  "id": "some-description-goes-here;18.verify-the-no-trade-happens-for-zero-amount",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 124,
  "name": "I have the data to post where amount is zero",
  "keyword": "Given "
});
formatter.step({
  "line": 125,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 126,
  "name": "a response contains the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostWhereAmountIsZero()"
});
formatter.result({
  "duration": 368142,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 22143224,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessage()"
});
formatter.result({
  "duration": 363988,
  "error_message": "java.lang.AssertionError: \r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessage(Smoke.java:524)\r\n\tat ✽.Then a response contains the error message(features/Smoke.feature:126)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 128,
      "value": "#BUG No Data validation for theses fields : \"strategy\": \"a\", \"payCcy\": \"a\", \"premiumCcy\": \"a\",\"premiumType\": \"a\", \"trader\": 123.00"
    }
  ],
  "line": 129,
  "name": "19.Verify the data validation for strategy payCcy premiumCcy premiumType trader",
  "description": "",
  "id": "some-description-goes-here;19.verify-the-data-validation-for-strategy-payccy-premiumccy-premiumtype-trader",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 130,
  "name": "I have the data to post in valid data for strategy payCcy premiumCcy premiumType trader",
  "keyword": "Given "
});
formatter.step({
  "line": 131,
  "name": "I post the data",
  "keyword": "When "
});
formatter.step({
  "line": 132,
  "name": "a response contains the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoke.iHaveTheDataToPostInValidDataForStrategyPayCcyPremiumCcyPremiumTypeTrader()"
});
formatter.result({
  "duration": 359457,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.iPostTheData()"
});
formatter.result({
  "duration": 21022564,
  "status": "passed"
});
formatter.match({
  "location": "Smoke.aResponseContainsTheErrorMessage()"
});
formatter.result({
  "duration": 284319,
  "error_message": "java.lang.AssertionError: \r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat com.bdd.steps.Smoke.aResponseContainsTheErrorMessage(Smoke.java:524)\r\n\tat ✽.Then a response contains the error message(features/Smoke.feature:132)\r\n",
  "status": "failed"
});
});