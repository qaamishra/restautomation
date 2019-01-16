package com.qa.amishra.config;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesInitializer {


    private static PropertiesInitializer instance =null;


    private Properties props = null;


    private PropertiesInitializer() throws FileNotFoundException, IOException{


        this.props=new Properties();
        File fileUserProp = new File(".\\src\\main\\resources\\config\\restconfig.properties");
        props.load(new FileInputStream(fileUserProp));
    }

    public static PropertiesInitializer getInstance() throws FileNotFoundException, IOException{
        if(instance==null){
            instance=new PropertiesInitializer();
        }

        return instance;
    }

    //Generic
    public String getValue(String propKey){
        return props.getProperty(propKey);
    }

    public String getBaseUrl(){
        return props.getProperty("base.url");
    }

    public  String getValidateURI(){
        return props.getProperty("resource.url.validate");
    }

    public  String getValidateBatchURI(){
        return props.getProperty("resource.url.validateBatch");
    }

    public String getJsonFilePathForTrade(){
        return props.getProperty("json.file.location.trade");

    }

    public String getJsonFilePathForSpot(){
        return props.getProperty("json.file.location.spot");

    }

    public String getJsonFilePathForOptions() {
        return props.getProperty("json.file.location.options");
    }

    public String getJsonFilePathForOptionsWithDate() {
        return props.getProperty("json.file.location.options.date");
    }
}
