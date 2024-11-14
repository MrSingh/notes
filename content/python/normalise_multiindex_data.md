---
title: "Normalising ETF Adjusted Close Prices in a Multi-Index DataFrame"
author: "Puneet Thukral"
date: 2024-11-14T07:00:00
draft: false
slug: "normalise_multiindex_data"
---

<!-- # [Resource](https://docs.python.org/3/library/stdtypes.html) -->

***

This example fetches historical price data for two ETFs, 'VOO' and 'VTWO', using the yfinance library and storing it in a Multi-Index DataFrame. It then iterates through each ticker symbol to normalise their adjusted closing prices based on the first day's value. The normalised prices are stored in new columns in the DataFrame.

Normalising data is important for a number of reasons:

+ Comparison Across Assets
+ Trend Analysis
+ Volatility Assessment
+ Portfolio Management
+ Visualization

See my short guide to normalising data [here](../../notes/normalising_data)


```python
# Import
import pandas as pd
import yfinance as yf
```


```python
# Fetch data
#S&P 500 Vanguard - VOO
#S&P 500 Black Rock - BSPIX
tickers = ['VOO','VTWO']
df = yf.download(tickers,  start='2019-01-01', end='2024-10-11')
```

    [*********************100%***********************]  2 of 2 completed
    


```python
# Normalise 'Adj Close' columns 
# List of ticker symbols for the ETFs
for ticker in ['VOO', 'VTWO']:
    # Get the base value, the adjusted closing price on the first day
    base_value = df[('Adj Close', ticker)].iloc[0]
    
    # Normalise the adjusted closing prices by dividing by the base value and multiplying by 100
    normalised_column = (df[('Adj Close', ticker)] / base_value) * 100
    
    # Store the normalised prices in a new column in the DataFrame
    df[('Normalised', ticker)] = normalised_column

```


```python
print(df.columns)
```

    MultiIndex([( 'Adj Close',  'VOO'),
                ( 'Adj Close', 'VTWO'),
                (     'Close',  'VOO'),
                (     'Close', 'VTWO'),
                (      'High',  'VOO'),
                (      'High', 'VTWO'),
                (       'Low',  'VOO'),
                (       'Low', 'VTWO'),
                (      'Open',  'VOO'),
                (      'Open', 'VTWO'),
                (    'Volume',  'VOO'),
                (    'Volume', 'VTWO'),
                ('Normalised',  'VOO'),
                ('Normalised', 'VTWO')],
               names=['Price', 'Ticker'])
    
