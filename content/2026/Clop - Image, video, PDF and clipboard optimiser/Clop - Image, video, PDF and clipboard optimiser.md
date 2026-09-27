---
title: Clop - Image, video, PDF and clipboard optimiser
aliases:
  - Clop 소개글
cover_image: ""
description: 복사한 이미지와 동영상, PDF를 알아서 가볍게 만들어주는 macOS 도구 Clop 소개
permalink: clop-image-video-pdf-and-clipboard-optimiser
classification: blog
category:
  - productivity
  - tool
tags:
  - clop
  - productivity
  - image-optimization
  - video
  - pdf
  - clipboard
  - macos
  - tool
draft: false
published: 2026-09-27T20:40:00
lang: ko
created: 2026-09-26T06:54
updated: 2026-09-27T20:40
---

[Clop](https://lowtechguys.com/clop/)은 이미지, 동영상, PDF, 클립보드에 복사한 이미지를 자동으로 최적화해주는 macOS 도구다.
- 공식 소개 문구는 `Copy large, paste small, send fast`

평소처럼 복사하고 붙여넣기만 하면, 그 사이에서 Clop이 알아서 용량을 줄여준다.

---

## 용량 줄이기의 번거로움

압축 사이트에 올리거나 ffmpeg 명령어를 찾아 쓰면 번거롭지만 줄일 수는 있다.
Clop은 줄일지 말지 고민할 필요 없이, 복사하는 순간 이미 줄어들어 있게 만든다.

---

## 주요 기능

### 클립보드 이미지 자동 최적화

<video src="https://lowtechguys.com/static/video/screenshot-copy-optimise-paste-in-email.mp4" autoplay loop muted playsinline></video>

가장 핵심이 되는 기능이다.
이미지를 복사하면 Clop이 백그라운드에서 바로 최적화하고, 클립보드의 내용을 가벼워진 이미지로 바꿔놓는다.

사용자가 하는 일은 `Cmd + C`, `Cmd + V`뿐이다.
최적화가 끝나면 화면 구석에 작은 창이 떠서 줄어든 용량을 보여주고, 마음에 들지 않으면 원본으로 되돌릴 수 있다.

HEIC, TIFF처럼 호환성이 떨어지는 포맷은 webp, png, jpg 등으로 변경해준다.

>[!tip]
>항상 줄이지않고 단축키를 눌러 용량을 줄일 수 있도록 설정도 가능하다.

### 크기 조절

<video src="https://lowtechguys.com/static/video/screenshot-downscale-in-email.mp4" autoplay loop muted playsinline></video>

자동으로 줄여주는 것보다 더 또는 덜 줄이는 것도 가능하다.

| 키          | 동작                            |
| ---------- | ----------------------------- |
| `-`        | 90% → 80% → … → 10%로 단계적으로 축소 |
| `1 ~ 9`    | 미리 정해진 크기로 바로 축소              |
| 해상도 텍스트 클릭 | 원하는 크기나 비율로 자르기               |

이미지를 다른 앱에서 열 필요 없이, 바로 용량을 줄여준다.

### 동영상 최적화

![](https://lowtechguys.com/static/img/screen-recordings.png)

동영상도 눈으로는 구분 못할 만큼 화질 저하없이 용량을 줄여준다.
- 애플 실리콘 맥에서는 Media Engine으로 인코딩해서 CPU와 배터리 부담도 적다.

압축 외에도 간단한 편집을 지원한다.
- GIF로 변환
- 특정 비율로 자르기
- 재생 속도 조절
- 오디오 제거
- MOV → MP4 변환

### Drop Zone

<video src="https://files.lowtechguys.com/clop-drop-zone-demo-h264.mp4" autoplay loop muted playsinline></video>

클립보드가 아닌 파일은 드래그해서 최적화 가능하다.
파일을 끌기 시작하면 화면에 Drop Zone이 나타나고, 그 위에 놓으면 용량이 줄어든다.
- `Cmd`를 누른 채 놓으면 조금 더 강하게 압축한다.

### Preset Zone

<video src="https://lowtechguys.com/static/video/clop-presets.mp4" autoplay loop muted playsinline></video>

Drop Zone에 macOS 단축어(Shortcuts)를 연결해 파일을 놓으면 WebP 변환, 워터마크 삽입, 특정 크기로 축소 같은 커스텀한 작업을 실행할 수 있다.

### PDF 최적화

<video src="https://lowtechguys.com/static/video/clop-pdf-h264.mp4" autoplay loop muted playsinline></video>

스캔한 문서나 그림이 많은 PDF도 줄여준다.

PDF를 특정 기기 화면 비율에 맞게 자르는 기능도 있어서, 여백이 넓은 PDF를 태블릿에서 읽을 때 유용하다.

### 그 밖의 기능

- **Finder 연동** : 파일을 선택하고 단축키나 우클릭 메뉴로 바로 최적화
- **자동화 optimize 폴더** : 지정한 폴더에 새 파일이 들어오면 자동으로 최적화. 스크린샷 저장 폴더를 등록해두면 저장되자마자 용량이 줄어든다.
- **CLI · 단축어 액션** : 다른 자동화 흐름 안에 Clop으로 최적화가 가능하다.

---

## 모든 처리는 로컬에서

온라인 압축 서비스는 파일을 외부 서버에 올려야 한다는 점이 찝찝했는데 Clop은 클라우드를 전혀 쓰지 않고 맥 내부 안에서 모든 처리를 끝낸다.
내부적으로는 pngquant, jpegoptim, gifsicle, ffmpeg, libvips, gifski, ghostscript 등과 같은 검증된 오픈소스 도구를 사용하고, Clop 자체도 GPLv3로 [GitHub](https://github.com/FuzzyIdeas/Clop)에 공개되어 있다.

---

## 마무리

스크린샷과 화면 녹화 등 미디어를 많이 사용한다면 추천!

---

### Links

- [Clop](https://lowtechguys.com/clop/)
- [GitHub - FuzzyIdeas/Clop](https://github.com/FuzzyIdeas/Clop)
