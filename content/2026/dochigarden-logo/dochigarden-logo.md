---
title: dochigarden 로고 제작기
aliases:
  - dochigarden 로고 제작기
  - dochigarden logo
cover_image: ""
description: 도메인만 있고 로고가 없던 dochigarden 에 고슴도치 로고를 만든 이야기. 컨셉을 잡고 시안을 버려가며 반원 하나, 점 하나, 가시 8개, 새싹 하나로 끝나기까지
permalink: dochigarden-logo
classification: blog
category:
  - dev
tags:
  - dochigarden
  - logo
  - branding
  - claude
draft: false
published: 2026-10-25T23:55:00
lang: ko
created: 2026-10-25T23:00
updated: 2026-10-26T00:05
---

## dochigarden 로고 만들기

[[blog-custom-domain|블로그 주소를 dochigarden.com 아래로 옮기고]] 나서 생각해보니, 정작 dochigarden 에는 대표 이미지나 로고가 없었다.

브라우저 탭에는 기본 아이콘이 뜨고, 링크를 공유하면 미리보기 이미지도 안 나왔다. [[Cloister — A quiet Cloisterfor focused work|Cloister]] 는 앱 아이콘이 있는데, 그 앱을 만드는 dochigarden 은 아무 얼굴이 없는 상태였다.

그래서 로고를 만들었다.

![[dochigarden-mark.png|480]]

고슴도치 한 마리가 새싹을 보고 있는 모양이다.

그냥 직관적으로 도치..가든.. 내 창의력의 한계다.

## dochigarden 의 이름

dochigarden 은 도치가 자라는 정원이다. 도치는 딸 정원이의 태명에서 가져온 이름이고, garden 은 정원 이름 그 자체이자, 도치인 정원이가 자라는 공간이라는 의미다.
- 사이트 푸터에도 처음부터 `Made with care by 도치 · Dochi` 라고 적어뒀다.

사이트 자체도 정원 컨셉으로 되어 있다.
- 앱 페이지는 앱을 **Blooming / Sprouting / Seeds** 로 나눈다 (출시한 것, 만드는 중인 것, 설계만 된 것)
- 404 페이지는 `Nothing has grown here yet.`

그러니 로고에 고슴도치와 정원이 들어가는 건 거의 정해져 있었다. 문제는 둘을 어떻게 한 그림에 넣느냐였다.

## 컨셉 잡기

Claude와 컨셉을 같이 생각해봤다.

1. **고슴도치 + 정원** : 고슴도치 가시를 풀잎이나 새싹으로 바꿔서 등 위에 정원이 자라는 모양
2. **새싹 아이콘 변형** : 그때 쓰던 흔한 새싹 아이콘을 d, g 글자 모양으로 만들기
3. **화단** : macOS 앱 아이콘 모양의 둥근 네모를 울타리 친 화단으로 보고, 앱은 그 안의 식물로
4. **아치 속 새싹** : 수도원 회랑(cloister) 아치 너머로 보이는 새싹

1번이 제일 마음에 들었고 3번도 괜찮았다. 걱정은 고슴도치가 들어가면 너무 귀여워질 것 같다는 거였다. 귀엽긴 한데 가볍지않은 느낌이었으면 했다.

이름 이야기를 하고 나니 방향이 정리됐다. 워드마크가 이미 dochi 는 잉크색, garden 은 초록 이탤릭이다. 로고도 고슴도치는 잉크색, 새싹은 초록색으로 두고 둘의 관계가 보이게 가기로 했다. 가시가 풀잎이 되는 것보다 고슴도치가 새싹을 보고 있는 쪽이 이야기에 맞았다.

## 시안

- 몸을 동그랗게 만 고슴도치 안에 새싹이 있는 인장 모양 → 고슴도치보다 키위새 같았다
- 옆모습으로 바꾸고 코앞에 새싹을 두는 안 → 구도는 좋은데 이번엔 쥐 같았다
- 몸 외곽선을 없애고 가시만 남긴 안 → 가시 17개, 15개, 21개를 놓고 비교하다가 점점 복잡해졌다

![[logo-roughs.png]]

보다 보니 너무 복잡해지는 것 같아서, 그냥 반원에 점 하나 찍고 가시 몇 개 붙이고 앞에 새싹 하나만 구성했다.

그중에서 가시를 몸에서 살짝 띄운 안을 골랐다. Claude는 해 뜨는 모양처럼 보일 수 있다고 두 번이나 말했는데 (가시를 8개로 늘리니까 더 그랬다), 내 눈에는 괜찮아 보여서 그대로 갔다.
- ~~눈이 있으니까 고슴도치다.~~
- 가시가 8개인 이유는 정원이가 8월생이라 의미부여 했다.

결국 처음 후보 넷 어디에도 없던, 반원 하나 + 점 하나 + 가시 8개 + 새싹 하나로 결정했다.

최종안은 파이썬 스크립트로 SVG를 만들었다. 반원, 가시, 새싹 위치가 전부 좌표라서 라이트 / 다크 / 파비콘 같은 변형도 같은 스크립트로 한 번에 뽑았다.

![[logo-variants.png]]

## 적용

로고가 생기니 빈자리들을 채울 수 있었다.

- **홈페이지** : 첫 화면에서 새싹이 자라는 애니메이션을 넣었고, 다크 마크가 생긴 김에 사이트 전체에 다크 모드도 넣었다
- **블로그** : 파비콘과 미리보기 이미지를 바꾸고, 사이드바 제목 옆에 고슴도치를 뒀다. 블로그 색도 같은 팔레트로 맞췄다 (지금 이 글의 배경색이 로고의 종이색이다)
- **Cloister** : About 탭 아래에 `Made by dochigarden` 을 넣었다.

## 마무리

왠지 모르게 로고 이미지를 만들고 나니 [dochigarden](https://dochigarden.com/) 이 이뻐져서 괜히 기분이 좋았다.

# Links

- [dochigarden](https://dochigarden.com/)
- [dochigarden brand](https://dochigarden.com/brand/) : 로고 파일과 사용 규칙
- [brand/build.py](https://github.com/khy07181/dochigarden/blob/main/brand/build.py) : 로고 SVG를 만드는 스크립트
