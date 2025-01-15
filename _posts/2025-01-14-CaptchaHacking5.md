---
title: Captcha Hacking(5) - Automating to solve the Captcha problem
description: Automating to solve for Captcha Hacking (5)
date: 2025-01-14
categories: [Project, Captcha Hacking]
tags: [Project, Captcha Hacking]
math: true
---

## Topic

- [Automating to Solve](#automating-to-solve)

## Automating to Solve

Now that we have finally made that we can recognize the math problem of the image, it's time to solve the problem

Since it's inconvenient for us to type the solution directly to the website, we must automate this process.

Let's first update the equation so it doesn't cause error (ex: 0003 + 4559 will cause error because of '000'3)

**utils.py**

```python
import re

# we must first remove the 0s that come before (ex: 0032)
def remove_first_0(string):
    temp = []
    # add the operation into temp
    for i in string:
        if i == '+' or i == '-' or i == '*':
            temp.append(i)
    
    # split the string into 2 numbers (ex: 003 + 74 -> [003, 74])
    split = re.split('\*|\+|-', string)
    i = 0
    temp_count = 0
    result = ''
    for a in split:
        # remove the 0s on left
        a = a.lstrip('0')
        # edge case if it's all '0'
        if a == '':
            a = '0'
        result += a
        # updating the result
        if i < len(split) - 1:
            result += temp[temp_count]
            temp_count = temp_count + 1
        i = i + 1
    return result
```

Now we can automate to solve the problem, but before we do when we inspect the page and press START, inside 'Network' we will see the image file

![Desktop View](/assets/img/HackingCaptcha/5-img.PNG)

When we submit, it starts a 'check' function and we can see our ans: 5 and since it's correct it provides us with next image as a Response

ans | next image |
![Desktop View](/assets/img/HackingCaptcha/5-check.PNG) | ![Desktop View](/assets/img/HackingCaptcha/5-res.PNG)

Using these information we can get our image like this

**run.py** 

```python
import requests
import shutil
import time

host = "http://localhost:10000"
# at first we start at /start
url = '/start'

with requests.Session() as s:
    answer = ''
    # we had to solve 100 questions, but we can increase the loop amount
    for i in range(0, 100):
        start_time = time.time()
        # submit answer, our first answer at the start should be ''
        params = {'ans': answer}

        # get our next image location
        response = s.post(host + url, params)
        print('Server Return: ' + response.text)
        # update our url to check on our first for loop
        if i == 0:
            returned = response.text
            image_url = host + returned
            url = '/check'
        # after first loop we should have new url for image
        else:
            returned = response.json()
            image_url = host + returned['url']
            
        print('Problem ' + str(i) + ': ' + image_url)

        # download the image
        response = s.get(image_url, stream=True)
        target_image = './target_images/' + str(i) + '.png'
        with open(target_image, 'wb') as out_file:
            shutil.copyfileobj(response.raw, out_file)
        del response

        # get the result from the image
        answer_string = get_result(target_image)
        print('String: ' + answer_string)
        answer_string = utils.remove_first_0(answer_string)
        answer = str(eval(answer_string))
        print('Evaluated Answer: ' + answer) 
        print('--- %s seconds ---' % (time.time() - start_time))
```

Output:

Outputs | Stage 1 | Stage 2 | 
![Desktop View](/assets/img/HackingCaptcha/5-out.PNG) | ![Desktop View](/assets/img/HackingCaptcha/5-0.png) | ![Desktop View](/assets/img/HackingCaptcha/5-1.png)

Stage 3 | Stage 4 | Stage 5 |
![Desktop View](/assets/img/HackingCaptcha/5-2.png) | ![Desktop View](/assets/img/HackingCaptcha/5-3.png) | ![Desktop View](/assets/img/HackingCaptcha/5-4.png)