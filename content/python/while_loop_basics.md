---
title: "While Loops Basics"
author: "Puneet Thukral"
date: 2021-02-06T12:44:38
draft: false
---


```python

```


```python
# while loops until a condition is met - when x = 10 the condition is no longer met and the while loop stops
x = 0

while x < 10:
    print(x)
    x += 1
```

    0
    1
    2
    3
    4
    5
    6
    7
    8
    9
    


```python
# while loops until a condition is met - along with a nested if condition therefore if x is less than 10 and x is less than 5 ends the loop

x = 0

while x < 10:
    if x == 5:
        break
    print(x)
    x += 1
```

    0
    1
    2
    3
    4
    


```python
# Infinite Loop - DoN't DO IT
x = 0

while True:
    print(x)
    x += 1

```


```python

```
