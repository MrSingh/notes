---
title: "New Format Basics"
author: "Puneet Thukral"
date: 2021-02-08T12:00:00
draft: false
---

[Resource](https://pyformat.info/)

***


## Basic Example


```python
# Name input
name = input()
```


```python
'Hello, {}'.format(name)
```




    'Hello, SpiderMan'



## Dictionary Example


```python
data = {'first': 'Spider', 'last': '-Man'}
'{first}{last}'.format(**data)
```




    'Spider-Man'



## List Example


```python
data = ['Spider', 'Man']
'{}-{}'.format(*data)
```




    'Spider-Man'



## Class/Object Example


```python
class Person(object):
    type = 'Enemies'
    names = [{'name': 'Doctor Octopus'}, {'name': 'Green Goblin'}]

'{p.type}: {p.names[0][name]} and {p.names[1][name]}'.format(p=Person()) 
```




    'Enemies: Doctor Octopus and Green Goblin'



## Datetime Example


```python
from datetime import date
'{:%Y-%m-%d}'.format(date.today())
```




    '2021-02-08'


