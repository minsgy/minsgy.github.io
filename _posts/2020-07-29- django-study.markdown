---
layout: post
title:  "Django 주요 과정"
author: minsgy.choi
date:   2020-07-29 00:00
categories: [Django]
---
{%raw%}

## 가상환경
독립된 공간 (각 프로젝트가 영향 받지 않음)  
**가상환경 안에서 장고를 깔았으면 다른 가상환경에선 연동이 안됨**  
### 가상환경 작성
+ `python -m venv <가상환경이름>`

+ venv = virtual environment  

### 가상환경 실행
+ `source <가상환경이름>/Scripts/activate`
### 가상환경 종료
+ `deactivate`

## pip 패키지
파이썬으로 작성된 패키지 소프트웨어를 설치, 관리하는 패키지 관리 시스템  
Django = pip 패키지  

### 장고 설치
> `pip install django`

### 장고 삭제
> `pip uninstall django`

### 특정 버전 장고 설치
> `pip install django==<버전>`

## vscode 팁
### bash로 변경
> `select default shell, git bash에서 code .`

# Django
### 장고 프로젝트 생성
> `django-admin startproject <project 이름>`

### 장고 서버 작동
> `python manage.py runserver`

## App
프로젝트의 구성 단위  
App 은 안 만들어도 되는 상황이어도 만들어두는 편이 코드 가용성을 위해 좋음

### App 생성
> `python manage.py startapp <app 이름>`

App 폴더 안에 'templates' 폴더 따로 만들어줘야 함  
**'templates'** 폴더 안에 유저에게 보여질 화면들 (html) 담기

App 생성 후 프로젝트의 settings.py 에 알려야 함

### INSTALLED_APPS 에 추가
> `<app이름>.apps.<첫글자대문자app이름>Config`

templates 안의 유저에게 보여질 화면 (html)이 언제, 어떻게 처리될지 알려주는 함수 추가해야 함

### views.py 에 추가
```python
def home(request):
    return render(request, <템플릿 이름>, <딕셔너리>)
```

내가 만든 html이 어떤 url을 입력했을 때 뜨게 할지 알려야 함

### url.py 에 추가
> `path('', myapp.views.home, name="home")`

**이름 정하는 이유: 함수이름이 바뀔 수도 있으므로**

## 템플릿 언어
> https://docs.djangoproject.com/en/3.0/ref/templates/language/#templates

### 템플릿 변수
> `{{ python_value }}`
### 템플릿 필터
### 템플릿 변수에 추가적인 속성 및 기능 제공  
> `{{ python_value | filter }}`

### 길이
``` python
> {{ value | length }}
```
### 소문자로
``` python
> {{ value | lower }}
```
### 템플릿 태그
### html 상에서 파이썬 문법 사용, url생성 등의 기능 제공
> `{% tag %} ... 태그 내용 ... {% endtag %}`

### 예시
> `{% for students in class %} {{students}} {% endfor %}`

> `{% url 'url_name' %}`

**템플릿 상속 참고**

### 입력받은 값
> `request.GET['<입력한 값>']`

### django 에서 Static(CSS, Media, ...) 적용하기
> https://nachwon.github.io/django-deploy-4-static/

> https://crynut84.github.io/2016/11/14/django-static-file/

## Model
데이터에 접속하고 관리하도록 도와주는 객체(데이터베이스는 Django를 이해하지 못하기 때문)

### Model 생성 & 적용 예시
models.py

```python
class Designer(models.Model): # models.Model 을 상속
    image = models.ImageField(upload_to = 'images/') # FileField + height + width
    name = models.CharField(max_length = 50)
    address = models.CharField(max_length = 255)
    description = models.TextField()

    # Designer 대표하는 이름
    def __str__(self):
        return self.name
```

참고 사이트  
> https://docs.djangoproject.com/en/3.0/ref/models/fields/
> 

### Pillow
ImageField 사용하기 위한 패키지

Terminal  
+ DB가 알아 듣도록 번역  
 `python manage.py makemigrations`


+ 번역한 내용을 DB에 적용  
`python manage.py migrate`

참고 사이트
+ https://nachwon.github.io/django-5-database/

## Admin 기능
Terminal  
**하기 전에 migrate 해야됨**
+ `python manage.py createsuperuser`

+ admin.py
```python
from .models import Designer
admin.site.register(Designer)
```

참고 사이트
> https://docs.djangoproject.com/en/3.0/ref/contrib/admin/#modeladmin-objects

## QuerySet
전달받은 모델의 객체 목록

```python
# Model의 존재 알려주기
from .models import Designer

# QuerySet을 Templates로 보내는 예시
def home(request):
    designers = Designer.objects.all()
    return render(request, 'home.html', {'designers': designers})
```

## Detail Page

### PK (Primary Key)
+ Model을 통해 생성된 객체들을 구분할 수 있는 고유한 Key

### Path Convertor
+ 여러 객체의 url를 계층적으로 다룰 수 있도록 도와주는 도구

+ urls.py
``` python
path('profile/<int:designer_id>/', views.detail, name="detail"),
```

참고 사이트
> https://docs.djangoproject.com/en/3.0/ref/urls/#django.urls.path

### Template
+ `{% url 'detail' designer.id %}`

### get_object_or_404
Object를 가져오려 했는데 없을 경우 나타내는 에러  
**views.py의 pk 변수명과 urls.py의 변수명은 같아야 함!**

### views.py
```python
from django.shortcuts import render, get_object_or_404

def detail(request, designer_id):
    designer = get_object_or_404(Designer, pk = designer_id)
    return render(request, 'detail.html', {'designer': designer})
```

{%endraw%}
---

[minsgy_github] 저장되어 있습니다. 감사합니다.

[minsgy_github]:   https://github.com/minsgy/BJ-Programmers

