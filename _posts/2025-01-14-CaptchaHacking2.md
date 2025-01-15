---
title: Captcha Hacking(2) - Collecting Data and Analyzing
description: Collecting Data and Analyzing for Captcha Hacking (2)
date: 2025-01-14
categories: [Project, Captcha Hacking]
tags: [Project, Captcha Hacking]
math: true
---

## Topic

- [How much Data Collecting](#how-much-data-collecting)
- [Data Collecting](#data-collecting)
- [Data Analyzing](#data-analyzing)

## How much Data Collecting

How much data should we collect to solve this Captcha problem?
- Since the characters each in the problem look very similar, we don't need much data
- From the questions, you can see that the number characters are about the same size compared to operation characters
- Possibility of characters: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *

## Data Collecting

We can simply collect data by solving the problems that are shown in [localhost:10000](localhost:10000)
- ![Desktop View](/assets/img/HackingCaptcha/2-collecting.PNG)
- As talked previously, we can see that the questions get harder and harder to solve
- You can right click the image and save them in a separate file
    - try and get all the possible characters with the images (for myself, I could collect all the characters with 4 image files)

Image1 | Image2 | Image3 | Image4 |
![Desktop View](/assets/img/HackingCaptcha/2-1.png) | ![Desktop View](/assets/img/HackingCaptcha/2-2.png) | ![Desktop View](/assets/img/HackingCaptcha/2-3.png) | ![Desktop View](/assets/img/HackingCaptcha/2-4.png) |

## Data Analyzing

We then analyze the image by getting the colors of each characters using any tool as you can see from image below, one of the color is rgb(170, 255, 170), with hexcode #aaffaa (you can interpret 2 letters each as rgb so 'aa' = r 'ff' = g, 'aa' = b)

![Desktop View](/assets/img/HackingCaptcha/2-analyze.PNG)

Things we found from analyzing image
- Blue: from RGB value, B is always FF
- Green: from RGB value, G is always FF
- Red: from RGB value, R is always FF
- Blue & Green: from RGB value, R is always AA or lower
- Blue & Red: from RGB value, G is always AA or lower
- Green & Red: from RGB value, B is always AA or lower