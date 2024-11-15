---
title: "Flatten a Multi-Index DataFrame"
author: "Puneet Thukral"
date: 2024-11-15T07:00:00
draft: false
slug: "flatten_multiindex_dataframe"
---

# [Resource](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.stack.html)

***

Whilst a multi-index datafame can be useful for complex data orginisation, for example across multiple markets and time periods.  Flattening the data has it's own advantages; making for easier data manipulation, merging with other datasets and visulising. Here is a quick example.


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
print(df.columns)
```

    MultiIndex([('Adj Close',  'VOO'),
                ('Adj Close', 'VTWO'),
                (    'Close',  'VOO'),
                (    'Close', 'VTWO'),
                (     'High',  'VOO'),
                (     'High', 'VTWO'),
                (      'Low',  'VOO'),
                (      'Low', 'VTWO'),
                (     'Open',  'VOO'),
                (     'Open', 'VTWO'),
                (   'Volume',  'VOO'),
                (   'Volume', 'VTWO')],
               names=['Price', 'Ticker'])
    


```python
# Completely flatten the DataFrame
df_flattened = df.stack(future_stack=True).reset_index()

```


```python
print(df_flattened.columns)
```

    Index(['Date', 'Ticker', 'Adj Close', 'Close', 'High', 'Low', 'Open',
           'Volume'],
          dtype='object', name='Price')
    
