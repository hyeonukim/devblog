---
title: Captcha Hacking(1) - Defining the Problem
description: Defining the problem of Samsung's Capture The Flag 2017 question (1)
date: 2025-01-13
categories: [Project, Captcha Hacking]
tags: [Project, Captcha Hacking]
math: true
---

## Captcha Hacking Series

[Project Repo](https://github.com/hyeonukim/SCTF2017-Writeups)

[Captcha Hacking(1) - Defining the Problem](https://hyeonukim.github.io/devblog/posts/CaptchaHacking1/)

[Captcha Hacking(2) - Collecting Data and Analyzing](https://hyeonukim.github.io/devblog/posts/CaptchaHacking2/)

[Captcha Hacking(3) - Data Cleaning](https://hyeonukim.github.io/devblog/posts/CaptchaHacking3/)

[Captcha Hacking(4) - Training with KNN Algorithm](https://hyeonukim.github.io/devblog/posts/CaptchaHacking4/)

[Captcha Hacking(5) - Automating to solve the Captcha problem](https://hyeonukim.github.io/devblog/posts/CaptchaHacking5/)


## Topic

- [Before we start](#before-we-start)
- [Setting up](#setting-up)
- [Defining Problem](#defining-problem)
- [How to Approach this problem](#how-to-approach-this-problem)
- [Thinking point of this problem](#thinking-point-of-this-problem)

## Before we start

This problem was one of Samsung's Capture the Flag question from 2017.

You can check out the problem [here](https://github.com/ndb796/SCTF2017-Writeups)

## Setting up

1. First clone the repository using git
    - git clone https://github.com/ndb796/SCTF2017-Writeups.git
2. Inside the folder create src/images folder
    - Inside the folder that we cloned, go to ASM/src
    - in here create a folder 'static'
    - create another folder called 'images' in 'static' folder
3. Using your command prompt, inside ASM/src folder run 'python3 run.py'
    - if you don't have flask library, make sure to install all the modules 'pip install *x*'
4. Once you see that program is running, you can go to [localhost:10000](localhost:10000)
    - ![Desktop View](/assets/img/HackingCaptcha/1-localhost.PNG)
5. Once you press 'START!'
    - you will be able to see image popping up on the screen
    - ![Desktop View](/assets/img/HackingCaptcha/1-start.PNG)
    - you can answer the math problem below inside 'answer' section
6. Your goal here is to automate this so that your program automates solving this math problem

## Defining Problem

- Once you press START, 80 second timer starts
- The math problem shows up in Captcha form, and you have to solve this by submitting the answer in 'Answer'
- Within 80 seconds, you're supposed to get 100 questions correctly consecutively


## How to approach this problem
- Using OpenCV, we're going to separate each character
- We're going to label what each character is to make it a mathematical quesiton
- We're finally going to solve this problem using the information 

## Thinking point of this problem
- The more you solve, the math question becomes harder (Example: 52379819 * 9849271)
- Each characters in the image are distinguished by color, how can we use this information?