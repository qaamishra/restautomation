package com.qa.amishra.applicationPojo;

public class TradePojo
{
    private String tradeDate;

    private String valueDate;

    private String rate;

    private String legalEntity;

    private String direction;

    private String ccyPair;

    private String trader;

    private String type;

    private String customer;

    private String amount2;

    private String amount1;

    public String getTradeDate ()
    {
        return tradeDate;
    }

    public void setTradeDate (String tradeDate)
    {
        this.tradeDate = tradeDate;
    }

    public String getValueDate ()
    {
        return valueDate;
    }

    public void setValueDate (String valueDate)
    {
        this.valueDate = valueDate;
    }

    public String getRate ()
    {
        return rate;
    }

    public void setRate (String rate)
    {
        this.rate = rate;
    }

    public String getLegalEntity ()
    {
        return legalEntity;
    }

    public void setLegalEntity (String legalEntity)
    {
        this.legalEntity = legalEntity;
    }

    public String getDirection ()
    {
        return direction;
    }

    public void setDirection (String direction)
    {
        this.direction = direction;
    }

    public String getCcyPair ()
    {
        return ccyPair;
    }

    public void setCcyPair (String ccyPair)
    {
        this.ccyPair = ccyPair;
    }

    public String getTrader ()
    {
        return trader;
    }

    public void setTrader (String trader)
    {
        this.trader = trader;
    }

    public String getType ()
    {
        return type;
    }

    public void setType (String type)
    {
        this.type = type;
    }

    public String getCustomer ()
    {
        return customer;
    }

    public void setCustomer (String customer)
    {
        this.customer = customer;
    }

    public String getAmount2 ()
    {
        return amount2;
    }

    public void setAmount2 (String amount2)
    {
        this.amount2 = amount2;
    }

    public String getAmount1 ()
    {
        return amount1;
    }

    public void setAmount1 (String amount1)
    {
        this.amount1 = amount1;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [tradeDate = "+tradeDate+", valueDate = "+valueDate+", rate = "+rate+", legalEntity = "+legalEntity+", direction = "+direction+", ccyPair = "+ccyPair+", trader = "+trader+", type = "+type+", customer = "+customer+", amount2 = "+amount2+", amount1 = "+amount1+"]";
    }
}