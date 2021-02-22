---
title: "While Loops Basics"
author: "Puneet Thukral"
date: 2021-02-05T12:44:38
slug: "while_loop_basics"
draft: false
---

***

## Simple While Loop


```python
# while loops until a condition is met - when x = 10 the condition is no longer met and the while loop stops
# Inistalise counter
i = 0

while i < 10:
    print(i)
    i += 1
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
    

## While Loop To Sum


```python
i = 0
sum = 0

while i < 10:
    sum = sum + i
    i += 1 # update counter
    print("Inside Loop | Sum = ", sum)
print("Outside | Loop Sum = ", sum)
```

    Inside Loop | Sum =  0
    Inside Loop | Sum =  1
    Inside Loop | Sum =  3
    Inside Loop | Sum =  6
    Inside Loop | Sum =  10
    Inside Loop | Sum =  15
    Inside Loop | Sum =  21
    Inside Loop | Sum =  28
    Inside Loop | Sum =  36
    Inside Loop | Sum =  45
    Outside | Loop Sum =  45
    

## While loop with condition and nested if statement


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
    

## Infinite Loop example - Commeneted out!


```python
# Infinite Loop - DON'T DO IT!
# x = 0

# while True:
#     print(x)
#     x += 1

```
