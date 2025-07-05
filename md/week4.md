# JavaScript 4주차 과제

멋사 프론트엔드 14기 4주차 과제 문서입니다. <br/>
애니메이션 만들기

- [피그마 시안 링크](https://www.figma.com/design/1gMwuVsgNgsEjSwf4EooSZ/%EB%84%A4%EC%9D%B4%EB%B2%84-%ED%8C%A8%EC%85%98%ED%83%80%EC%9A%B4?node-id=0-1&p=f&m=draw)

## 목차

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [4주차 회고](#4주차-회고)

## HTML

- 웹 접근성을 고려하여 작성.
- 구조

```html
<section class="section-1">
  <div class="section-inner">
    <div class="video-bg">
      <video loop muted autoplay>
        <source src="https://campaign-cdn.pstatic.net/0/campaign/2022/11/fashiontown/v1/assets/video/kv_video-pc.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="fashiontown-banner-text">
      <span class="text-1">패션,타운 하나로 끝.</span>
      <div class="flip">
        <div class="flip-wrapper">
          <p class="flip-item">백화점</p>
          <p class="flip-item">아울렛</p>
          <p class="flip-item">브랜드샵</p>
          <p class="flip-item">소호</p>
          <p class="flip-item">스트릿</p>
          <p class="flip-item">디자이너</p>
        </div>
      </div>
      <span class="text-2">패션,타운 하나로 끝.</span>
    </div>

    <div class="fashiontown-logo">
      <svg width="1033" height="351" viewBox="0 0 1033 351" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- 11개의 path -->
        <path class="letter" d="M231.563 113.475H221.563V78.1006H104.563V289.101H94.5635V68.1006H231.563V113.475ZM189.393 141.421H155.701V187.292H187.061V218.205H155.701V288.508H136.393V110.508H189.393V141.421Z" fill="white" />

        ...
      </svg>
    </div>
  </div>
</section>
<section class="section-2">
  <h2 class="title">Section 2</h2>
</section>
<section class="section-3">
  <h2 class="title">Section 3</h2>
</section>
```

### 분석

- 네이버 패션타운 캠페인 홈페이지에서 사용한 비디오로 배경 사용
- Figma로 만든 FashionTown svg에 한 글자씩 애니메이션 효과를 주기 위해 <br/>
  path태그에 `class="letter"` 추가

## CSS

- 단위:`rem`, color:`hex`
- 구조

```css
* {
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
}

p {
  margin: 0;
}

section {
  display: flex;
  justify-content: center;
}

.section-1 {
  position: relative;
  top: 0;
  inline-size: 100%;
  block-size: 400vh;

  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    inline-size: 100vw;
    block-size: 100vh;
    z-index: -1;

    video {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }
  }

  .section-inner {
    inline-size: 100%;
    block-size: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  & .fashiontown-banner-text {
    display: flex;
    inline-size: 100%;
    font-size: 18.75rem;
    color: #fff;
    opacity: 0;
    transform: translateX(10%);
    transition:
      transform 0.3s ease,
      opacity 0.3s ease,
      scale 0.3s ease;

    span {
      white-space: pre;
    }

    .flip {
      position: relative;
      inline-size: 0;
      flex-shrink: 0;
      overflow: hidden;
      text-align: center;
      transition:
        inline-size 0.4s ease,
        border 0.4s ease;
      margin-inline-end: 2.5rem;
    }

    .flip-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      inline-size: 100%;
      block-size: 100%;
      transition: transform 0.3s ease;

      p {
        inline-size: 100%;
        block-size: 100%;
      }
    }
  }

  & .fashiontown-logo {
    inline-size: 100%;
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);

    & svg {
      inline-size: 100%;
      block-size: 100%;
    }

    .letter {
      opacity: 0;
      transform: translateY(100%);
    }

    @media screen and (width <= 64rem) {
      bottom: 0px;
    }
  }
}

.title {
  font-size: 4rem;
}

.section-2 {
  background: #87ceeb;
  block-size: 100vh;
}
.section-3 {
  background: #ffebcd;
  block-size: 100vh;
}
```

### 결과

- 스크롤 조작시 하나의 구간에서 여러 콘텐츠들을 보여 주어야 하기 때문에 <br/> `section-1`의 `block-size`를 `400vh`로 설정
- 스크롤 조작시 다음 섹션으로 넘어가는걸 방지하기 위해 `section-inner`는 `sticky`로 고정

## JavaScript

- 함수를 사용하여 재사용, 유지보수등을 고려하여 작성
- 구조

```js
'use strict';

// 요소 선택
const letters = document.querySelectorAll('.letter');
const bannerText = document.querySelector('.fashiontown-banner-text');
const section = document.querySelector('.section-1');
const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const flip = document.querySelector('.flip');
const flipWrapper = document.querySelector('.flip-wrapper');

let letterVisible = true; // letter 함수 제어용 변수(boolean 값)

// 새로고침시 scroll 초기화
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

// .fashiontown-logo안에 있는 svg <path class="letter">를
// forEach()로 애니메이션 효과 부여

// Letter 시작 애니메이션 함수
const lettersLength = letters.length;
function letterStartAnimationFn() {
  letters.forEach((item, index) => {
    item.animate(
      [
        {
          transform: 'translateY(100%)',
          opacity: 0,
        },
        {
          transform: 'translateY(0)',
          opacity: 1,
        },
      ],
      {
        duration: 300,
        // 처음 path부터 올라옴
        delay: index * 100,
        fill: 'forwards',
      }
    );
  });
}

// Letter 사라지는 애니메이션 함수
function letterExitAnimationFn() {
  letters.forEach((item, index) => {
    item.animate(
      [
        {
          transform: 'translateY(0)',
          opacity: 1,
        },
        {
          transform: 'translateY(100%)',
          opacity: 0,
        },
      ],
      {
        duration: 200,
        // 마지막 path부터 사라짐
        delay: (lettersLength - index - 1) * 50,
        fill: 'forwards',
      }
    );
  });
}

// scroll 이벤트 리스너 함수
window.addEventListener('scroll', () => {
  // Y축 스크롤 위치, .section-1의 높이 가져오기
  const scrollY = window.scrollY;
  const sectionHeight = section.offsetHeight; // 400vh => window.innerHeight * 4

  // 0~1 사이의 progress 값 구하기
  // 첫 페이지 로딩시 scrollY = 0이므로 progress 값 : 0;
  // .section-1 스크롤 끝나는 지점 scrollY = 2757, sectionHeight = 3676, window.innerHeight = 919 이므로 progress 값 : 1;
  let progress = scrollY / (sectionHeight - window.innerHeight);

  // progress값이 0밑으로 떨어지면안되고 1보다 커지면 안되므로
  // Math.max(progress, 0) => 0보다 작아지면 0
  //  Math.min(Math.max(progress, 0), 1) => 1보다 커지면 1
  progress = Math.min(Math.max(progress, 0), 1);

  // progress 값이 0.03미만 일때
  if (progress < 0.03) {
    // letterVisible이 false 일때
    if (!letterVisible) {
      // letterStartAnimationFn() 실행
      letterStartAnimationFn();
      // letterVisible 변수 true로 수정
      letterVisible = true;
    }

    // .fashiontown-banner-text 초기 설정 (숨김, 위치)
    bannerText.style.opacity = 0;
    bannerText.style.transform = `translateX(10%)`;
  } else {
    // letterVisible이 true 일때
    if (letterVisible) {
      // letterExitAnimationFn() 실행
      letterExitAnimationFn();
      // letterVisible 변수 false로 수정
      letterVisible = false;
    }

    // progress가 0.03 이상 0.1 미만 일때
    if (progress >= 0.03 && progress < 0.1) {
      // bannerText의 opacity를 점진적으로 올라가게 하기위한 식
      // progress = 0.03 => opacity = 0
      // progress = 0.09 => opacity = 1에 근접
      let localProgress = (progress - 0.03) / 0.07;
      bannerText.style.opacity = localProgress;
    }

    // progress가 0.1이상 일때
    if (progress >= 0.1) {
      // bannerText opacity 1로 고정
      bannerText.style.opacity = 1;
    }

    // progress가 0.1 ~ 0.35 도달 할때 까지
    // moveProgress는 0 -> 1 로 점진적 증가
    // progress가가 0.35초과시 moveProgress는 1로 고정
    let moveProgress = Math.min((progress - 0.1) / 0.25, 1);
    // 이동할 translateX = 처음 고정값(10%) - (moveProgress * 이동할거리)
    // 최종 bannerText가 이동하는 거리는 translateX = 10% -> -60%
    let translateX = 10 - moveProgress * 70;
    // scale 초기값 변수 작성
    let scale = 1;

    // progress가 0.3이상 일때
    if (progress >= 0.3) {
      // progress가 0.3 ~ 0.4 도달 할때 까지
      // scaleProgress는 0 -> 1 로 점진적 증가
      // progress가 0.4 초과시 scaleProgress는 1로 고정
      let scaleProgress = Math.min((progress - 0.3) / 0.1, 1);

      // 최종 scale = 1 -> 0.3
      scale = 1 - scaleProgress * 0.7;
    }

    // 계산한 translateX, scale값 bannerText에 적용
    bannerText.style.transform = `translateX(${translateX}%) scale(${scale})`;

    // scale이 점진적으로 작아짐에 따라 opacity도 점진적으로 흐려지게 하기 위한 식
    let opacity = (scale - 0.3) / 0.7;

    // opacity를 scale에 따라 0~1로 계산 후, Math.max로 최소값을 0.5로 고정
    opacity = Math.max(0.5, Math.min(1, opacity));
    // 첫번째 .text-1에 부여
    text1.style.opacity = opacity;

    // progress가 0.45이상이 될때
    // .text-1의 opacity를 0으로 고정
    if (progress >= 0.45) text1.style.opacity = 0;

    // flipWrapper의 item들을 가져와 NodeList의 수를 구함
    const itemLength = flipWrapper.querySelectorAll('.flip-item').length;

    // progress가 0.46이상 일때
    if (progress >= 0.46) {
      // flip 스타일 적용
      flip.style.inlineSize = '100%';
      flip.style.borderBottom = '25px solid #fff';

      // progress 0.46부터 0.08 단위로 증가하여 보여주기 위한 식
      // progress 0.46이상 0.08씩 늘어날 때마다 index가 1식 올라감
      let index = Math.floor((progress - 0.46) / 0.08);

      // index가 flipItem 갯수 보다 커짐을 방지한다
      index = Math.min(index, itemLength - 1);

      // flipWrapper에 스타일 적용
      flipWrapper.style.transform = `translateY(-${index * 100}%)`;
    } else {
      // flip 초기값
      flip.style.inlineSize = '';
      flip.style.borderBottom = '';
      flipWrapper.style.transform = `translateY(0%)`;
    }

    // progress가 0.99이상이되면 bannerText 숨김
    if (progress >= 0.99) {
      bannerText.style.opacity = 0;
    }
  }
});

// 첫 화면 로딩시 Letter 애니메이션 시작
letterStartAnimationFn();
```

### 분석

- `class=letter`들을 `Element.animate()`를 이용하여 애니메이션 함수를 만듬
- `window.addEventListener('scroll', callback)`을 이용하여 스크롤 구간(progress)마다 <br/> FashionTown로고, bannerText등 제어

## 4주차 회고

이번 주 과제는 애니메이션 구현이었습니다. 평소 프로젝트와 과제에서도 사용자 시점을 고려해 부드럽운 이동,사라짐 효과를 자주 사용해 왔기 때문에, 이번에도 어떻게 하면 사용자의 눈을 즐겁게 할 수 있을지 고민을 많이 했습니다. <br/>
여러 웹사이트를 찾아보며 아이디어를 얻던 중, 스크롤시 다음 섹션으로 넘어가는 것이 아닌 하나의 구간에서 여러 콘텐츠들을 스크롤을 통해 순차적으로 보여준 뒤 다음 섹션으로 넘어가는 사이트들을 종종 보게되었고, 구현해보고 싶다는 생각에 시도하게 되었습니다.<br/>
처음엔 간단할 거라 생각했지만 스크롤 시 구간을 나누어 콘텐츠를 순차적으로 보여주는 작업이 생각보다 많이 힘든 작업이였습니다.<br/>
결과적으론 제가 원하는 만큼 결과물이 나와 만족스럽지만, 백지상태에서 다시 만들라 했을때엔 자신 없다는 것입니다...<br/>
이번 과제를 진행하며 JavaScript에서 특정 범위 내에서 값을 제한하는 clamp함수도 다시 한번 공부하게 되어서 유익 하였으며 반복적인 코드 작성 연습의 중요성도 느겼습니다.꾸준한 연습으로 이번 애니메이션 과제도 온전히 제 것으로 만들 수 있도록 더 노력해야 할 것 같습니다.
