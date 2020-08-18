---
layout: post
title:  "BOJ - Algorithm [일곱난쟁이]"
author: minsgy.choi
date:   2020-07-17 00:00
categories: [python,Algorithm,Implement]
---
BOJ Algorithm  
일곱난쟁이  

왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.  
일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.  
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.  
뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을  기억해냈다.

-입력-
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.  
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며,  
아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.  

-조건-
일곱 난쟁이의 키를 오름차순으로 출력한다. 일곱 난쟁이를 찾을 수 없는 경우는 없다.

```python
import random
numberlist = []
    
for i in range(0, 9):   
    temp = int(input())
    numberlist.append(temp)

while(True):
    s = random.sample(numberlist, 7)
    result = sum(s)
    if(result == 100):
        break

s.sort()
for i in s:
    print(i)
```

느낀점
--
문제의 의도는 일곱난쟁이를 2명씩 뽑아서 마지막 한명을 뽑을 때, 100이 되지 않으면 다시 뽑는 방식.  
그러나 나는 random 라이브러리를 이용하여, 리스트에서 임의로 7개 인덱스를 골라서 이를 더한 값이  
100이 되지않으면 계속 무한 Loop 하게 된다.  


---

코드는 [minsgy_github] 저장되어 있습니다.

[minsgy_github]:   https://github.com/minsgy/BJ-Programmers

