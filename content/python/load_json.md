---
title: "Load a JSON"
author: "Puneet Thukral"
date: 2021-01-24T00:00:00-08:00
draft: false
---


```python
import pandas as pd
```


```python
#Set JSON filepath
json_filepath = "data/load_json_example.json"
```


```python
#default is 'columns'
df = pd.read_json(json_filepath, orient="columns")
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
      <td>9012.0</td>
      <td>Rachel</td>
      <td>Booker</td>
    </tr>
    <tr>
      <th>1</th>
      <td>grey07</td>
      <td>2070.0</td>
      <td>Laura</td>
      <td>Grey</td>
    </tr>
    <tr>
      <th>2</th>
      <td>johnson81</td>
      <td>4081.0</td>
      <td>Craig</td>
      <td>Johnson</td>
    </tr>
    <tr>
      <th>3</th>
      <td>jenkins46</td>
      <td>9346.0</td>
      <td>Mary</td>
      <td>Jenkins</td>
    </tr>
    <tr>
      <th>4</th>
      <td>smith79</td>
      <td>5079.0</td>
      <td>Jamie</td>
      <td>Smith</td>
    </tr>
    <tr>
      <th>5</th>
      <td></td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>6</th>
      <td></td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>


