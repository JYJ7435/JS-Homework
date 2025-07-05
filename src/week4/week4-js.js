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
