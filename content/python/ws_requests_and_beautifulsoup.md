---
title: "Requests and Beautiful Soup"
Description: "Requesting a web page as an object and then usining Beautiful Soup to access various elemets of that object."
date: 2021-01-29T14:50:18Z
draft: false
---

***


## Import Modules


```python
import requests
from bs4 import BeautifulSoup
# Example adapted from the links below
# https://requests.readthedocs.io/en/master/
# https://www.crummy.com/software/BeautifulSoup/bs4/doc/
```

## Request a Web Page


```python
html_page = requests.get('https://www.crummy.com/software/BeautifulSoup/bs4/doc/', auth=('user', 'pass'))
```

## Return Page Headers


```python
# Return Page Headers
html_page.headers['content-type']
```




    'text/html; charset=UTF-8'



## Return Page Status Code


```python
# Return Page Status Code
html_page.status_code
```




    200



## Create a Beautiful Soup Object with HTML text


```python
# Create a Beautiful Soup Object with HTML text
soup = BeautifulSoup(html_page.text, 'html.parser')
```

## Prettify HTML Text


```python
# Prettify HTML Text
# print(soup.prettify()) # Uncomment this line to run this cell
```

## Return Page Title


```python
# Return Page Title
soup.title
```




    <title>Beautiful Soup Documentation — Beautiful Soup 4.9.0 documentation</title>



## Extract all Links


