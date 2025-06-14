// 변수, 상수 작성 과제
// 1.사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
let myName = '장영주';

// 2."절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
const ABSOLUTE_ZERO = -273.15;

// 3."로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
let isLoggedIn = true;

// 4."사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
let userAge = 33;

// 5.상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
let productPrice = 39900;

// 6.웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
const BACKGROUND_COLOR = '#000';

// 7.사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
let commentsCount = 12;

// 8."현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
let currentPage = 3;

// 9."회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
let memberGrade = 'VIP';

// 10."버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
let isButtonClicked = true;

// -------------------------------------------------------------------------------

// 함수 작성 과제
// 1. 인사말 메시지
// 사용자로부터 이름을 입력받아 인사말을 출력하는 함수를 작성합니다.
function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`;
}

// 2. 원가 계산
const calculateOriginalPrice = function (priceWithTax) {
  const TAX_RATE = 3.3;

  return priceWithTax / (1 + TAX_RATE / 100);
};

// 3. 주류 판매 가능 여부
const registrationCard = {
  name: '장영주',
  age: 33,
  gender: 'male',
};
const canSellAlcohol = (registrationCard) => {
  return registrationCard.age >= 19;
};

// 4. 할인가 계산
const getDiscountedPrice = (originalPrice, discountPercent) => {
  return originalPrice * (1 - discountPercent / 100);
};

// 5. 등급 판단
const gradeJudgment = (score) => {
  let format = {
    score,
    grade: '',
    description: '',
  };

  if (score > 100) return alert('100점을 초과한 점수를 입력할 수 없습니다.');

  if (score >= 90) {
    format.grade = 'A';
    format.description = '매우 우수';
  } else if (score >= 80) {
    format.grade = 'B';
    format.description = '우수';
  } else if (score >= 70) {
    format.grade = 'C';
    format.description = '보통';
  } else if (score >= 60) {
    format.grade = 'D';
    format.description = '미달, 통과 기준 근접';
  } else {
    format.grade = 'F';
    format.description = '낙제';
  }

  return format;
};
