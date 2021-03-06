package com.bdd.steps;


import com.qa.amishra.config.PropertiesInitializer;
import com.qa.amishra.restapihelper.RestActionController;
import com.qa.amishra.restapihelper.RestSpecBuilder;
import com.qa.amishra.utils.DataGenerator;
import com.qa.amishra.utils.JacksonUtils;
import com.qa.amishra.utils.TestConstants;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import org.junit.Assert;

import java.io.File;
import java.util.HashMap;
import java.util.Map;


public class Smoke {


    RestSpecBuilder restSpecBuilder;
    Response response;
    String jsonToPost;

    @Given("^I have the valid data to post$")
    public void iHaveTheDataToPost() throws Throwable {


        //Save variable for runtime
        String name = DataGenerator.generateFullName();
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String valueDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String custName = DataGenerator.generateValidCustomer();
        String legalEntity = DataGenerator.generateValidLegalEntity();
        String ccPair = DataGenerator.generateCurrencyCodePair();
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("TRADER", name);
        myValues.put("VALUE_DATE", valueDate);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("CUSTOMER", custName);
        myValues.put("LEGAL_ENTITY", legalEntity);
        myValues.put("CCPAIR", ccPair);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForTrade()), myValues);


    }

    @When("^I post the data$")
    public void iPostTheData() throws Throwable {
        //Build specification
        restSpecBuilder = new RestSpecBuilder()
                .setBaseUrl(PropertiesInitializer.getInstance().getBaseUrl())
                .setContentTypeJson()
                .setAcceptasJson();

        //Post the response
        RestActionController restActionController = new RestActionController(restSpecBuilder);
        response = restActionController
                .hitPostRequestWithBody(
                        PropertiesInitializer.getInstance().getValidateURI(), jsonToPost);

    }

    @Then("^a valid response should be fetched$")
    public void aValidResponseShouldBeFetched() throws Throwable {

        Assert.assertTrue(response.asString().contains("SUCCESS"));

    }


    @Given("^I have the value date data older to trade date$")
    public void iHaveTheValueDateDataOlderToTradeDate() throws Throwable {
        //Save variable for runtime
        String name = DataGenerator.generateFullName();
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String valueDate = DataGenerator.generateWeekDayValueDateBehind(tradeDate);
        String custName = DataGenerator.generateValidCustomer();
        String legalEntity = DataGenerator.generateValidLegalEntity();
        String ccPair = DataGenerator.generateCurrencyCodePair();
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("TRADER", name);
        myValues.put("VALUE_DATE", valueDate);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("CUSTOMER", custName);
        myValues.put("LEGAL_ENTITY", legalEntity);
        myValues.put("CCPAIR", ccPair);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForTrade()), myValues);

    }

    @Then("^a response contains the required error message$")
    public void aResponseContainsTheRequiredErrorMessage() throws Throwable {
        Assert.assertTrue(response.asString().contains("and it has to be after trade date"));
    }

    @Given("^I have the value date as non business date$")
    public void iHaveTheValueDateAsNonBusinessDate() throws Throwable {
        //Save variable for runtime
        String name = DataGenerator.generateFullName();
        String tradeDate = DataGenerator.generateWeekEnd();
        String valueDate = DataGenerator.generateWeekEnd();
        String custName = DataGenerator.generateValidCustomer();
        String legalEntity = DataGenerator.generateValidLegalEntity();
        String ccPair = DataGenerator.generateCurrencyCodePair();
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("TRADER", name);
        myValues.put("VALUE_DATE", valueDate);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("CUSTOMER", custName);
        myValues.put("LEGAL_ENTITY", legalEntity);
        myValues.put("CCPAIR", ccPair);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForTrade()), myValues);

    }

    @Then("^a response contains the required error message of weekend$")
    public void aResponseContainsTheRequiredErrorMessageOfWeekend() throws Throwable {
        Assert.assertTrue(response.asString().contains("cannot fall on Saturday/Sunday"));
    }

    @Given("^I have the data with invalid customer name$")
    public void iHaveTheDataWithInvalidCustomerName() throws Throwable {
        //Save variable for runtime
        String name = DataGenerator.generateFullName();
        String custName = DataGenerator.generateInValidCustomer();
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String valueDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String legalEntity = DataGenerator.generateValidLegalEntity();
        String ccPair = DataGenerator.generateCurrencyCodePair();
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("TRADER", name);
        myValues.put("VALUE_DATE", valueDate);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("CUSTOMER", custName);
        myValues.put("LEGAL_ENTITY", legalEntity);
        myValues.put("CCPAIR", ccPair);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForTrade()), myValues);

    }

    @Then("^a response contains the required error message for invalid customer name$")
    public void aResponseContainsTheRequiredErrorMessageForInvalidCustomerName() throws Throwable {
        Assert.assertTrue(response.asString().contains("is not supported. Supported counterparties: [[PLUTO2, PLUTO1]]"));
    }

    @Given("^I have the data with invalid Legal Entity$")
    public void iHaveTheDataWithInvalidLegalEntity() throws Throwable {
        //Save variable for runtime
        String name = DataGenerator.generateFullName();
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String valueDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String custName = DataGenerator.generateValidCustomer();
        String legalEntity = DataGenerator.generateInValidLegalEntity();
        String ccPair = DataGenerator.generateCurrencyCodePair();


        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("TRADER", name);
        myValues.put("VALUE_DATE", valueDate);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("CUSTOMER", custName);
        myValues.put("LEGAL_ENTITY", legalEntity);
        myValues.put("CCPAIR", ccPair);


        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForTrade()), myValues);

    }

    @Then("^a response contains the required error message for invalid Legal Entity$")
    public void aResponseContainsTheRequiredErrorMessageForInvalidLegalEntity() throws Throwable {
        Assert.assertFalse(" only one legal enity is used CS Zurich, but even a invalid name is returning success \n Actual response was \n" + response.asString(), response.asString().contains("SUCCESS"));
    }

    @Given("^I have the data to post with invalid product type$")
    public void iHaveTheDataToPostWithInvalidProductType() throws Throwable {

        //Save variable for runtime
        String type = DataGenerator.generateInvalidProductType();
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("TYPE", type);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForSpot()), myValues);

    }


    @Then("^a response contains the required error message for product type$")
    public void aResponseContainsTheRequiredErrorMessageForProductType() throws Throwable {
        Assert.assertFalse(response.asString().contains("ERROR"));
    }

    @Given("^I have the data to post with style American$")
    public void iHaveTheDataToPostWithStyleAmerican() throws Throwable {
        //Save variable for runtime
        String style = TestConstants.STYLE_AMERICAN;
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptions()), myValues);

    }

    @Then("^a response contains the required message for style American$")
    public void aResponseContainsTheRequiredMessageForStyleAmerican() throws Throwable {
        Assert.assertTrue(response.asString().contains("SUCCESS"));
    }

    @Given("^I have the data to post with style American with excersise and trade dates before expiry$")
    public void iHaveTheDataToPostWithStyleAmericanWithExcersiseAndTradeDatesBeforeExpiry() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String excerciseDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);


    }

    @Given("^I have the data to post with invalid style$")
    public void iHaveTheDataToPostWithInvalidStyle() throws Throwable {
        String style = "AUSTRALIAN";
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String excerciseDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Then("^a response contains the error message for invalid style$")
    public void aResponseContainsTheErrorMessageForInvalidStyle() throws Throwable {
        Assert.assertTrue(response.asString().contains("Invalid option style"));
    }

    @Given("^I have the data to post with invalid date date$")
    public void iHaveTheDataToPostWithInvalidDateDate() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String excerciseDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(deliveryDate);
        String preimumDate = expiryDate;


        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Then("^a response contains the error message for invalid date$")
    public void aResponseContainsTheErrorMessageForInvalidDate() throws Throwable {
        Assert.assertTrue(response.asString().contains("ERROR"));
    }

    @Given("^I have the data to post with excercise date before trade date$")
    public void iHaveTheDataToPostWithExcerciseDateBeforeTradeDate() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String excerciseDate = DataGenerator.generateWeekDayTradeDate();
        String tradeDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);//shifted the date to prepare negative test data
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Given("^I have the data to post with wrong date data$")
    public void iHaveTheDataToPostWithWrongDateData() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String excerciseDate = DataGenerator.generateCurrencyCode();
        String expiryDate = DataGenerator.generateFullName();
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateInValidLegalEntity();

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Then("^a response contains the error message for wrong date$")
    public void aResponseContainsTheErrorMessageForWrongDate() throws Throwable {
        Assert.assertTrue(response.asString().contains("Bad Request"));
    }

    @Given("^I have the data to post without excercise date and american style$")
    public void iHaveTheDataToPostWithoutExcerciseDateAndAmericanStyle() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsNoEDate()), myValues);

    }

    @Then("^a response contains the error message for no excercise date$")
    public void aResponseContainsTheErrorMessageForNoExcerciseDate() throws Throwable {
        Assert.assertFalse("exerciseStartDate should be present in payload but even without it ,it returns success.", response.asString().contains("SUCCESS"));

    }

    @Given("^I have the data to post where Excercise date is before trade date$")
    public void iHaveTheDataToPostWhereExcerciseDateIsBeforeTradeDate() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String excerciseDate = DataGenerator.generateWeekDayValueDateBehind(tradeDate);
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Then("^a response contains the error message for excercise date cannot be behind$")
    public void aResponseContainsTheErrorMessageForExcerciseDateCannotBeBehind() throws Throwable {
        Assert.assertFalse("Excercise date is before trade date it still passed", response.asString().contains("SUCCESS"));
    }

    @Given("^I have the data to post where Excercise date is ahead of expiry date$")
    public void iHaveTheDataToPostWhereExcerciseDateIsAheadOfExpiryDate() throws Throwable {
        String style = TestConstants.STYLE_AMERICAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String excerciseDate = DataGenerator.generateWeekDayValueDateAhead(expiryDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Then("^a response contains the error message for excercise date cannot be ahead of expiry$")
    public void aResponseContainsTheErrorMessageForExcerciseDateCannotBeAheadOfExpiry() throws Throwable {
        Assert.assertFalse("ExerciseStartDate should be before expiry date ,but even for ahead date it passes.", response.asString().contains("SUCCESS"));
    }

    String style;
    String tradeDate;
    String expiryDate;
    String excerciseDate;
    String deliveryDate;
    String preimumDate;

    @Given("^I have the data to post where premiumDate is ahead of deliveryDate$")
    public void iHaveTheDataToPostWherePremiumDateIsAheadOfDeliveryDate() throws Throwable {
        style = TestConstants.STYLE_AMERICAN;
        tradeDate = DataGenerator.generateWeekDayTradeDate();
        expiryDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        excerciseDate = DataGenerator.generateWeekDayValueDateAhead(expiryDate);
        deliveryDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);
        preimumDate = DataGenerator.generateWeekDayValueDateAhead(deliveryDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }


    @Then("^a response contains the error message for premiumDate date with value$")
    public void aResponseContainsTheErrorMessageForPremiumDateDateWithValue() throws Throwable {
        Assert.assertTrue("TradeDate is displayed instead of premium date \n "+response.asString(), response.asString().contains("Premium date "+preimumDate+" has to be before delivery date "+deliveryDate+" "));
    }

    @Given("^I have the data to post where EUROPEAN style payload has exerciseStartDate$")
    public void iHaveTheDataToPostWhereEUROPEANStylePayloadHasExerciseStartDate() throws Throwable {
        String style = TestConstants.STYLE_EUROPEAN;
        String tradeDate = DataGenerator.generateWeekDayTradeDate();
        String excerciseDate = DataGenerator.generateWeekDayValueDateAhead(tradeDate);
        String expiryDate = DataGenerator.generateWeekDayValueDateAhead(excerciseDate);
        String preimumDate = expiryDate;
        String deliveryDate = DataGenerator.generateWeekDayValueDateAhead(preimumDate);

        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);
        myValues.put("TRADE_DATE", tradeDate);
        myValues.put("EXCERCISE_DATE", excerciseDate);
        myValues.put("EXPIRY_DATE", expiryDate);
        myValues.put("PREMIUM_DATE", preimumDate);
        myValues.put("DELIVERY_DATE", deliveryDate);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsWithDate()), myValues);

    }

    @Then("^a response contains the error message  EUROPEAN cannot have payload has exerciseStartDate$")
    public void aResponseContainsTheErrorMessageEUROPEANCannotHavePayloadHasExerciseStartDate() throws Throwable {
        Assert.assertFalse("EUROPEAN style will not have exerciseStartDate, but still it passes", response.asString().contains("SUCCESS"));
    }

    @Given("^I have the data to post where amount is zero$")
    public void iHaveTheDataToPostWhereAmountIsZero() throws Throwable {
        String style = TestConstants.STYLE_EUROPEAN;
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsNoAmt()), myValues);

    }

    @Then("^a response contains the error message$")
    public void aResponseContainsTheErrorMessage() throws Throwable {
        Assert.assertFalse("", response.asString().contains("SUCCESS"));
    }

    @Given("^I have the data to post in valid data for strategy payCcy premiumCcy premiumType trader$")
    public void iHaveTheDataToPostInValidDataForStrategyPayCcyPremiumCcyPremiumTypeTrader() throws Throwable {
        String style = TestConstants.STYLE_EUROPEAN;
        //Build Variables
        Map<String, String> myValues = new HashMap<String, String>();
        myValues.put("STYLE", style);

        //Build Json to post
        jsonToPost = JacksonUtils.buildParametrizedJsonToPostFromFile(new File(PropertiesInitializer.getInstance().getJsonFilePathForOptionsDataValidation()), myValues);

    }
}
