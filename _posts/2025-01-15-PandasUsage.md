---
title: How to handle Data, and Images(18) Pandas Usage
description: More in depth of some operations that Pandas offers and their usage
date: 2025-01-15
categories: [Handling Data and Images, Pandas]
tags: [Python, Study, Handling Data and Images, Pandas]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(18) - Pandas Usage](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(18)_Pandas_Usage.ipynb)

## Topics

- [Data Frame Masking](#data-frame-masking)
- [Data Frame Individual Operation(1)](#data-frame-individual-operation1)
- [Data Frame Individual Operation(2)](#data-frame-individual-operation2)
- [Data Frames Grouping(1)](#data-frames-grouping1)
- [Data Frames Grouping(2)](#data-frames-grouping2)
- [Data Frames Grouping(3)](#data-frames-grouping3)
- [Data Frames Grouping(4)](#data-frames-grouping4)
- [Data Frames Grouping(5)](#data-frames-grouping5)
- [Data Frame's Multiplexing](#data-frames-multiplexing)
- [Pivot Table](#pivot-table)
- [Summary](#summary)

## Data Frame Masking

```python
import numpy as np
import pandas as pd

df = pd.DataFrame(np.random.randint(1,10,(2,2)), index=[0,1], columns=['a', 'b'])

print(df,'\n')

# from column 'a', return boolean value if it's less or equal to 5
print(df['a'] <= 5, '\n')

#from column 'a' less or equal to 5, and from column 'b', less or equal to 8
print(df.query('a <= 5 and b <= 8'))
```

Output:
```
   a  b
0  2  1
1  6  1 

0     True
1    False
Name: a, dtype: bool 

   a  b
0  2  1
```

## Data Frame Individual Operation(1)

- **pd.DataFrame.apply**: Apply a function along an axis of the DataFrame.

```python
import pandas as pd

df = pd.DataFrame([[1, 2, 3, 4], [1, 2, 3, 4]], index=[0, 1], columns=["A", "B", "C", "D"])
print(df, '\n')

# add 1 to all values 
df = df.apply(lambda x: x + 1)
print(df, '\n')

# adds 1 to x
def addOne(x):
  return x + 1
  
df = df.apply(addOne)
print(df, '\n')
```

Output:
```
   A  B  C  D
0  1  2  3  4
1  1  2  3  4 

   A  B  C  D
0  2  3  4  5
1  2  3  4  5 

   A  B  C  D
0  3  4  5  6
1  3  4  5  6 
```

## Data Frame Individual Operation(2)

- **pd.DataFrame.replace**: Replace values given in to_replace with value.

```python
import pandas as pd

df = pd.DataFrame([
  ['Apple', 'Apple', 'Carrot', 'Banana'],
  ['Durian', 'Banana', 'Apple', 'Carrot']],
  index=[0, 1],
  columns=["A", "B", "C", "D"])

print(df, '\n')
# replace 'Apple' with 'Airport'
df = df.replace({"Apple": "Airport"})
print(df)
```

Output:
```
        A       B       C       D
0   Apple   Apple  Carrot  Banana
1  Durian  Banana   Apple  Carrot 

         A        B        C       D
0  Airport  Airport   Carrot  Banana
1   Durian   Banana  Airport  Carrot
```

## Data Frames Grouping(1)

- **pd.DataFrame.groupby**: Group DataFrame using a mapper or by a Series of columns.

```python
import pandas as pd

df = pd.DataFrame([
  ['Apple', 7, 'Fruit'],
  ['Banana', 3, 'Fruit'],
  ['Beef', 5, 'Meal'],
  ['Kimchi', 4, 'Meal']],
  columns=["Name", "Frequency", "Type"])

print(df, '\n')
# group DataFrame by Type by summing 'Frequency'
print(df.groupby(['Type'])['Frequency'].sum())
```

Output:
```
     Name  Frequency   Type
0   Apple          7  Fruit
1  Banana          3  Fruit
2    Beef          5   Meal
3  Kimchi          4   Meal 

Type
Fruit    10
Meal      9
Name: Frequency, dtype: int64
```

## Data Frames Grouping(2)

```python
import numpy as np
import pandas as pd

df = pd.DataFrame([
  ['Apple', 7, 5, 'Fruit'],
  ['Banana', 3, 6, 'Fruit'],
  ['Beef', 5, 2, 'Meal'],
  ['Kimchi', 4, 8, 'Meal']],
  columns=["Name", "Frequency", "Importance", "Type"])

print(df,'\n')
# after grouping by 'Type' get min, max, average of 'Frequency' and 'Importance'
print(df.groupby(["Type"]).aggregate({'Frequency': ['min', 'max', np.average], 'Importance': ['min', 'max', np.average]}))
```

Output:
```
     Name  Frequency  Importance   Type
0   Apple          7           5  Fruit
1  Banana          3           6  Fruit
2    Beef          5           2   Meal
3  Kimchi          4           8   Meal 

      Frequency             Importance            
            min max average        min max average
Type                                              
Fruit         3   7     5.0          5   6     5.5
Meal          4   5     4.5          2   8     5.0
```

## Data Frames Grouping(3)

- **pd.DataFrame.filter**: Subset the dataframe rows or columns according to the specified index labels.

```python
import pandas as pd

df = pd.DataFrame([
  ['Apple', 7, 5, 'Fruit'],
  ['Banana', 3, 6, 'Fruit'],
  ['Beef', 5, 2, 'Meal'],
  ['Kimchi', 4, 8, 'Meal']],
  columns=["Name", "Frequency", "Importance", "Type"])


def my_filter(data):
  return data["Frequency"].mean() >= 5


print(df, '\n')
# After grouping by 'Type' return only the ones where 'Frequency' mean is bigger or equal to 5
df = df.groupby("Type").filter(my_filter)
print(df)
```

Output:
```
     Name  Frequency  Importance   Type
0   Apple          7           5  Fruit
1  Banana          3           6  Fruit
2    Beef          5           2   Meal
3  Kimchi          4           8   Meal 

     Name  Frequency  Importance   Type
0   Apple          7           5  Fruit
1  Banana          3           6  Fruit
```

## Data Frames Grouping(4)

- **pd.DataFrameGroupBy.get_group**: Construct DataFrame from group with provided name

```python
import pandas as pd

df = pd.DataFrame([
  ['Apple', 7, 5, 'Fruit'],
  ['Banana', 3, 6, 'Fruit'],
  ['Beef', 5, 2, 'Meal'],
  ['Kimchi', 4, 8, 'Meal']],
  columns=["Name", "Frequency", "Importance", "Type"])

# after grouping 'Type', get_groups with 'Fruit' as Type
df = df.groupby("Type").get_group("Fruit")
print(df)
```

Output:
```
     Name  Frequency  Importance   Type
0   Apple          7           5  Fruit
1  Banana          3           6  Fruit
```

## Data Frames Grouping(5)

```python
import pandas as pd

df = pd.DataFrame([
  ['Apple', 7, 5, 'Fruit'],
  ['Banana', 3, 6, 'Fruit'],
  ['Beef', 5, 2, 'Meal'],
  ['Kimchi', 4, 8, 'Meal']],
  columns=["Name", "Frequency", "Importance", "Type"])

# create a column 'Gap' where Gap = Frequency - Frequency.mean() from Type, then reset index (since we're using .apply)
df["Gap"] = df.groupby("Type")["Frequency"].apply(lambda x: x - x.mean()).reset_index(drop = True)
print(df)
```

Output:
```
     Name  Frequency  Importance   Type  Gap
0   Apple          7           5  Fruit  2.0
1  Banana          3           6  Fruit -2.0
2    Beef          5           2   Meal  0.5
3  Kimchi          4           8   Meal -0.5
```

## Data Frame's Multiplexing
```python
import numpy as np
import pandas as pd

df = pd.DataFrame(
  np.random.randint(1, 10, (4, 4)),
  index=[['1st', '1st', '2nd', '2nd'], ['attk', 'defend', 'attk', 'defend']],
  columns=['1', '2', '3', '4']
)

print(df, '\n')
# get column '1', '2', from '2nd' as a row
print(df[["1", "2"]].loc["2nd"])
```

Output:
```
            1  2  3  4
1st attk    5  8  6  6
    defend  2  1  8  7
2nd attk    3  7  2  5
    defend  8  8  2  8 

        1  2
attk    3  7
defend  8  8
```

## Pivot Table
- **pandas.pivot_table**: Create a spreadsheet-style pivot table as a DataFrame.

```python
import numpy as np
import pandas as pd

df = pd.DataFrame([
    ['Apple', 7, 5, 'Fruit'],
    ['Banana', 3, 6, 'Fruit'],
    ['Coconut', 2, 6, 'Fruit'],
    ['Rice', 8, 2, 'Meal'],
    ['Beef', 5, 2, 'Meal'],
    ['Kimchi', 4, 8, 'Meal']],
   columns=["Name", "Frequency", "Importance", "Type"])

print(df, '\n')
# from 'Importance', make a new Data Frame with column as 'Type' and get the max value from 'Frequency'
df = df.pivot_table(
    index="Importance", columns="Type", values="Frequency",
    aggfunc='max'
)
print(df)
```

Output:
```
      Name  Frequency  Importance   Type
0    Apple          7           5  Fruit
1   Banana          3           6  Fruit
2  Coconut          2           6  Fruit
3     Rice          8           2   Meal
4     Beef          5           2   Meal
5   Kimchi          4           8   Meal 

Type        Fruit  Meal
Importance             
2             NaN   8.0
5             7.0   NaN
6             3.0   NaN
8             NaN   4.0
```

## Summary

- **pd.DataFrame.apply**: Apply a function along an axis of the DataFrame.
- **pd.DataFrame.replace**: Replace values given in to_replace with value.
- **pd.DataFrame.groupby**: Group DataFrame using a mapper or by a Series of columns.
- **pd.DataFrame.filter**: Subset the dataframe rows or columns according to the specified index labels.
- **pd.DataFrameGroupBy.get_group**: Construct DataFrame from group with provided name
- **pandas.pivot_table**: Create a spreadsheet-style pivot table as a DataFrame.