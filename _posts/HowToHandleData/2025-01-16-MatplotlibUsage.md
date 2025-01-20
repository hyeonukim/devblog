---
title: How to handle Data, and Images(19) Matplotlib Usage
description: Drawing different types of Graphs with Matploblib
date: 2025-01-16
categories: [Handling Data and Images, Matplotlib]
tags: [Python, Study, Handling Data and Images, Matplotlib]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(19) - Matplotlib Usage](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(19)_Matplotlib_Usage.ipynb)

## Topics

- [Drawing Line Graph](#drawing-line-graph)
- [Drawing Bar Graph](#drawing-bar-graph)
- [Drawing Stacked Bar Chart](#drawing-stacked-bar-chart)
- [Drawing Scatter Graph](#drawing-scatter-graph)
- [Summary](#summary)

## Drawing Line Graph
- [**matplotlib.pyplot.plot()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html): Plot y versus x as lines and/or markers.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-9, 10)
y1 = x ** 2
plt.plot(
    x, y1,
    linestyle = ':',
    marker = 'o',
    markersize = 8,
    markerfacecolor = 'blue',
    markeredgecolor = 'red',
)

plt.show()
```

Output: 

Line Graph |
![Desktop View](/assets/img/HandleImageData/19-1.png) |

## Drawing Bar Graph
- [**matploblib.pyplot.bar()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.bar.html): Make a bar plot. The bars are positioned at x with the given alignment. Their dimensions are given by height and width. The vertical baseline is bottom (default 0).

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-9, 10)
plt.bar(x, x ** 2)
plt.show()
```

Output: 

Bar Graph |
![Desktop View](/assets/img/HandleImageData/19-2.png) |

## Drawing Stacked Bar Chart

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.random.rand(10) # bottom bar
y = np.random.rand(10) # middle bar
z = np.random.rand(10) # top bar

data = [x, y, z]
x_arr = np.arange(10)
for i in range(0, 3): # there's 3 types of stcaked bar
  plt.bar(
      x_arr,    # 0 to 10 as X
      data[i],  # each data as height
      bottom = np.sum(data[:i], axis=0)
  )

plt.show()
```

Output: 

Bar Graph |
![Desktop View](/assets/img/HandleImageData/19-3.png) |

## Drawing Scatter Graph
- [**matplot.pyplot.scatter()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.scatter.html): A scatter plot of y vs. x with varying marker size and/or color.

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.random.rand(10)
y = np.random.rand(10)
colors = np.random.randint(0, 100, 10)
sizes = np.pi * 1000 * np.random.rand(10)
plt.scatter(x, y, c=colors, s=sizes, alpha=0.7)
plt.show()
```

Output: 

Bar Graph |
![Desktop View](/assets/img/HandleImageData/19-4.png) |

## Summary

- [**matplotlib.pyplot.plot()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html): Plot y versus x as lines and/or markers.
- [**matploblib.pyplot.bar()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.bar.html): Make a bar plot. The bars are positioned at x with the given alignment. Their dimensions are given by height and width. The vertical baseline is bottom (default 0).
- [**matplot.pyplot.scatter()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.scatter.html): A scatter plot of y vs. x with varying marker size and/or color.