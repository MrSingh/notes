---
title: "Explortatory Data Analysis of CO2 Emmisions Data with Python"
author: "Puneet Thukral"
date: 2024-11-18T07:00:00 
draft: false
slug: "co2_emmisions_eda"
---
[EDGAR CO2 emmisions data](https://edgar.jrc.ec.europa.eu/report_2024)

## ToDo:
+ [ ] Remove Global Total Row From the Top 20 and 5 Datasets
+ [x] % Increase in Avaiation and Shipping
+ [x] Extract Figures for Aviation and Shipping
+ [ ] % of Total Emissions by the Top 20 - 1970
+ [ ] % of Total Emissions by the Top 5 - 1970
+ [ ] % of Total Emissions by the Top 20 - 2023
+ [ ] % of Total Emissions by the Top 5 - 2023
+ [ ] Total CO2 Emissions for Each Year
+ [x] Grand Total Emissions of Co2
+ [ ] Create a ToC
+ [ ] Create A Visual/Dashboard



***

An EDA of CO2 emmisons based on EDGAR(Emissions Database for Global Atmospheric Research) data.


```python
# Import
# To read Excel files install openpyxl, 'pip install openpyxl'.
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the Excel file
file_path = 'data/EDGAR_2024_GHG_booklet_2024_fossilCO2only.xlsx' 
excel_file = pd.ExcelFile(file_path)
```


```python
# Get the sheet names
sheet_names = excel_file.sheet_names
print(sheet_names)
```

    ['info', 'citations and references', 'fossil_CO2_totals_by_country', 'fossil_CO2_by_sector_country_su', 'fossil_CO2_per_GDP_by_country', 'fossil_CO2_per_capita_by_countr']
    


```python

# Load a specific 'fossil_CO2_totals_by_country' sheet into a DataFrame
# You can load the other sheets here for additional Analysis
data = pd.read_excel(file_path, sheet_name='fossil_CO2_totals_by_country')

# Inspect the Data  
print(data.head())
print(data.info())
print(data.describe())
```

      Substance EDGAR Country Code                 Country        1970  \
    0       CO2                ABW                   Aruba    0.025214   
    1       CO2                AFG             Afghanistan    1.733920   
    2       CO2                AGO                  Angola    8.933899   
    3       CO2                AIA                Anguilla    0.002178   
    4       CO2                AIR  International Aviation  169.900399   
    
             1971        1972        1973        1974        1975        1976  \
    0    0.028828    0.039472    0.044289    0.043469    0.057396    0.056423   
    1    1.733710    1.693584    1.733905    2.190318    2.028967    1.892642   
    2    8.519513   10.366104   11.346996   11.806561   10.904653    7.291981   
    3    0.002178    0.002273    0.002118    0.002360    0.002594    0.002444   
    4  169.900399  179.759531  187.494406  180.478129  174.582471  174.907983   
    
       ...        2014        2015        2016        2017        2018  \
    0  ...    0.440689    0.462026    0.484889    0.466592    0.465881   
    1  ...    7.825741    8.346521    7.527594    8.066138    7.932005   
    2  ...   30.887264   33.097499   31.285803   27.942099   26.258887   
    3  ...    0.027917    0.028027    0.028363    0.029087    0.028247   
    4  ...  507.505761  536.213680  560.173839  589.919315  615.937542   
    
             2019        2020        2021        2022        2023  
    0    0.557917    0.452553    0.500635    0.502693    0.530026  
    1    7.249069    7.054133    7.930781    8.259915    8.707350  
    2   27.573216   20.710918   25.262832   27.353038   28.229928  
    3    0.027604    0.022804    0.022018    0.021861    0.022956  
    4  625.141435  298.655678  331.317425  411.474866  491.632308  
    
    [5 rows x 57 columns]
    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 214 entries, 0 to 213
    Data columns (total 57 columns):
     #   Column              Non-Null Count  Dtype  
    ---  ------              --------------  -----  
     0   Substance           212 non-null    object 
     1   EDGAR Country Code  212 non-null    object 
     2   Country             212 non-null    object 
     3   1970                212 non-null    float64
     4   1971                212 non-null    float64
     5   1972                212 non-null    float64
     6   1973                212 non-null    float64
     7   1974                212 non-null    float64
     8   1975                212 non-null    float64
     9   1976                212 non-null    float64
     10  1977                212 non-null    float64
     11  1978                212 non-null    float64
     12  1979                212 non-null    float64
     13  1980                212 non-null    float64
     14  1981                212 non-null    float64
     15  1982                212 non-null    float64
     16  1983                212 non-null    float64
     17  1984                212 non-null    float64
     18  1985                212 non-null    float64
     19  1986                212 non-null    float64
     20  1987                212 non-null    float64
     21  1988                212 non-null    float64
     22  1989                212 non-null    float64
     23  1990                212 non-null    float64
     24  1991                212 non-null    float64
     25  1992                212 non-null    float64
     26  1993                212 non-null    float64
     27  1994                212 non-null    float64
     28  1995                212 non-null    float64
     29  1996                212 non-null    float64
     30  1997                212 non-null    float64
     31  1998                212 non-null    float64
     32  1999                212 non-null    float64
     33  2000                212 non-null    float64
     34  2001                212 non-null    float64
     35  2002                212 non-null    float64
     36  2003                212 non-null    float64
     37  2004                212 non-null    float64
     38  2005                212 non-null    float64
     39  2006                212 non-null    float64
     40  2007                212 non-null    float64
     41  2008                212 non-null    float64
     42  2009                212 non-null    float64
     43  2010                212 non-null    float64
     44  2011                212 non-null    float64
     45  2012                212 non-null    float64
     46  2013                212 non-null    float64
     47  2014                212 non-null    float64
     48  2015                212 non-null    float64
     49  2016                212 non-null    float64
     50  2017                212 non-null    float64
     51  2018                212 non-null    float64
     52  2019                212 non-null    float64
     53  2020                212 non-null    float64
     54  2021                212 non-null    float64
     55  2022                212 non-null    float64
     56  2023                212 non-null    float64
    dtypes: float64(54), object(3)
    memory usage: 95.4+ KB
    None
                   1970          1971          1972          1973          1974  \
    count    212.000000    212.000000    212.000000    212.000000    212.000000   
    mean     165.187547    164.593604    172.811704    182.994107    182.107000   
    std     1156.059764   1149.393923   1207.690640   1277.712318   1270.065099   
    min        0.000781      0.000808      0.000830      0.000849      0.000866   
    25%        0.286447      0.286884      0.318343      0.343017      0.365587   
    50%        3.386873      3.597102      3.847670      4.354438      4.416961   
    75%       28.495989     28.027408     30.036502     32.365149     31.981332   
    max    15751.858044  15683.389817  16481.436077  17464.383654  17400.275859   
    
                   1975          1976          1977          1978          1979  \
    count    212.000000    212.000000    212.000000    212.000000    212.000000   
    mean     181.002229    191.552881    196.688969    203.219252    209.009110   
    std     1261.219562   1334.127097   1373.062121   1416.315701   1454.302602   
    min        0.000880      0.000893      0.000903      0.000913      0.000923   
    25%        0.385887      0.352417      0.394585      0.401558      0.452316   
    50%        4.937966      5.336292      4.912663      5.285625      5.108881   
    75%       34.740841     37.028400     38.140764     38.765811     40.364992   
    max    17328.558005  18317.005105  18871.708706  19491.220885  20031.856482   
    
           ...          2014          2015          2016          2017  \
    count  ...    212.000000    212.000000    212.000000    212.000000   
    mean   ...    357.931300    357.014848    358.217444    364.215338   
    std    ...   2640.222845   2628.672453   2636.405088   2681.270458   
    min    ...      0.001999      0.001999      0.001999      0.002013   
    25%    ...      1.689968      1.598465      1.643029      1.802726   
    50%    ...      9.933750     10.577303     10.712506     10.877226   
    75%    ...     65.950974     67.545226     67.691992     68.810767   
    max    ...  36427.769713  36300.466451  36423.660699  37047.472031   
    
                   2018          2019          2020          2021          2022  \
    count    212.000000    212.000000    212.000000    212.000000    212.000000   
    mean     372.634995    372.835024    353.536811    372.998986    373.821483   
    std     2753.141689   2762.651851   2636.710472   2779.917529   2786.844016   
    min        0.002029      0.002045      0.002059      0.002073      0.002089   
    25%        1.956477      1.974339      2.024798      2.149692      2.277833   
    50%       12.212169     12.533925     11.492360     12.185316     12.472898   
    75%       66.465855     69.363412     66.917612     65.511073     63.795406   
    max    37974.553886  38066.434146  36154.308044  38121.014981  38246.624061   
    
                   2023  
    count    212.000000  
    mean     379.999726  
    std     2851.542226  
    min        0.002103  
    25%        2.378238  
    50%       12.050200  
    75%       64.702804  
    max    39023.937039  
    
    [8 rows x 54 columns]
    


```python
# Check for missing values
print(data.isnull().sum())
```

    Substance             2
    EDGAR Country Code    2
    Country               2
    1970                  2
    1971                  2
    1972                  2
    1973                  2
    1974                  2
    1975                  2
    1976                  2
    1977                  2
    1978                  2
    1979                  2
    1980                  2
    1981                  2
    1982                  2
    1983                  2
    1984                  2
    1985                  2
    1986                  2
    1987                  2
    1988                  2
    1989                  2
    1990                  2
    1991                  2
    1992                  2
    1993                  2
    1994                  2
    1995                  2
    1996                  2
    1997                  2
    1998                  2
    1999                  2
    2000                  2
    2001                  2
    2002                  2
    2003                  2
    2004                  2
    2005                  2
    2006                  2
    2007                  2
    2008                  2
    2009                  2
    2010                  2
    2011                  2
    2012                  2
    2013                  2
    2014                  2
    2015                  2
    2016                  2
    2017                  2
    2018                  2
    2019                  2
    2020                  2
    2021                  2
    2022                  2
    2023                  2
    dtype: int64
    


```python
# Check for rows where all columns are missing
# As we can see from above we have 2 missing values for each coloumn which could be that we have two rows with no data
missing_rows = data[data.isnull().all(axis=1)]
print(missing_rows)
```

        Substance EDGAR Country Code Country  1970  1971  1972  1973  1974  1975  \
    210       NaN                NaN     NaN   NaN   NaN   NaN   NaN   NaN   NaN   
    212       NaN                NaN     NaN   NaN   NaN   NaN   NaN   NaN   NaN   
    
         1976  ...  2014  2015  2016  2017  2018  2019  2020  2021  2022  2023  
    210   NaN  ...   NaN   NaN   NaN   NaN   NaN   NaN   NaN   NaN   NaN   NaN  
    212   NaN  ...   NaN   NaN   NaN   NaN   NaN   NaN   NaN   NaN   NaN   NaN  
    
    [2 rows x 57 columns]
    


```python
# Let's drop thos emissing rows
# Drop rows where all columns are missing
data_cleaned = data.dropna(how='all')

# Display the first few rows of the cleaned dataset
print(data_cleaned.head())

# Check if the rows were successfully dropped
print(data_cleaned.isnull().sum())
```

      Substance EDGAR Country Code                 Country        1970  \
    0       CO2                ABW                   Aruba    0.025214   
    1       CO2                AFG             Afghanistan    1.733920   
    2       CO2                AGO                  Angola    8.933899   
    3       CO2                AIA                Anguilla    0.002178   
    4       CO2                AIR  International Aviation  169.900399   
    
             1971        1972        1973        1974        1975        1976  \
    0    0.028828    0.039472    0.044289    0.043469    0.057396    0.056423   
    1    1.733710    1.693584    1.733905    2.190318    2.028967    1.892642   
    2    8.519513   10.366104   11.346996   11.806561   10.904653    7.291981   
    3    0.002178    0.002273    0.002118    0.002360    0.002594    0.002444   
    4  169.900399  179.759531  187.494406  180.478129  174.582471  174.907983   
    
       ...        2014        2015        2016        2017        2018  \
    0  ...    0.440689    0.462026    0.484889    0.466592    0.465881   
    1  ...    7.825741    8.346521    7.527594    8.066138    7.932005   
    2  ...   30.887264   33.097499   31.285803   27.942099   26.258887   
    3  ...    0.027917    0.028027    0.028363    0.029087    0.028247   
    4  ...  507.505761  536.213680  560.173839  589.919315  615.937542   
    
             2019        2020        2021        2022        2023  
    0    0.557917    0.452553    0.500635    0.502693    0.530026  
    1    7.249069    7.054133    7.930781    8.259915    8.707350  
    2   27.573216   20.710918   25.262832   27.353038   28.229928  
    3    0.027604    0.022804    0.022018    0.021861    0.022956  
    4  625.141435  298.655678  331.317425  411.474866  491.632308  
    
    [5 rows x 57 columns]
    Substance             0
    EDGAR Country Code    0
    Country               0
    1970                  0
    1971                  0
    1972                  0
    1973                  0
    1974                  0
    1975                  0
    1976                  0
    1977                  0
    1978                  0
    1979                  0
    1980                  0
    1981                  0
    1982                  0
    1983                  0
    1984                  0
    1985                  0
    1986                  0
    1987                  0
    1988                  0
    1989                  0
    1990                  0
    1991                  0
    1992                  0
    1993                  0
    1994                  0
    1995                  0
    1996                  0
    1997                  0
    1998                  0
    1999                  0
    2000                  0
    2001                  0
    2002                  0
    2003                  0
    2004                  0
    2005                  0
    2006                  0
    2007                  0
    2008                  0
    2009                  0
    2010                  0
    2011                  0
    2012                  0
    2013                  0
    2014                  0
    2015                  0
    2016                  0
    2017                  0
    2018                  0
    2019                  0
    2020                  0
    2021                  0
    2022                  0
    2023                  0
    dtype: int64
    


```python
# Display the data types of all columns
print(data.dtypes)
```

    Substance              object
    EDGAR Country Code     object
    Country                object
    1970                  float64
    1971                  float64
    1972                  float64
    1973                  float64
    1974                  float64
    1975                  float64
    1976                  float64
    1977                  float64
    1978                  float64
    1979                  float64
    1980                  float64
    1981                  float64
    1982                  float64
    1983                  float64
    1984                  float64
    1985                  float64
    1986                  float64
    1987                  float64
    1988                  float64
    1989                  float64
    1990                  float64
    1991                  float64
    1992                  float64
    1993                  float64
    1994                  float64
    1995                  float64
    1996                  float64
    1997                  float64
    1998                  float64
    1999                  float64
    2000                  float64
    2001                  float64
    2002                  float64
    2003                  float64
    2004                  float64
    2005                  float64
    2006                  float64
    2007                  float64
    2008                  float64
    2009                  float64
    2010                  float64
    2011                  float64
    2012                  float64
    2013                  float64
    2014                  float64
    2015                  float64
    2016                  float64
    2017                  float64
    2018                  float64
    2019                  float64
    2020                  float64
    2021                  float64
    2022                  float64
    2023                  float64
    dtype: object
    


```python
# Display the cleaned column names
print(data_cleaned.columns)

```

    Index([         'Substance', 'EDGAR Country Code',            'Country',
                           1970,                 1971,                 1972,
                           1973,                 1974,                 1975,
                           1976,                 1977,                 1978,
                           1979,                 1980,                 1981,
                           1982,                 1983,                 1984,
                           1985,                 1986,                 1987,
                           1988,                 1989,                 1990,
                           1991,                 1992,                 1993,
                           1994,                 1995,                 1996,
                           1997,                 1998,                 1999,
                           2000,                 2001,                 2002,
                           2003,                 2004,                 2005,
                           2006,                 2007,                 2008,
                           2009,                 2010,                 2011,
                           2012,                 2013,                 2014,
                           2015,                 2016,                 2017,
                           2018,                 2019,                 2020,
                           2021,                 2022,                 2023],
          dtype='object')
    


```python
# Convert all columns to string types 
data_cleaned = data_cleaned.astype(str)

# Clean column names
#data.columns = data.columns.str.strip()  # Remove leading and trailing spaces
#data.columns = data.columns.str.replace('\n', ' ')  # Replace newline characters with spaces

# Display the cleaned column names
print(data.columns)

# Display the data types of all columns
print(data_cleaned.dtypes)
```

    Index([         'Substance', 'EDGAR Country Code',            'Country',
                           1970,                 1971,                 1972,
                           1973,                 1974,                 1975,
                           1976,                 1977,                 1978,
                           1979,                 1980,                 1981,
                           1982,                 1983,                 1984,
                           1985,                 1986,                 1987,
                           1988,                 1989,                 1990,
                           1991,                 1992,                 1993,
                           1994,                 1995,                 1996,
                           1997,                 1998,                 1999,
                           2000,                 2001,                 2002,
                           2003,                 2004,                 2005,
                           2006,                 2007,                 2008,
                           2009,                 2010,                 2011,
                           2012,                 2013,                 2014,
                           2015,                 2016,                 2017,
                           2018,                 2019,                 2020,
                           2021,                 2022,                 2023],
          dtype='object')
    Substance             object
    EDGAR Country Code    object
    Country               object
    1970                  object
    1971                  object
    1972                  object
    1973                  object
    1974                  object
    1975                  object
    1976                  object
    1977                  object
    1978                  object
    1979                  object
    1980                  object
    1981                  object
    1982                  object
    1983                  object
    1984                  object
    1985                  object
    1986                  object
    1987                  object
    1988                  object
    1989                  object
    1990                  object
    1991                  object
    1992                  object
    1993                  object
    1994                  object
    1995                  object
    1996                  object
    1997                  object
    1998                  object
    1999                  object
    2000                  object
    2001                  object
    2002                  object
    2003                  object
    2004                  object
    2005                  object
    2006                  object
    2007                  object
    2008                  object
    2009                  object
    2010                  object
    2011                  object
    2012                  object
    2013                  object
    2014                  object
    2015                  object
    2016                  object
    2017                  object
    2018                  object
    2019                  object
    2020                  object
    2021                  object
    2022                  object
    2023                  object
    dtype: object
    


```python
year_columns = data_cleaned.filter(regex=r'^\d{4}$').columns
print(year_columns)
```

    Index([1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981,
           1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
           1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
           2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
           2018, 2019, 2020, 2021, 2022, 2023],
          dtype='object')
    


```python
# Convert Index to list
year_columns_list = year_columns.tolist()

print(year_columns_list)

# Access the column by its name
print(year_columns_list[year_columns_list.index(1970)])

```

    [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023]
    1970
    


```python
# Drop rows where all columns are missing
data_cleaned = data.dropna(how='all')
```

Calculate Total CO2 Emissions and Percentage Contribution


```python
# Convert all columns to string types
# This is because 
#data = data.astype(str)

# Use regex to filter columns that contain the year (assuming years are four-digit numbers)
year_columns = data.filter(regex=r'^\d{4}$').columns

# Convert year columns to numeric
data[year_columns] = data[year_columns].apply(pd.to_numeric, errors='coerce')

# Calculate total CO2 emissions for each country
data['Total_CO2'] = data[year_columns].sum(axis=1)

# Identify the top 20 most polluting countries
top_20_countries = data.nlargest(20, 'Total_CO2')

# Calculate percentage contribution for each year
for year in year_columns:
    total_emissions_year = data[year].sum()
    top_20_countries[f'{year}_Percentage'] = (top_20_countries[year] / total_emissions_year) * 100

# Display the top 20 countries with their total CO2 emissions and percentage contribution
#print(top_20_countries[['Country', 'Total_CO2'] + [f'{year}_Percentage' for year in year_columns]])
print(top_20_countries[['Country', 'Total_CO2']])

```

                                    Country     Total_CO2
    213                        GLOBAL TOTAL  1.424122e+06
    36                                China  2.779245e+05
    198                       United States  2.761683e+05
    211                                EU27  1.925624e+05
    160                              Russia  9.865735e+04
    99                                Japan  6.067946e+04
    90                                India  5.948510e+04
    50                              Germany  5.013919e+04
    69                       United Kingdom  2.899794e+04
    33                               Canada  2.683242e+04
    165              International Shipping  2.600512e+04
    196                             Ukraine  2.460650e+04
    66                    France and Monaco  2.174306e+04
    96   Italy, San Marino and the Holy See  2.143453e+04
    106                         South Korea  2.040593e+04
    151                              Poland  1.938792e+04
    92                                 Iran  1.933123e+04
    123                              Mexico  1.877987e+04
    207                        South Africa  1.868865e+04
    4                International Aviation  1.807156e+04
    


```python
# Return the Global Total for 1970 and 2023

# Extract the row for Global Total
global_total_row = data_cleaned[data_cleaned['Country'] == 'GLOBAL TOTAL']
print(global_total_row)

# Return the Global Total for 1970
global_total_1970 = global_total_row[1970].values[0]
# Return the Global Total for 2023
global_total_2023 = global_total_row[2023].values[0]
print(f"Global Total Co2 Emmisions - 1970: {global_total_1970}")
print(f"Global Total Co2 Emmisions - 2023: {global_total_2023}")

# Calculate the grand total of all years combined
grand_total = global_total_row[year_columns].sum(axis=1).values[0]
print(f"Grand Total of Emissions 1970 -2023: {grand_total}")  
```

        Substance EDGAR Country Code       Country          1970          1971  \
    213       CO2       GLOBAL TOTAL  GLOBAL TOTAL  15751.858044  15683.389817   
    
                 1972          1973          1974          1975          1976  \
    213  16481.436077  17464.383654  17400.275859  17328.558005  18317.005105   
    
         ...          2014          2015          2016          2017  \
    213  ...  36427.769713  36300.466451  36423.660699  37047.472031   
    
                 2018          2019          2020          2021          2022  \
    213  37974.553886  38066.434146  36154.308044  38121.014981  38246.624061   
    
                 2023  
    213  39023.937039  
    
    [1 rows x 57 columns]
    Global Total Co2 Emmisions - 1970: 15751.858044223
    Global Total Co2 Emmisions - 2023: 39023.937038738
    Grand Total of Emissions 1970 -2023: 1424121.724861018
    


```python
# Extract Figures for Aviation - 'International Aviation'

# Extarct Aviation Row
avaiation_row = data_cleaned[data_cleaned['Country'] == 'International Aviation']
print(avaiation_row)

# Return the Aviation Total for 1970
avaiation_total_1970 = avaiation_row[1970].values[0]

# Return the Global Total for 2023
avaiation_total_2023 = avaiation_row[2023].values[0]
print(f"International Aviation Total Co2 Emmisions - 1970: {global_total_1970}")
print(f"International Aviation Total Co2 Emmisions - 2023: {global_total_2023}")

# Total Emissions for International Aviation - 1970 -2023
aviation_grand_total = avaiation_row[year_columns].sum(axis=1).values[0]
print(f"Total Emissions for International Aviation - 1970 -2023: {aviation_grand_total}") 



```

      Substance EDGAR Country Code                 Country        1970  \
    4       CO2                AIR  International Aviation  169.900399   
    
             1971        1972        1973        1974        1975        1976  \
    4  169.900399  179.759531  187.494406  180.478129  174.582471  174.907983   
    
       ...        2014       2015        2016        2017        2018        2019  \
    4  ...  507.505761  536.21368  560.173839  589.919315  615.937542  625.141435   
    
             2020        2021        2022        2023  
    4  298.655678  331.317425  411.474866  491.632308  
    
    [1 rows x 57 columns]
    International Aviation Total Co2 Emmisions - 1970: 15751.858044223
    International Aviation Total Co2 Emmisions - 2023: 39023.937038738
    Total Emissions for International Aviation - 1970 -2023: 18071.560975227614
    


```python
# International Aviation as a % Global Total 


# Calculate the percentage of global emissions for each year
aviation_percentage_emissions = {}  # Initialize an empty dictionary to store the percentage emissions for each year

for year in year_columns:  # Loop through each year in the year_columns
    global_total = global_total_row[year].values[0]  # Get the global total CO2 emissions for the current year
    shipping_total = avaiation_row[year].values[0]  # Get the CO2 emissions for International Shipping for the current year
    aviation_percentage_emissions[year] = (shipping_total / global_total) * 100  # Calculate the percentage of global emissions and store it in the dictionary


# Convert the dictionary to a DataFrame for plotting
aviation_percentage_emissions_df = pd.DataFrame(list(aviation_percentage_emissions.items()), columns=['Year', 'Percentage'])
import matplotlib.pyplot as plt

# Create a bar chart
plt.figure(figsize=(14, 8))
plt.bar(aviation_percentage_emissions_df['Year'], aviation_percentage_emissions_df['Percentage'], color='skyblue')
plt.xlabel('Year')
plt.ylabel('Percentage of Global CO2 Emissions (%)')
plt.title('International Aviation CO2 Emissions as a Percentage of Global Emissions (1970-2023)')
plt.xticks(rotation=45, ha='right')
plt.show()
```


    
![image info](../co2_emmisions_eda_files/co2_emmisions_eda_18_0.png)
    



```python
# Extract Figures for = Shipping - 'International Shipping'

# Extarct Shipping Row
shipping_row = data_cleaned[data_cleaned['Country'] == 'International Shipping']
print(avaiation_row)

# Return the Aviation Total for 1970
shipping_total_1970 = shipping_row[1970].values[0]
print(f"International Shipping Total Co2 Emmisions - 1970: {shipping_total_1970}")

# Return the Global Total for 2023
shipping_total_2023 = shipping_row[2023].values[0]
print(f"International Shipping Total Co2 Emmisions - 2023: {shipping_total_2023}")

# Total Emissions for International Shipping - 1970 -2023
shipping_grand_total = shipping_row[year_columns].sum(axis=1).values[0]
print(f"Total Emissions for International Shipping - 1970 -2023: {shipping_grand_total}") 

```

      Substance EDGAR Country Code                 Country        1970  \
    4       CO2                AIR  International Aviation  169.900399   
    
             1971        1972        1973        1974        1975        1976  \
    4  169.900399  179.759531  187.494406  180.478129  174.582471  174.907983   
    
       ...        2014       2015        2016        2017        2018        2019  \
    4  ...  507.505761  536.21368  560.173839  589.919315  615.937542  625.141435   
    
             2020        2021        2022        2023  
    4  298.655678  331.317425  411.474866  491.632308  
    
    [1 rows x 57 columns]
    International Shipping Total Co2 Emmisions - 1970: 353.84635222099
    International Shipping Total Co2 Emmisions - 2023: 706.32042124359
    Total Emissions for International Shipping - 1970 -2023: 26005.11654870811
    


```python
# International Shipping as a % Global Total 


# Calculate the percentage of global emissions for each year
percentage_emissions = {}  # Initialize an empty dictionary to store the percentage emissions for each year

for year in year_columns:  # Loop through each year in the year_columns
    global_total = global_total_row[year].values[0]  # Get the global total CO2 emissions for the current year
    shipping_total = shipping_row[year].values[0]  # Get the CO2 emissions for International Shipping for the current year
    percentage_emissions[year] = (shipping_total / global_total) * 100  # Calculate the percentage of global emissions and store it in the dictionary


# Convert the dictionary to a DataFrame for plotting
percentage_emissions_df = pd.DataFrame(list(percentage_emissions.items()), columns=['Year', 'Percentage'])
import matplotlib.pyplot as plt

# Create a bar chart
plt.figure(figsize=(14, 8))
plt.bar(percentage_emissions_df['Year'], percentage_emissions_df['Percentage'], color='skyblue')
plt.xlabel('Year')
plt.ylabel('Percentage of Global CO2 Emissions (%)')
plt.title('International Shipping CO2 Emissions as a Percentage of Global Emissions (1970-2023)')
plt.xticks(rotation=45, ha='right')
plt.show()


```


    
![image info](../co2_emmisions_eda_files/co2_emmisions_eda_20_0.png)
    



```python
################################# REMOVE GLOBAL TODAT FROM TOP 20 and TOP 5 ##################################
```

# % of Total Emissions by the Top 20 - 1970


```python
# Calculate total CO2 emissions for each country in 1970
data['Total_1970'] = data[1970].astype(float)

# Identify the top 20 most polluting countries in 1970
top_20_1970 = data.nlargest(20, 'Total_1970')

# Calculate the percentage of total emissions by the top 20 countries in 1970
total_emissions_1970 = data[1970].astype(float).sum()
top_20_percentage_1970 = (top_20_1970['Total_1970'].sum() / total_emissions_1970) * 100

print(f"% of Total Emissions by the Top 20 - 1970: {top_20_percentage_1970:.2f}%")

```

    % of Total Emissions by the Top 20 - 1970: 91.59%
    

# % of Total Emissions by the Top 5 - 1970


```python
# Identify the top 5 most polluting countries in 1970
top_5_1970 = data.nlargest(5, 'Total_1970')

# Calculate the percentage of total emissions by the top 5 countries in 1970
top_5_percentage_1970 = (top_5_1970['Total_1970'].sum() / total_emissions_1970) * 100

print(f"% of Total Emissions by the Top 5 - 1970: {top_5_percentage_1970:.2f}%")

```

    % of Total Emissions by the Top 5 - 1970: 74.97%
    

# % of Total Emissions by the Top 20 - 2023


```python
# Calculate total CO2 emissions for each country in 2023
data['Total_2023'] = data[2023].astype(float)

# Identify the top 20 most polluting countries in 2023
top_20_2023 = data.nlargest(20, 'Total_2023')

# Calculate the percentage of total emissions by the top 20 countries in 2023
total_emissions_2023 = data[2023].astype(float).sum()
top_20_percentage_2023 = (top_20_2023['Total_2023'].sum() / total_emissions_2023) * 100

print(f"% of Total Emissions by the Top 20 - 2023: {top_20_percentage_2023:.2f}%")

```

    % of Total Emissions by the Top 20 - 2023: 90.15%
    

# % of Total Emissions by the Top 5 - 2023


```python
# Identify the top 5 most polluting countries in 2023
top_5_2023 = data.nlargest(5, 'Total_2023')

# Calculate the percentage of total emissions by the top 5 countries in 2023
top_5_percentage_2023 = (top_5_2023['Total_2023'].sum() / total_emissions_2023) * 100

print(f"% of Total Emissions by the Top 5 - 2023: {top_5_percentage_2023:.2f}%")
print(top_5_2023)

```

    % of Total Emissions by the Top 5 - 2023: 77.50%
        Substance EDGAR Country Code        Country          1970          1971  \
    213       CO2       GLOBAL TOTAL   GLOBAL TOTAL  15751.858044  15683.389817   
    36        CO2                CHN          China    909.976242    913.419357   
    198       CO2                USA  United States   4595.062878   4459.919046   
    90        CO2                IND          India    213.934448    214.428120   
    211       CO2               EU27           EU27   3516.043820   3527.064466   
    
                 1972          1973          1974          1975          1976  \
    213  16481.436077  17464.383654  17400.275859  17328.558005  18317.005105   
    36     973.909875   1013.661370   1031.209355   1182.598584   1230.625731   
    198   4710.777160   4896.845457   4727.681218   4515.615986   4816.015256   
    90     222.963236    221.937314    237.640939    253.201702    270.693578   
    211   3673.209130   3865.983444   3806.132347   3715.356555   3975.200616   
    
         ...          2017          2018          2019          2020  \
    213  ...  37047.472031  37974.553886  38066.434146  36154.308044   
    36   ...  11037.127069  11572.416381  11850.592876  12022.432962   
    198  ...   4959.764867   5118.114833   4966.950968   4466.042820   
    90   ...   2433.783081   2573.119402   2542.035076   2318.947665   
    211  ...   3118.707522   3049.511170   2908.156852   2641.187916   
    
                 2021          2022          2023     Total_CO2    Total_1970  \
    213  38121.014981  38246.624061  39023.937039  1.424122e+06  15751.858044   
    36   12621.614750  12526.826281  13259.638954  2.779245e+05    909.976242   
    198   4755.183784   4786.630553   4682.039414  2.761683e+05   4595.062878   
    90    2548.483265   2740.820631   2955.181684  5.948510e+04    213.934448   
    211   2833.755059   2756.906302   2512.067780  1.925624e+05   3516.043820   
    
           Total_2023  
    213  39023.937039  
    36   13259.638954  
    198   4682.039414  
    90    2955.181684  
    211   2512.067780  
    
    [5 rows x 60 columns]
    
