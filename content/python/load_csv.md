---
title: "Load a CSV"
author: "Puneet Thukral"
date: 2020-12-07T00:00:00-07:00
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




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>user_name</th>
      <th>identifier</th>
      <th>first_name</th>
      <th>last_name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>booker12</td>
      <td>9012</td>
      <td>Rachel</td>
      <td>Booker</td>
    </tr>
    <tr>
      <th>1</th>
      <td>grey07</td>
      <td>2070</td>
      <td>Laura</td>
      <td>Grey</td>
    </tr>
    <tr>
      <th>2</th>
      <td>johnson81</td>
      <td>4081</td>
      <td>Craig</td>
      <td>Johnson</td>
    </tr>
    <tr>
      <th>3</th>
      <td>jenkins46</td>
      <td>9346</td>
      <td>Mary</td>
      <td>Jenkins</td>
    </tr>
    <tr>
      <th>4</th>
      <td>smith79</td>
      <td>5079</td>
      <td>Jamie</td>
      <td>Smith</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Load a csv file with no headers
df = pd.read_csv('data/load_csv_example.csv', header=None)
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
      <th>1</th>
      <th>2</th>
      <th>3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>user_name</td>
      <td>identifier</td>
      <td>first_name</td>
      <td>last_name</td>
    </tr>
    <tr>
      <th>1</th>
      <td>booker12</td>
      <td>9012</td>
      <td>Rachel</td>
      <td>Booker</td>
    </tr>
    <tr>
      <th>2</th>
      <td>grey07</td>
      <td>2070</td>
      <td>Laura</td>
      <td>Grey</td>
    </tr>
    <tr>
      <th>3</th>
      <td>johnson81</td>
      <td>4081</td>
      <td>Craig</td>
      <td>Johnson</td>
    </tr>
    <tr>
      <th>4</th>
      <td>jenkins46</td>
      <td>9346</td>
      <td>Mary</td>
      <td>Jenkins</td>
    </tr>
    <tr>
      <th>5</th>
      <td>smith79</td>
      <td>5079</td>
      <td>Jamie</td>
      <td>Smith</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Load a csv file with encoding - UTF-8
df = pd.read_csv('data/load_csv_example.csv', encoding='UTF-8')
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>user_name</th>
      <th>identifier</th>
      <th>first_name</th>
      <th>last_name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>booker12</td>
      <td>9012</td>
      <td>Rachel</td>
      <td>Booker</td>
    </tr>
    <tr>
      <th>1</th>
      <td>grey07</td>
      <td>2070</td>
      <td>Laura</td>
      <td>Grey</td>
    </tr>
    <tr>
      <th>2</th>
      <td>johnson81</td>
      <td>4081</td>
      <td>Craig</td>
      <td>Johnson</td>
    </tr>
    <tr>
      <th>3</th>
      <td>jenkins46</td>
      <td>9346</td>
      <td>Mary</td>
      <td>Jenkins</td>
    </tr>
    <tr>
      <th>4</th>
      <td>smith79</td>
      <td>5079</td>
      <td>Jamie</td>
      <td>Smith</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Load a csv file with specific column names
df = pd.read_csv('data/load_csv_example.csv', names=['Username', 'ID', 'First Name', 'Last Name'])
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Username</th>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>user_name</td>
      <td>identifier</td>
      <td>first_name</td>
      <td>last_name</td>
    </tr>
    <tr>
      <th>1</th>
      <td>booker12</td>
      <td>9012</td>
      <td>Rachel</td>
      <td>Booker</td>
    </tr>
    <tr>
      <th>2</th>
      <td>grey07</td>
      <td>2070</td>
      <td>Laura</td>
      <td>Grey</td>
    </tr>
    <tr>
      <th>3</th>
      <td>johnson81</td>
      <td>4081</td>
      <td>Craig</td>
      <td>Johnson</td>
    </tr>
    <tr>
      <th>4</th>
      <td>jenkins46</td>
      <td>9346</td>
      <td>Mary</td>
      <td>Jenkins</td>
    </tr>
    <tr>
      <th>5</th>
      <td>smith79</td>
      <td>5079</td>
      <td>Jamie</td>
      <td>Smith</td>
    </tr>
  </tbody>
</table>
</div>




```python
# Write dataframe to csv
df.to_csv('data/dataframes_to_csv.csv')
```


```python

```
