---
title: "Creating Arrays with Numpy"
author: "Puneet Thukral"
date: 2021-02-11T06:00:00
slug: "creating_arrays"
draft: false
---

## Resources
[Numpy](https://numpy.org/doc/stable/user/whatisnumpy.html)


```python
# Import Numpy
import numpy as np
```


```python
# Create a list
list_1 = [1,2,3,4,5]
# Create another list # we will use this later
list_2 = [6,7,8,9,10]
```


```python
# Create a array by passing the list as an object
new_array = np.array(list_1)
new_array
```




    array([1, 2, 3, 4, 5])




```python
# Create a list of lists
list_of_lists = [list_1, list_2]
list_of_lists
```




    [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]




```python
# Create a multi-dimensional array or matrix 
matrix_array = np.array(list_of_lists)
matrix_array
```




    array([[ 1,  2,  3,  4,  5],
           [ 6,  7,  8,  9, 10]])




```python
# Check Array Data Type # Can be Mixed
matrix_array.dtype
```




    dtype('int32')




```python
# Check Number of Dimensions
matrix_array.ndim
```




    2




```python
# Check Array Shape
matrix_array.shape
```




    (2, 5)


