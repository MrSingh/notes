```python
# Load libraries
import os
import re
import fileinput
import sys
from glob import glob
import shutil
```


```python
path = '../../content/'

# Find all jupyter notebooks in all content folders
all_ipynb_files = [os.path.join(root, name)
                   for root, dirs, files in os.walk(path)
                       for name in files
                           if name.endswith((".ipynb"))]

# Remove all notebooks from checkpoint folders
ipynb_files = [ x for x in all_ipynb_files if ".ipynb_checkpoints" not in x ]

# For each file
for file in ipynb_files:
    # Convert into markdown
    os.system('jupyter nbconvert --to markdown {file}'.format(file=file))

```


```python

```
