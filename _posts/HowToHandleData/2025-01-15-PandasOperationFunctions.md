---
title: How to handle Data, and Images(17) Pandas Operation and Functions
description: Pandas Library's operation and functions
date: 2025-01-15
categories: [Handling Data and Images, Pandas]
tags: [Python, Study, Handling Data and Images, Pandas]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(17) - Pandas Operation and Functions](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(17)_Pandas_Operation_and_Functions.ipynb)

## Topics

- [Dealing with Null values](#dealing-with-null-values)
- [Series Operation](#series-operation)
- [Data Frame's math operation](#data-frames-math-operation)
- [Data Frame's Sum](#data-frames-sum)
- [Data Frame' sorting function](#data-frame-sorting-function)
- [Summary](#summary)

## Dealing with Null values
- **pd.DataFrame.notnull**: Detect existing (non-missing) values.
- **pd.DataFrame.isnull**: Detect missing values.
- **pd.DataFrame.fillna**: Fill NA/NaN values using the specified method.

```python
import pandas as pd
import numpy as np

price_dict = {
    'Apple': 1.5,
    'Banana': 2,
    'Carrot': np.nan,
    'Durian': 5
}
amount_dict = {
    'Apple': 3,
    'Banana': 2,
    'Carrot': 3,
    'Durian': 4
}

# convert dictionary into Pandas' Series
price = pd.Series(price_dict)
amount = pd.Series(amount_dict)

# Merge two Series into Data Frame
summary = pd.DataFrame({
    'Price(Dollar)': price,
    'Amount': amount
})

print(summary)
print(summary.notnull())
print(summary.isnull())

# fill the NaN value with 'No Data'
summary['Price(Dollar)'] = summary['Price(Dollar)'].fillna('No Data')
print(summary)
```

Output:
```
        Price(Dollar)  Amount
Apple             1.5       3
Banana            2.0       2
Carrot            NaN       3
Durian            5.0       4
        Price(Dollar)  Amount
Apple            True    True
Banana           True    True
Carrot          False    True
Durian           True    True
        Price(Dollar)  Amount
Apple           False   False
Banana          False   False
Carrot           True   False
Durian          False   False
       Price(Dollar)  Amount
Apple            1.5       3
Banana           2.0       2
Carrot       No Data       3
Durian           5.0       4
```

## Series Operation

```python
import pandas as pd

arr1 = pd.Series([1,2,3], index=['A', 'B', 'C'])
arr2 = pd.Series([4,5,6], index=['B', 'C', 'D'])

# adds values by key
arr = arr1.add(arr2, fill_value=0)
print(arr)
```

Output:
```
A    1.0
B    6.0
C    8.0
D    6.0
dtype: float64
```

## Data Frame's math operation

|     | Score1 | Score2 |   |         | Score1 |   |         | Score1 | Score2 |
|-----|--------|--------|---|---------|--------|---|---------|--------|--------|
| Tom | 8      | 5      | + | Tom     | 5      | = | Tom     | 13     | 5      |
| Bob | 9      | 7      | + | Bob     | 7      | = | Bob     | 16     | 7      |
|     |        |        | + | Charles | 8      | = | Charles | 8      | Null   |

```python
import pandas as pd

arr1 = pd.DataFrame([[1,2], [3,4]], index=['a', 'b'])
arr2 = pd.DataFrame([[1,2,3],[4,5,6],[7,8,9]], index = ['b', 'c', 'd'])

print(arr1,'\n')
print(arr2,'\n')

arr = arr1.add(arr2, fill_value=0)
print(arr)
```

Output:

```

0초
import pandas as pd

arr1 = pd.DataFrame([[1,2], [3,4]], index=['a', 'b'])
arr2 = pd.DataFrame([[1,2,3],[4,5,6],[7,8,9]], index = ['b', 'c', 'd'])

print(arr1,'\n')
print(arr2,'\n')

arr = arr1.add(arr2, fill_value=0)
print(arr)
   0  1
a  1  2
b  3  4 

   0  1  2
b  1  2  3
c  4  5  6
d  7  8  9 

     0    1    2
a  1.0  2.0  NaN
b  4.0  6.0  3.0
c  4.0  5.0  6.0
d  7.0  8.0  9.0
```

## Data Frame's Sum
- **pd.DataFrame.sum**: Return the sum of the values over the requested axis.

```python
import pandas as pd

arr1 = pd.DataFrame([[1,2], [3,4]], index=['a', 'b'])
arr2 = pd.DataFrame([[1,2,3],[4,5,6],[7,8,9]], index = ['b', 'c', 'd'])

arr = arr1.add(arr2, fill_value=0)
print(arr, '\n')
print('sum of column1:', arr[1].sum(), '\n')
print(arr.sum())
```

Output:

```
     0    1    2
a  1.0  2.0  NaN
b  4.0  6.0  3.0
c  4.0  5.0  6.0
d  7.0  8.0  9.0 

sum of column1: 21.0 

0    16.0
1    21.0
2    18.0
dtype: float64
```

## Data Frame' sorting function
- **pd.DataFrame.sort_values**: Sort by the values along either axis.

```python
import pandas as pd
import numpy as np

price_dict = {
    'Apple': 1.5,
    'Banana': 2,
    'Carrot': 1,
    'Durian': 5
}
amount_dict = {
    'Apple': 3,
    'Banana': 2,
    'Carrot': 3,
    'Durian': 4
}

# convert dictionary into Pandas' Series
price = pd.Series(price_dict)
amount = pd.Series(amount_dict)

# Merge two Series into Data Frame
summary = pd.DataFrame({
    'Price(Dollar)': price,
    'Amount': amount
})

print(summary)

summary = summary.sort_values('Price(Dollar)', ascending=False)
print(summary)
```

Output:

```
        Price(Dollar)  Amount
Apple             1.5       3
Banana            2.0       2
Carrot            1.0       3
Durian            5.0       4
        Price(Dollar)  Amount
Durian            5.0       4
Banana            2.0       2
Apple             1.5       3
Carrot            1.0       3
```
## Summary

- **pd.DataFrame.notnull**: Detect existing (non-missing) values.
- **pd.DataFrame.isnull**: Detect missing values.
- **pd.DataFrame.fillna**: Fill NA/NaN values using the specified method.
- **pd.DataFrame.sum**: Return the sum of the values over the requested axis.
- **pd.DataFrame.sort_values**: Sort by the values along either axis.