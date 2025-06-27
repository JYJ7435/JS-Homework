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