```python
# Extract all links
for link in soup.find_all('a'):
    print(link.get('href'))
```

    genindex.html
    #
    
    #beautiful-soup-documentation
    http://www.crummy.com/software/BeautifulSoup/
    http://www.crummy.com/software/BeautifulSoup/bs3/documentation.html
    #porting-code-to-bs4
    https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/
    http://kondou.com/BS4/
    https://www.crummy.com/software/BeautifulSoup/bs4/doc.ko/
    https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr
    https://www.crummy.com/software/BeautifulSoup/bs4/doc.ru/
    #getting-help
    https://groups.google.com/forum/?fromgroups#!forum/beautifulsoup
    #diagnose
    #quick-start
    #installing-beautiful-soup
    http://www.crummy.com/software/BeautifulSoup/bs3/documentation.html
    http://www.crummy.com/software/BeautifulSoup/download/4.x/
    #problems-after-installation
    #installing-a-parser
    http://lxml.de/
    http://code.google.com/p/html5lib/
    #differences-between-parsers
    #making-the-soup
    #id17
    #kinds-of-objects
    #tag
    #navigating-the-tree
    #searching-the-tree
    #name
    #attributes
    #multi-valued-attributes
    #navigablestring
    #navigating-the-tree
    #searching-the-tree
    #replace-with
    #navigating-the-tree
    #searching-the-tree
    #beautifulsoup
    #tag
    #navigating-the-tree
    #searching-the-tree
    #modifying-the-tree
    #tag
    #comments-and-other-special-strings
    #navigating-the-tree
    #going-down
    #navigating-using-tag-names
    #searching-the-tree
    #contents-and-children
    #descendants
    #string
    #strings-and-stripped-strings
    #going-up
    #parent
    #parents
    #going-sideways
    #next-sibling-and-previous-sibling
    #next-siblings-and-previous-siblings
    #going-back-and-forth
    #next-element-and-previous-element
    #next-elements-and-previous-elements
    #searching-the-tree
    #kinds-of-filters
    #a-string
    #a-regular-expression
    #a-list
    #true
    #a-function
    #find-all
    #id12
    #attrs
    #recursive
    #id13
    #limit
    #kwargs
    #kinds-of-filters
    #the-name-argument
    #kinds-of-filters
    #a-string
    #a-regular-expression
    #a-list
    #a-function
    #the-value-true
    #the-keyword-arguments
    #a-string
    #a-regular-expression
    #a-list
    #a-function
    #the-value-true
    #searching-by-css-class
    #multivalue
    #the-string-argument
    #a-string
    #a-regular-expression
    #a-list
    #a-function
    #the-value-true
    #the-limit-argument
    #the-recursive-argument
    #calling-a-tag-is-like-calling-find-all
    #find
    #id12
    #attrs
    #recursive
    #id13
    #kwargs
    #navigating-using-tag-names
    #find-parents-and-find-parent
    #id12
    #attrs
    #id13
    #limit
    #kwargs
    #id12
    #attrs
    #id13
    #kwargs
    #parent
    #parents
    #find-next-siblings-and-find-next-sibling
    #id12
    #attrs
    #id13
    #limit
    #kwargs
    #id12
    #attrs
    #id13
    #kwargs
    #sibling-generators
    #find-previous-siblings-and-find-previous-sibling
    #id12
    #attrs
    #id13
    #limit
    #kwargs
    #id12
    #attrs
    #id13
    #kwargs
    #sibling-generators
    #find-all-next-and-find-next
    #id12
    #attrs
    #id13
    #limit
    #kwargs
    #id12
    #attrs
    #id13
    #kwargs
    #element-generators
    #find-all-previous-and-find-previous
    #id12
    #attrs
    #id13
    #limit
    #kwargs
    #id12
    #attrs
    #id13
    #kwargs
    #element-generators
    #css-selectors
    https://facelessuser.github.io/soupsieve/
    https://facelessuser.github.io/soupsieve/
    #modifying-the-tree
    #changing-tag-names-and-attributes
    #attributes
    #modifying-string
    #append
    #extend
    #navigablestring-and-new-tag
    #insert
    #insert-before-and-insert-after
    #clear
    #extract
    #decompose
    #replace-with
    #wrap
    #unwrap
    #smooth
    #output
    #pretty-printing
    #non-pretty-printing
    #encodings
    #output-formatters
    #get-text
    #string-generators
    #specifying-the-parser-to-use
    #installing-a-parser
    #differences-between-parsers
    #encodings
    #unicode-dammit
    #output-encoding
    #unicode-dammit
    #smart-quotes
    #inconsistent-encodings
    #line-numbers
    #comparing-objects-for-equality
    #copying-beautiful-soup-objects
    #advanced-parser-customization
    #parsing-only-part-of-a-document
    #soupstrainer
    #searching-the-tree
    #id12
    #attrs
    #id13
    #kwargs
    #searching-the-tree
    #customizing-multi-valued-attributes
    #handling-duplicate-attributes
    #instantiating-custom-subclasses
    #troubleshooting
    #diagnose
    #errors-when-parsing-a-document
    #installing-a-parser
    #parser-installation
    #parser-installation
    #version-mismatch-problems
    #parsing-xml
    #parser-installation
    #other-parser-problems
    #differences-between-parsers
    http://www.w3.org/TR/html5/syntax.html#syntax
    #parsing-xml
    #miscellaneous
    http://wiki.python.org/moin/PrintFails
    #improving-performance
    http://lxml.de/
    #parser-installation
    http://pypi.python.org/pypi/cchardet/
    #parsing-only-part-of-a-document
    #translating-this-documentation
    #id18
    http://www.crummy.com/software/BeautifulSoup/bs3/download/3.x/BeautifulSoup-3.2.0.tar.gz
    http://www.crummy.com/software/BeautifulSoup/bs3/documentation.html
    #porting-code-to-bs4
    http://www.python.org/dev/peps/pep-0008/
    #you-need-a-parser
    #installing-a-parser
    #method-names
    #generators
    #string-generators
    #xml
    #entities
    #unicode-dammit
    #output-formatters
    #id19
    #string
    #multi-valued-attributes
    #id13
    #id12
    #string
    #id13
    #
    #
    #getting-help
    #quick-start
    #installing-beautiful-soup
    #problems-after-installation
    #installing-a-parser
    #making-the-soup
    #kinds-of-objects
    #tag
    #name
    #attributes
    #multi-valued-attributes
    #navigablestring
    #beautifulsoup
    #comments-and-other-special-strings
    #navigating-the-tree
    #going-down
    #navigating-using-tag-names
    #contents-and-children
    #descendants
    #string
    #strings-and-stripped-strings
    #going-up
    #parent
    #parents
    #going-sideways
    #next-sibling-and-previous-sibling
    #next-siblings-and-previous-siblings
    #going-back-and-forth
    #next-element-and-previous-element
    #next-elements-and-previous-elements
    #searching-the-tree
    #kinds-of-filters
    #a-string
    #a-regular-expression
    #a-list
    #true
    #a-function
    #find-all
    #the-name-argument
    #the-keyword-arguments
    #searching-by-css-class
    #the-string-argument
    #the-limit-argument
    #the-recursive-argument
    #calling-a-tag-is-like-calling-find-all
    #find
    #find-parents-and-find-parent
    #find-next-siblings-and-find-next-sibling
    #find-previous-siblings-and-find-previous-sibling
    #find-all-next-and-find-next
    #find-all-previous-and-find-previous
    #css-selectors
    #modifying-the-tree
    #changing-tag-names-and-attributes
    #modifying-string
    #append
    #extend
    #navigablestring-and-new-tag
    #insert
    #insert-before-and-insert-after
    #clear
    #extract
    #decompose
    #replace-with
    #wrap
    #unwrap
    #smooth
    #output
    #pretty-printing
    #non-pretty-printing
    #output-formatters
    #get-text
    #specifying-the-parser-to-use
    #differences-between-parsers
    #encodings
    #output-encoding
    #unicode-dammit
    #smart-quotes
    #inconsistent-encodings
    #line-numbers
    #comparing-objects-for-equality
    #copying-beautiful-soup-objects
    #advanced-parser-customization
    #parsing-only-part-of-a-document
    #soupstrainer
    #customizing-multi-valued-attributes
    #handling-duplicate-attributes
    #instantiating-custom-subclasses
    #troubleshooting
    #diagnose
    #errors-when-parsing-a-document
    #version-mismatch-problems
    #parsing-xml
    #other-parser-problems
    #miscellaneous
    #improving-performance
    #translating-this-documentation
    #id18
    #porting-code-to-bs4
    #you-need-a-parser
    #method-names
    #generators
    #xml
    #entities
    #id19
    _sources/index.rst.txt
    genindex.html
    #
    
    https://www.sphinx-doc.org/
    

## Extract all Text


```python
# Extracting Text
# print(soup.get_text()) # Uncomment this line to run this cell
```
