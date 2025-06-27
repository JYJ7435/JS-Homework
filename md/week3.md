# JavaScript 3주차 과제

멋사 프론트엔드 14기 3주차 과제 문서입니다. <br/>
캐러셀 컴포넌트 만들기

- [피그마 시안 링크](https://www.figma.com/design/8Ix8wCG2iMJktVOD13IRCB/Carousel?node-id=2-34&p=f&m=draw)

## 목차

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [캐러셀 구현](#캐러셀-구현)
- [3주차 회고](#3주차-회고)

## HTML

- 웹 접근성을 고려하여 작성.
- 구조

```html
<section class="carousel">
  <!-- 이전 버튼 -->
  <button type="button" class="carousel-button prev">
    <span class="sr-only">이전 슬라이드</span>
    <svg width="45" height="62" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.125 46.5L16.875 31L28.125 15.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
  <!-- 슬라이드 -->
  <div class="carousel-container">
    <ul class="carousel-wrapper">
      <li class="carousel-content active">
        <div class="blur" aria-hidden="true"></div>
        <figure>
          <div class="content-img">
            <img src="../../public/assets/week3/genesis1.jpg" alt="" />
          </div>
          <figcaption class="content-description">
            <h2>레드닷 어워드 2024</h2>
            <h3>네오룬 콘셉트, 수송 디자인 분야 본상</h3>
            <p>‘수송 디자인(Cars and Motorcycles)’ 분야에서 초대형 전동화 SUV ‘네오룬 콘셉트(NEOLUN·이하 네오룬)’로 본상을 수상했습니다. 네오룬은 ‘단순함 속의 아름다움’이라는 메시지를 담은 독창적인 디자인으로 고급스러움과 혁신을 동시에 강조하며 제네시스만의 미래 지향적 가치를 보여줍니다.</p>
            <div class="content-link">
              <a href="#">
                <span>차량 알아보기</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </figcaption>
        </figure>
      </li>

      ...
    </ul>
  </div>

  <!-- 다음 버튼 -->
  <button type="button" class="carousel-button next">
    <span class="sr-only">다음 슬라이드</span>
    <svg width="45" height="62" viewBox="0 0 45 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.875 46.5L28.125 31L16.875 15.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
  <!-- 인디케이터 -->
  <div class="carousel-indicators">
    <button class="indicator active" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>
    <button class="indicator" type="button">
      <span class="progress"></span>
    </button>

    <!-- 재생,일시정지 버튼 -->
    <div class="play-button-group">
      <button type="button" class="play-button play">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" fill="none" />
          <path d="M3.33337 2L12.6667 8L3.33337 14V2Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="sr-only">슬라이드 재생 버튼</span>
      </button>
      <button type="button" class="play-button stop">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.33333 3H5V13.6667H6.33333V3Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11.6666 3H10.3333V13.6667H11.6666V3Z" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span class="sr-only">슬라이드 일시정지 버튼</span>
      </button>
    </div>
  </div>
</section>
```

### 분석

- `class="carousel-button"`이 어떤 버튼인지 `<span class="sr-only">`으로 확인
- `<figure>`태그 사용으로 이미지와 콘텐츠 설명 작성

## CSS

- 단위:`rem`, color:`hex`
- 구조

```css
* {
  box-sizing: border-box;
}

html,
body {
  background-color: #a1a0a0;
}

/* 스크롤바 전체 */
::-webkit-scrollbar {
  width: 0.5rem; /* 세로 스크롤바 너비 */
}

/* 스크롤바 트랙(배경) */
::-webkit-scrollbar-track {
  background: #f0f0f0;
  border-radius: 0.25rem;
}

/* 스크롤바 핸들(스크롤 하는 막대) */
::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 0.25rem;
}

h2,
h3,
p {
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

figure,
button {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

.sr-only {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.carousel {
  position: relative;
  max-inline-size: 78.6875rem;
  margin: 0 auto;
}

.carousel-container {
  --width: 41.25rem;

  overflow: hidden;
  inline-size: 100%;
  block-size: 100%;

  .carousel-wrapper {
    display: flex;
    gap: 5.125rem;
    transition: transform 0.5s ease;
    transform: translateX(calc((100% - var(--width)) / 2));
  }

  .carousel-content {
    inline-size: var(--width);
    flex-shrink: 0;
    word-break: keep-all;
    background-color: #111;
    position: relative;

    .blur {
      pointer-events: none;
      opacity: 0;
      overflow: hidden;
    }

    .blur.active {
      position: absolute;
      top: 0;
      left: 0;
      inline-size: 100%;
      block-size: 100%;
      background-color: #111;
      z-index: 10;
      pointer-events: auto;
      opacity: 0.6;
    }

    .content-description {
      color: #fff;
      padding: 40px;

      h2 {
        font-weight: 300;
        font-size: 1.125rem;
        margin-block-end: 1rem;
      }

      h3 {
        font-weight: 300;
        font-size: 1.625rem;
        margin-block-end: 1.3125rem;
      }

      p {
        font-size: 0.875rem;
        word-wrap: break-word;
        overflow-y: auto;
        line-height: 2.2;
        max-height: 5.9375rem;
        padding-inline: 0.3125rem;
        box-sizing: content-box;
      }

      .content-link {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        min-height: 4.375rem;

        a {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #fff;
          gap: 0.3125rem;

          span {
            display: inline-block;
            position: relative;
            border-bottom: 1px solid #fff;

            &::after {
              position: absolute;
              display: block;
              content: '';
              inline-size: 0;
              top: 100%;
              left: 0;
              height: 1px;
              background-color: #fff;
              transition: inline-size 0.4s ease;
            }
          }
          &:hover span {
            border-color: transparent;
          }

          &:hover span::after {
            inline-size: 100%;
          }
        }
      }
    }
  }
}

.carousel-button {
  border: 0;
  background: transparent;
  position: absolute;
  top: 50%;
  color: #fff;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 20;

  &.prev {
    left: 0;
  }

  &.next {
    right: 0;
  }

  & svg {
    display: block;
  }
}

.carousel-indicators {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-block-start: 1.5rem;

  button[type='button'] {
    cursor: pointer;
  }
}

.indicator {
  position: relative;
  inline-size: 2rem;
  block-size: 0.25rem;
  background-color: rgba(255, 255, 255, 0.3);
  border: 0;
  border-color: transparent;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
}

.indicator.active {
  inline-size: 10rem;
}

.indicator .progress {
  position: absolute;
  inset: 0;
  background-color: transparent;
  transform-origin: left;
  transform: scaleX(0);
  transition: transform 3s linear;
}

.indicator.active .progress.active {
  background-color: #fff;
  transform: scaleX(1);
}

.play-button-group {
  position: relative;
  inline-size: 1rem;
  block-size: 1rem;
  margin-inline-start: 0.875rem;
}

.play-button {
  border: 0;
  background-color: transparent;
  inline-size: inherit;
  block-size: inherit;

  & svg {
    display: block;
  }

  &.play {
    display: none;
  }

  &.stop {
    display: block;
    position: absolute;
    inset: 0;
  }
}
```

### 결과

- `transition`속성을 사용해 부드러운 애니메이션 효과
- `transform: translateX(calc((100% - var(--width)) / 2))` 보여지는 캐러셀 가운데 정렬

## JavaScript

- 함수를 사용하여 재사용, 유지보수등을 고려하여 작성
- 구조

```js
'use strict';

// 요소 선택
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const container = document.querySelector('.carousel-container');
const wrapper = document.querySelector('.carousel-wrapper');
const contents = document.querySelectorAll('.carousel-content');
const contentsBlur = document.querySelectorAll('.blur');
const indicators = document.querySelectorAll('.indicator');
const playButton = document.querySelector('.play-button.play');
const stopButton = document.querySelector('.play-button.stop');
const progressBar = document.querySelectorAll('.progress');

const ACTIVE_CLASSNAME = 'active';

// 캐러셀 카드 너비, 카드간의 간격(Gap), 요소의 Index
const contentsWidth = contents[0].offsetWidth;
const gap = 82;
let currentIndex = 0;

// Interval함수 제어를 위한 변수
let autoSlideInterval;

// 페이지 로딩시 전체 프로그래스바 active클래스 제거
// 처음 캐러셀 카드의 프로그래스바 active클래서 추가
// 첫 로딩시 프로그래스바 애니메이션을 위한 초기화
progressBar.forEach((bar) => bar.classList.remove(ACTIVE_CLASSNAME));
progressBar.item(currentIndex).classList.add(ACTIVE_CLASSNAME);

// 다음 버튼 이벤트 리스너
nextButton.addEventListener('click', () => {
  if (currentIndex < contents.length - 1) {
    carouselFn(currentIndex + 1);
  }

  pausedSlideFn();
  stopButton.style.display = 'none';
  playButton.style.display = 'block';
  hiddenButton(currentIndex);
});

// 이전 버튼 이벤트 리스너
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    carouselFn(currentIndex - 1);
  }
  pausedSlideFn();
  stopButton.style.display = 'none';
  playButton.style.display = 'block';
  hiddenButton(currentIndex);
});

// 인디케이터 이벤트 리스너
indicators.forEach((item, idx) => {
  item.addEventListener('click', () => {
    carouselFn(idx);
    hiddenButton(idx);
    pausedSlideFn();
    stopButton.style.display = 'none';
    playButton.style.display = 'block';
  });
});

// AutoSlide 이벤트 리스너
playButton.addEventListener('click', () => {
  stopButton.style.display = 'block';
  playButton.style.display = 'none';
  progressBar.item(currentIndex).classList.add('active');
  autoPlaySlideFn();
});

// PausedSlide 이벤트 리스너
stopButton.addEventListener('click', () => {
  stopButton.style.display = 'none';
  playButton.style.display = 'block';
  pausedSlideFn();
});

// 캐러셀 함수
function carouselFn(index) {
  // 캐러셀 컨테이너 너비
  const containerWidth = container.offsetWidth;

  // 첫 번째 캐러셀 카드의 기준점
  const baseOffset = (containerWidth - contentsWidth) / 2;
  // (컨텐츠 + gap) * index으로 슬라이드 가운데 정렬
  const moveX = (contentsWidth + gap) * index;

  wrapper.style.transform = `translateX(${baseOffset - moveX}px)`;

  currentIndex = index;

  contents.forEach((content) => {
    content.classList.remove(ACTIVE_CLASSNAME);
  });

  // contents class에 active가 없는 contents들은 블러처리
  contentsBlur.forEach((blur) => {
    blur.classList.add(ACTIVE_CLASSNAME);
  });

  indicators.forEach((indicator) => {
    indicator.classList.remove(ACTIVE_CLASSNAME);
  });

  progressBar.forEach((bar) => bar.classList.remove(ACTIVE_CLASSNAME));

  // 현재 선택된(class에 active가 추가된)contents class name 처리
  contents.item(currentIndex).classList.add(ACTIVE_CLASSNAME);
  contentsBlur.item(currentIndex).classList.remove(ACTIVE_CLASSNAME);
  indicators.item(currentIndex).classList.add(ACTIVE_CLASSNAME);
  progressBar.item(currentIndex).classList.add(ACTIVE_CLASSNAME);

  settingTabIndexFn();
}

// 버튼 숨김처리 함수
function hiddenButton(index) {
  // 처음 캐러셀 카드가 선택되었을때 prev button 히든
  if (index === 0) {
    prevButton.hidden = true;
  } else {
    prevButton.hidden = false;
  }

  // 마지막 캐러셀 카드가 선택되었을때 next button 히든
  if (index === contents.length - 1) {
    nextButton.hidden = true;
  } else {
    nextButton.hidden = false;
  }
}

// 오토 슬라이드 함수
function autoPlaySlideFn() {
  // sitInterval()를 제어하기위해 만든 변수에 할당
  autoSlideInterval = setInterval(() => {
    // 3초에 한번씩 currentIndex가 증가하며
    currentIndex++;
    // 마지막 컨텐츠가 보여질시 currentIndex 초기화
    if (currentIndex > contents.length - 1) currentIndex = 0;
    // 캐러셀, 버튼숨김 버튼 호출
    carouselFn(currentIndex);
    hiddenButton(currentIndex);
  }, 3000);
}

// 오토 슬라이드 일시정지 함수
function pausedSlideFn() {
  progressBar.forEach((bar) => {
    bar.classList.remove(ACTIVE_CLASSNAME);
  });
  // 일시정지 버튼 or 인디케이터 or prev,next버튼 클릭시
  // clearInterval()를 이용해 오토 슬라이드 중지
  clearInterval(autoSlideInterval);
}

// TabIndex 제어 함수
function settingTabIndexFn() {
  contents.forEach((content) => {
    // html <p>에 스크롤 생길시 키보드로 접근이 가능하여
    // contents요소안에 탭가능한 모든 요소 가져옴

    // contents에 active class가 포함 되어있으면 tabindex 삭제
    if (content.classList.contains(ACTIVE_CLASSNAME)) {
      contents
        .item(currentIndex)
        .querySelectorAll('a, p')
        .forEach((element) => {
          element.removeAttribute('tabindex');
        });
    } else {
      // contents에 active class가 삭제 되어있으면 tabindex 추가
      content.querySelectorAll('a, p').forEach((element) => {
        element.setAttribute('tabindex', '-1');
      });
    }
  });
}

// 첫 화면 로딩시 함수 호출
settingTabIndexFn();
autoPlaySlideFn();
hiddenButton(currentIndex);
```

### 분석

- 첫 화면 로딩시 `TabIndex제어 함수`, `버튼숨김처리 함수`, `autoPlay함수` 호출.

- `autoPlay함수`가 호출이 되면 3초에 한번씩 캐러셀 아이템이 자동으로 다음 아이템으로 넘어간다. 일시정지 버튼이나 인디케이터, 이전 또는 다음 버튼을 누를시 `pausedSlideFn()`함수가 호출 되며 자동슬라이드는 일시 정지가 된고 재생버튼을 누를시 `autoPlay함수`가 호출 된다.

- 처음 캐러셀 아이템이 보여지면 이전버튼이 안보이며 마지막 캐러셀 아이템이 보여질시 다음버튼이 안보인다.

- 인디케이터 클릭시 해당 인덱스에 맞는 캐러셀 아이템으로 이동한다.

- `TabIndex제어 함수`로 키보드 접근성 고려하였다.(스크롤 되는 \<p>, \<a>링크 제어 )

## 캐러셀 구현

![Carousel](../public/assets/week3/result.gif)

## 3주차 회고

3주차 JavaScript 강의도 흥미로웠습니다.<br/>
항상 CSS 제어할때 el.style.color이런 식으로 제어만 해왔는데 setProperty()와 같이 접해보지 못한 메서드를 통해 새로운 CSS 제어및 접근하는 방식을 알게되었습니다.<br/> 이러한 방법들로 Tab, Carousel UI를 만들어 보는 실습시간 또한 뜻깊었습니다.<br/> Tab UI이나 Carousel UI는 간단한 토이프로젝트를 진행할때에도 많이 접하는 UI라 이번 실습이 더 의미 있었던 것 같습니다.<br/> 항상 익숙한 방식으로만 코드를 짜다가, 강사님께서 배운 내용들로만으로도 충분히 UI를 구현하시는 것을 보며 더욱 열심히 반복해서 만들어 봐야겠다는 생각이 들었습니다.
