---
title: How to handle Data, and Images(18) Matplotlib Intro
description: Introduction to Matplotlib and how to plot a line graph and save the figure
date: 2025-01-16
categories: [Handling Data and Images, Matplotlib]
tags: [Python, Study, Handling Data and Images, Matplotlib]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(18) - Matplotlib Intro](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(18)_Matplotlib_Intro.ipynb)

## Topics

- [Matplotlib Basics](#matplotlib-basics)
- [Drawing simple line graph](#drawing-simple-line-graph)
- [Saving Graph (1)](#saving-graph-1)
- [Saving Graph (2)](#saving-graph2)
- [Drawing Line Graph (1)](#drawing-line-graph-1)
- [Drawing Line Graph (2)](#drawing-line-graph-2)
- [Summary](#summary)

## Matplotlib Basics
- Matplotlib is an opensource library that allows to visualize data
- From simple data analyzation, AI model visualization there's a lot of usage

## Drawing simple line graph
- [**matplotlib.pyplot.plot()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html): Plot y versus x as lines and/or markers.

```python
import matplotlib.pyplot as plt

x = [1,2,3]
y = [1,2,3]
# plot the graph
plt.plot(x, y)

# title it 'Line Graph' with label 'X', and 'Y'
plt.title('Line Graph')
plt.xlabel('X')
plt.ylabel('Y')
plt.show()
```

Output:

Basic Line Graph | 
![Desktop View](/assets/img/HandleImageData/18-1.png) |

## Saving Graph (1)
- [**matploblib.pyplot.savefig()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.savefig.html): Save the current figure as an image or vector graphic to a file.

```python
import matplotlib.pyplot as plt

x = [1,2,3]
y = [1,2,3]
# plot the graph
plt.plot(x, y)

# title it 'Line Graph' with label 'X', and 'Y'
plt.title('Line Graph')
plt.xlabel('X')
plt.ylabel('Y')
# save the figure as 'line_graph.png'
plt.savefig('line_graph.png')
```

Output:

Basic Line Graph | Saved Fig | 
![Desktop View](/assets/img/HandleImageData/18-1.png) | ![Desktop View](/assets/img/HandleImageData/18-save.PNG)

## Saving Graph(2)

```python
import matplotlib.pyplot as plt
import numpy as np

# with width pi * 10, make 500 dots equally
x = np.linspace(0, np.pi * 10, 500)
# make 2 graphs
fig, axes = plt.subplots(2, 1)
# 1st graph is sin graph
axes[0].plot(x, np.sin(x))
# 2nd graph is cos graph
axes[1].plot(x, np.cos(x))

# save figure as 'sin&cos.png'
fig.savefig('sin&cos.png')
```

Output:

Sin & Cos Graph | Saved Figure
![Desktop View](/assets/img/HandleImageData/18-2.png) | ![Desktop View](/assets/img/HandleImageData/18-save2.PNG)

## Drawing Line Graph (1)

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-9, 10)
y = x ** 2
# as a linestyle we can use '-', ':', '-.' '--' and more 
plt.plot(x, y, linestyle=':', marker='*')

plt.show()
```

Output:

$y = x^2$ |
![Desktop View](/assets/img/HandleImageData/18-3.png) |

## Drawing Line Graph (2)

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-9, 10)
y1 = x ** 2
y2 = -x

# plot a line graph 'y = x ** 2'
plt.plot(x, y1, linestyle='-.', marker='*', color='red', label='y = x * x')
# plot a line graph 'y = -x'
plt.plot(x, y2, linestyle=':', marker='o', color='blue', label='y= -x')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend(
    shadow = True,
    borderpad = 1
)
plt.show()
```

Output:

Figure |
![Desktop View](/assets/img/HandleImageData/18-4.png) |

## Summary
- [**matplotlib.pyplot.plot()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html): Plot y versus x as lines and/or markers.
- [**matploblib.pyplot.savefig()**](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.savefig.html): Save the current figure as an image or vector graphic to a file.