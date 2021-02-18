---
title: "Creating Arrays with NumPy"
author: "Puneet Thukral"
date: 2021-02-11T06:00:00
slug: "creating_arrays"
draft: false
---

## Resources
+ [NumPy](https://numpy.org/doc/stable/user/whatisnumpy.html)
+ [NumPy API](https://numpy.org/doc/stable/reference/index.html)

***



```python
# Import NumPy
import numpy as np
```


```python
# Create a list
list_1 = [1,2,3,4,5]
# Create another list # we will use this later
list_2 = [6,7,8,9,10]
```

## Create an Array with a List


```python
# Create a array by passing the list as an object
new_array = np.array(list_1)
new_array
```

## Create a multi-dimensional array or matrix 


```python
# Create a list of lists
list_of_lists = [list_1, list_2]
list_of_lists
```


```python
# Create a multi-dimensional array or matrix 
matrix_array = np.array(list_of_lists)
matrix_array
```

## Check Array Data Type, Dimension or Shape


```python
# Check Array Data Type # Can be Mixed
matrix_array.dtype
```


```python
# Check Number of Dimensions
matrix_array.ndim
```


```python
# Check Array Shape
matrix_array.shape
```

## Creating Arrays with Ones or Zeros
### These are built-in functions for creating arrays from scratch


```python
## Create Zeros Array
np.zeros(3)
```


```python
## Create Zeros Array
np.zeros((3, 2))
```


```python
## Create Ones Array
np.ones(3)
```


```python
## Create Ones Array with Shape
np.ones((3, 2))
```

## Creating Arrays with Arrange Examples



```python
#Creating Arrays with Arrange
#numpy.arange([start, ]stop, [step, ]dtype=None, *, like=None)
np.arange(3)
```


```python
np.arange(3.0)
```


```python
np.arange(2,9)
```


```python
np.arange(3,33,3)
```


```python
np.array()
```
