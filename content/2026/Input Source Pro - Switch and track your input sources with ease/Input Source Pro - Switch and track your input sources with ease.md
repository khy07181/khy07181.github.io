---
title: Input Source Pro - Switch and track your input sources with ease
aliases:
  - Input Source Pro 소개글
cover_image: ""
description: 앱과 웹사이트에 따라 입력 소스를 자동으로 바꿔주는 macOS 도구 Input Source Pro 소개
permalink: input-source-pro-switch-and-track-your-input-sources-with-ease
classification: blog
category:
  - productivity
  - tool
tags:
  - input-source-pro
  - productivity
  - keyboard
  - input-source
  - macos
  - tool
draft: false
published: 2026-09-13T22:42:00
lang: ko
created: 2026-09-13T16:25
updated: 2026-09-14T16:52
---

[Input Source Pro](https://inputsource.pro/)는 지금 사용 중인 앱이나 웹사이트에 맞춰 입력 소스를 자동으로 바꿔주는 macOS 도구다.

공식 소개 문구는 `Switch and track your input sources with ease`다.

입력 소스를 바꾸는 일(switch)과 지금 어떤 입력 소스가 켜져 있는지 아는 일(track), 이 두 가지를 편하게 만들어주는 것이 이 도구가 하는 일의 전부다. 무료이고 오픈소스다.

---

## 한영 전환의 불편함

한글과 영어를 함께 쓰는 Mac 사용자라면 앱마다 주로 쓰는 입력 소스가 정해져 있다.
터미널과 코드 에디터에서는 주로 영어를 쓰고, 메신저나 노트 앱에서는 주로 한글을 쓴다.

문제는 앱을 옮길 때 입력 소스는 따라오지 않는다는 점이다.

메신저에서 한글로 답을 보내고 터미널로 돌아와 무의식적으로 명령어를 치면 한글로 나온다.
지우고, 한영 키를 누르고, 다시 입력한다.

반대로 코드를 쓰다가 노트 앱으로 넘어가면 영어로 시작하는 오타를 다시 지우고 입력 소스를 바꾼다.

한 번에 1초지만 하루 종일 불편이 쌓인다.

macOS가 현재 입력 소스를 알려주는 방법은 메뉴 막대 오른쪽 위의 작은 아이콘뿐이다.
타이핑하던 시선을 화면 구석으로 옮겨서 확인해야 하니, 실제로는 일단 쳐보고 오타가 나면 그때 알게 된다.

---

## 주요 기능

### 앱 별 입력 소스 자동 전환

![[input_source_pro_app.gif]]

가장 핵심이 되는 기능이다. 앱마다 기본 입력 소스를 정해두면, 그 앱으로 전환하는 순간 입력 소스가 자동으로 바뀐다.

예를 들어 터미널, 코드 에디터, Raycast에는 ABC를, 그 외의 앱에는 한글을 기본값으로 두는 식이다. 이렇게 해두면 터미널로 돌아왔을 때 입력 소스가 무엇인지 생각할 필요가 없다. 앱을 옮기는 동작 자체가 입력 소스 전환이 된다.

규칙을 정하지 않은 앱은 시스템 설정을 그대로 따르기 때문에, 자주 쓰는 앱 몇 개만 등록해도 충분하다.

### 웹사이트별 입력 소스 자동 전환

![[input_source_pro_browser.gif]]

브라우저는 앱 하나 안에서 여러 언어를 오간다. 영문 문서와 GitHub에서는 영어를, 국내 사이트에서는 한글을 쓴다. 앱 단위 규칙으로는 해결되지 않는 영역이다.

Input Source Pro는 브라우저 안에서 현재 보고 있는 사이트의 URL을 인식해서 사이트별로 입력 소스를 지정할 수 있게 해준다.

### 입력 소스 인디케이터

앱이나 웹사이트를 옮겨 입력 소스가 바뀌면, 커서 근처에 현재 입력 소스를 알려주는 작은 표시가 잠시 나타났다가 사라진다. ABC는 `A`, 두벌식은 `한`처럼 한 글자로만 표시되기 때문에 화면을 가리지 않는다.

![[input_source_pro_indicator.png]]

메뉴 막대까지 시선을 옮기지 않아도 지금 어떤 입력 소스로 타이핑하게 될지 바로 알 수 있다. 표시 위치와 크기, 색상, 표시되는 시간 등은 설정에서 바꿀 수 있고, 입력 소스별로 색을 다르게 지정해두면 글자를 읽지 않고도 색만으로 구분된다.

자동 전환 규칙을 등록하지 않은 앱에서도 이 표시만으로 한영 오타가 크게 줄어든다.

### 단축키

기본 한영 전환 키 대신 원하는 키 조합을 지정할 수 있고, `Shift`나 `Command` 같은 modifier 키 하나를 한 번 누르거나 두 번 연속으로 눌러 전환하도록 설정할 수도 있다.
입력 소스가 셋 이상이라면 같은 단축키로 순환하게 하거나, 특정 입력 소스로 바로 가는 단축키를 따로 둘 수도 있다.

### 그 밖의 기능

- **앱별 Function Key 모드** : 앱마다 `F1 ~ F12`를 표준 기능 키로 쓸지 밝기·볼륨 같은 미디어 키로 쓸지 정할 수 있다. IDE에서는 기능 키로, 나머지 앱에서는 미디어 키로 쓰는 식이다.
- **Force English Punctuation** : 특정 앱에서는 입력 소스와 상관없이 영어 문장부호를 입력하도록 강제한다. 중국어나 일본어 입력 소스에서 전각 문장부호가 입력되는 문제를 막기 위한 기능이라, 영어와 한글을 쓴다면 거의 쓸 일이 없다.
- **설정 백업** : 앱·브라우저 규칙과 단축키 설정을 내보내고 가져올 수 기능

---

## 설치

Homebrew 또는 [공식 사이트](https://inputsource.pro/)에서 직접 DMG 파일을 통해 설치가 가능하다.

```bash
brew install --cask input-source-pro
```

---

## 마무리

Input Source Pro는 아주 사소하지만 편리한 생산성 도구다.

한영 전환은 하루에 수십 번 반복되는 일이라 작은 불편이 계속되고 있다면 추천!

---

### Links

- [Input Source Pro](https://inputsource.pro/)
- [GitHub - runjuu/InputSourcePro](https://github.com/runjuu/InputSourcePro)
