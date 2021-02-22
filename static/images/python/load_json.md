---
title: "Load a JSON file"
author: "Puneet Thukral"
date: 2021-01-24T00:00:00-08:00
draft: false
---

***



```python
import pandas as pd
```


```python
# Set JSON filepath
json_filepath = "data/new_json.json"
```


```python
# Read JSON File
df = pd.read_json(json_filepath,  orient='split')
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
      <th>name</th>
      <th>mfr</th>
      <th>type</th>
      <th>calories</th>
      <th>protein</th>
      <th>fat</th>
      <th>sodium</th>
      <th>fiber</th>
      <th>carbo</th>
      <th>sugars</th>
      <th>potass</th>
      <th>vitamins</th>
      <th>shelf</th>
      <th>weight</th>
      <th>cups</th>
      <th>rating</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>100% Bran</td>
      <td>N</td>
      <td>C</td>
      <td>70</td>
      <td>4</td>
      <td>1</td>
      <td>130</td>
      <td>10.0</td>
      <td>5.0</td>
      <td>6</td>
      <td>280</td>
      <td>25</td>
      <td>3</td>
      <td>1.0</td>
      <td>0.33</td>
      <td>68.402973</td>
    </tr>
    <tr>
      <th>1</th>
      <td>100% Natural Bran</td>
      <td>Q</td>
      <td>C</td>
      <td>120</td>
      <td>3</td>
      <td>5</td>
      <td>15</td>
      <td>2.0</td>
      <td>8.0</td>
      <td>8</td>
      <td>135</td>
      <td>0</td>
      <td>3</td>
      <td>1.0</td>
      <td>1.00</td>
      <td>33.983679</td>
    </tr>
    <tr>
      <th>2</th>
      <td>All-Bran</td>
      <td>K</td>
      <td>C</td>
      <td>70</td>
      <td>4</td>
      <td>1</td>
      <td>260</td>
      <td>9.0</td>
      <td>7.0</td>
      <td>5</td>
      <td>320</td>
      <td>25</td>
      <td>3</td>
      <td>1.0</td>
      <td>0.33</td>
      <td>59.425505</td>
    </tr>
    <tr>
      <th>3</th>
      <td>All-Bran with Extra Fiber</td>
      <td>K</td>
      <td>C</td>
      <td>50</td>
      <td>4</td>
      <td>0</td>
      <td>140</td>
      <td>14.0</td>
      <td>8.0</td>
      <td>0</td>
      <td>330</td>
      <td>25</td>
      <td>3</td>
      <td>1.0</td>
      <td>0.50</td>
      <td>93.704912</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Almond Delight</td>
      <td>R</td>
      <td>C</td>
      <td>110</td>
      <td>2</td>
      <td>2</td>
      <td>200</td>
      <td>1.0</td>
      <td>14.0</td>
      <td>8</td>
      <td>-1</td>
      <td>25</td>
      <td>3</td>
      <td>1.0</td>
      <td>0.75</td>
      <td>34.384843</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>72</th>
      <td>Triples</td>
      <td>G</td>
      <td>C</td>
      <td>110</td>
      <td>2</td>
      <td>1</td>
      <td>250</td>
      <td>0.0</td>
      <td>21.0</td>
      <td>3</td>
      <td>60</td>
      <td>25</td>
      <td>3</td>
      <td>1.0</td>
      <td>0.75</td>
      <td>39.106174</td>
    </tr>
    <tr>
      <th>73</th>
      <td>Trix</td>
      <td>G</td>
      <td>C</td>
      <td>110</td>
      <td>1</td>
      <td>1</td>
      <td>140</td>
      <td>0.0</td>
      <td>13.0</td>
      <td>12</td>
      <td>25</td>
      <td>25</td>
      <td>2</td>
      <td>1.0</td>
      <td>1.00</td>
      <td>27.753301</td>
    </tr>
    <tr>
      <th>74</th>
      <td>Wheat Chex</td>
      <td>R</td>
      <td>C</td>
      <td>100</td>
      <td>3</td>
      <td>1</td>
      <td>230</td>
      <td>3.0</td>
      <td>17.0</td>
      <td>3</td>
      <td>115</td>
      <td>25</td>
      <td>1</td>
      <td>1.0</td>
      <td>0.67</td>
      <td>49.787445</td>
    </tr>
    <tr>
      <th>75</th>
      <td>Wheaties</td>
      <td>G</td>
      <td>C</td>
      <td>100</td>
      <td>3</td>
      <td>1</td>
      <td>200</td>
      <td>3.0</td>
      <td>17.0</td>
      <td>3</td>
      <td>110</td>
      <td>25</td>
      <td>1</td>
      <td>1.0</td>
      <td>1.00</td>
      <td>51.592193</td>
    </tr>
    <tr>
      <th>76</th>
      <td>Wheaties Honey Gold</td>
      <td>G</td>
      <td>C</td>
      <td>110</td>
      <td>2</td>
      <td>1</td>
      <td>200</td>
      <td>1.0</td>
      <td>16.0</td>
      <td>8</td>
      <td>60</td>
      <td>25</td>
      <td>1</td>
      <td>1.0</td>
      <td>0.75</td>
      <td>36.187559</td>
    </tr>
  </tbody>
</table>
<p>77 rows × 16 columns</p>
</div>


