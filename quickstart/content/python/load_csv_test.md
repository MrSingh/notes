
---
title: "Load a CSV"
author: "Puneet Thukral"
date: 07/12/2021
draft: false
---



```python
# Import Pandas
import pandas as pd
```


```python
#Load CSV file into a dataframe with Pandas
df = pd.read_csv('data/load_csv_example.csv')
#Output Dataframe
df
```


```python
# Load a csv file with no headers
df = pd.read_csv('data/load_csv_example.csv', header=None)
df
```


```python
# Load a csv file with encoding - UTF-8
df = pd.read_csv('data/load_csv_example.csv', encoding='UTF-8')
df
```


```python
# Load a csv file with specific column names
df = pd.read_csv('data/load_csv_example.csv', names=['Username', 'ID', 'First Name', 'Last Name'])
df
```


```python
# Write dataframe to csv
df.to_csv('data/dataframes_to_csv.csv')
```
