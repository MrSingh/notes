---
title: "For Loops Basics"
author: "Puneet Thukral"
date: 2021-02-05T12:00:00
draft: false
---

***


## Create a List of Numbers


```python
nums = [1,2,3,4,5]
```

## Print Numbers in a List Example


```python
for num in nums:
    print(num)
```

    1
    2
    3
    4
    5
    

## Continue Example


```python
#continue moves to the next iteration - in the example below when num == 4, 'Found!' will be printed and it will skip print(num) and go to the next iteration of the loop
for num in nums:
    if num == 4:
        print('Found!')
        continue
    print(num)
```

    1
    2
    3
    Found!
    5
    

## Break Example


```python
#break, breaks out of the loop
for num in nums:
    if num == 4:
        print('Found!')
        break
    print(num)
```

    1
    2
    3
    Found!
    

## Nested For Loop Example


```python
#loop within a loop
for num in nums:
    for letter in 'abc':
        print(num, letter)
```

    1 a
    1 b
    1 c
    2 a
    2 b
    2 c
    3 a
    3 b
    3 c
    4 a
    4 b
    4 c
    5 a
    5 b
    5 c
    

## For Loop Range Example


```python
#run through a loop ten times
for i in range(10):
    print(i)
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
    

## For Loop Range with Starting Point Example


```python
# run through to ten starting at 2
for i in range(2, 11):
    print(i)
```

    2
    3
    4
    5
    6
    7
    8
    9
    10
    
