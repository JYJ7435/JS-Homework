# JavaScript 1주차 과제

멋사 프론트엔드 14기 1주차 과제 문서입니다.

## 목차

- [변수, 상수 작성](#변수-상수-작성)
- [함수 작성](#함수-작성)
- [1주차 회고](#1주차-회고)

## 변수, 상수 작성

- 각 항목에 대해 변수나 상수를 선언하고, 알맞은 값을 할당하는 과제.

```
1. 사용자 이름을 저장할 변수를 선언하고 "자신의 이름"을 할당하세요.
2. "절대 영도(온도의 최저 한계)인 -273.15°C"를 담을 상수를 선언하세요.
3. "로그인 여부"를 확인하는 불리언 타입 변수을 선언하고 적절한값을 할당하세요.
4. "사용자 나이" 변수를 선언하고 숫자 값을 할당하세요.
5. "상품 가격(예: 39,900원)"을 담는 변수를 작성하세요.
6. 웹 페이지의 "배경색"을 담는 상수를 작성하고 적절한 값을 할당하세요.
7. 사용자가 작성한 "댓글 수(예: 12)"를 담는 변수를 선언하고 값을 할당하세요.
8. "현재 페이지 번호(예: 3)"를 담는 변수를 작성하고 적절한 값을 할당하세요.
9. "회원 등급('VIP', '골드', '실버' 중 하나)"을 담는 변수를 작성해보세요.
10. "버튼이 클릭되었는지 여부"를 담는 변수를 선언하고 불리언 타입 값을 설정하세요.
```

### 분석

- 값이 변할 수있는지 판단하여 작성
- 값이 변하지 않을경우 `const` 사용
- 값이 변할 경우 `let` 사용
- 명확하고 직관적인 병수명 사용
- 데이터의 타입과 형식을 파악

### 결과

```
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
```

- 명확하고 직관적인 변수명을 사용하여 용도와 의미를 알 수 있게 사용
- 데이터 값이 변하지 않는 상수는 대문자 및 snake_case 사용

## 함수 작성

- 각 항목의 조건들을 고려하여 작성

### 1. 인사말 메시지

<table style="border:1px solid #fff">
  <tbody>
    <tr>
      <th style="border-right:1px solid #fff">함수이름</th>
      <td>greetUser</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">매개변수</th>
      <td>username</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">기능</th>
      <td>인사말 메시지 "안녕하세요! {이름}님. 좋은 하루 되세요!"를<br /> 문자열로 반환</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">반환값 타입</th>
      <td>String</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">비고</th>
      <td>함수 선언으로 작성</td>
    </tr>
  </tbody>
</table>

### 결과

```
function greetUser(username) {
  return `안녕하세요! ${username}님. 좋은 하루되세요!`;
}

// console.log(greetUser('장영주')) => 안녕하세요! 장영주님. 좋은 하루되세요!
```

- 매개변수 username 입력시 백틱기호 및 `${username}`을 이용하여 반환

### 2. 원가 계산

<table style="border:1px solid #fff">
  <tbody>
    <tr>
      <th style="border-right:1px solid #fff">함수이름</th>
      <td>calculateOriginalPrice</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">매개변수</th>
      <td>priceWithTax</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">기능</th>
      <td>판매 가격에서 세금을 제외한 원가 반환</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">반환값 타입</th>
      <td>	
        Number
      </td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">비고</th>
      <td>	
        함수 표현식으로 작성
      </td>
    </tr>
  </tbody>
</table>

### 결과

```
const calculateOriginalPrice = function (priceWithTax) {
  const TAX_RATE = 3.3;

  return priceWithTax / (1 + TAX_RATE / 100);
};

// console.log(calculateOriginalPrice(3000)) => 2904
```

- 변하지 않는 세율 `TAX_RATE` 상수로 선언

### 3. 주류 판매 가능 여부

<table style="border:1px solid #fff">
  <tbody>
    <tr>
      <th style="border-right:1px solid #fff">함수이름</th>
      <td>canSellAlcohol</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">매개변수</th>
      <td>registrationCard</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">기능</th>
      <td>신분증의 나이를 확인해 주류 판매 가능 여부를<br/> 불리언 타입으로 반환</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">반환값 타입</th>
      <td>	
        Boolean
      </td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">비고</th>
      <td>	
        화살표 함수 표현식으로 작성
      </td>
    </tr>
  </tbody>
</table>
<table style="border:1px solid #fff">
  <tbody>
    <tr>
      <th style="border-right:1px solid #fff">객체 이름</th>
      <td>registrationCard</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">속성</th>
      <td>이름(name)</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">속성</th>
      <td>나이(age)</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">속성</th>
      <td>	
        성별(gender)
      </td>
    </tr>
  </tbody>
</table>

### 결과

```
const registrationCard = {
  name: '장영주',
  age: 33,
  gender: 'male',
};
const canSellAlcohol = (registrationCard) => {
  return registrationCard.age >= 19;
};

// console.log(canSellAlcohol(registrationCard)) => true
```

- 객체`(registrationCard)`를 매개변수로 전달,<br/>
  `registrationCard.age`의 값이 19세 이상 일시 `true` 반환

### 4. 할인가 계산

<table style="border:1px solid #fff">
  <tbody>
    <tr>
      <th style="border-right:1px solid #fff">함수이름</th>
      <td>getDiscountedPrice</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">매개변수</th>
      <td>originalPrice, discountPercent</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">기능</th>
      <td>	
        판매가에서 할인율을 적용한 할인가를 반환
      </td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">반환값 타입</th>
      <td>	
        Number
      </td>
    </tr>
  </tbody>
</table>

### 결과

```
const getDiscountedPrice = (originalPrice, discountPercent) => {
  return originalPrice * (1 - discountPercent / 100);
};

// console.log(getDiscountedPrice(18700, 20)) => 14960
```

- 매개변수 `originalPrice, discountPercent` 입력시
  할인율에 따라 값을 반환

### 5. 등급 판단

<table style="border:1px solid #fff">
  <tbody>
    <thead>
      <tr>
        <th style="border:1px solid #fff">
          점수 범위
        </th>
        <th style="border:1px solid #fff">
          등급 (Grade)
        </th>
        <th>
          설명
        </th>
      </tr>
    </thead>
    <tr>
      <th style="border-right:1px solid #fff">90 ~ 100점</th>
      <td style="border-right:1px solid #fff">A</td>
      <td>매우 우수</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">80 ~ 89점</th>
      <td style="border-right:1px solid #fff">B</td>
      <td>우수</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">70 ~ 79점</th>
      <td style="border-right:1px solid #fff">C</td>
      <td>보통</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">60 ~ 69점</th>
      <td style="border-right:1px solid #fff">D</td>
      <td>미달, 통과 기준 근접</td>
    </tr>
    <tr>
      <th style="border-right:1px solid #fff">0 ~ 59점</th>
      <td style="border-right:1px solid #fff">F</td>
      <td>낙제</td>
    </tr>
  </tbody>
</table>

### 결과

```
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

// console.log(gradeJudgment(90)) => {score:90, grade:'B', description:'우수'}
```

### 결과

- 데이터의 가공 및 유지보수를 우려하여 초기 객체를 변수에 할당
- 100점 초과시 조건문을 통해 경고창을 보여준다
- `else if`문을 사용하여 비교 처리

## 1주차 회고

첫 UI프로젝트를 마치고 JavaScript 수업이 시작된 한 주였다.
프로젝트 이후 처음 시작한 JS의역사, 개념 중심의 수업은 아무래도 집중력이 현저히 떨어짐과 동시에 졸면서 수업을 듣기도 하였습니다. 변수 선언, 함수, 객체 등의 익숙한 내용의 수업이 이어지다 보니 긴장감도 줄어들었던 것 같습니다.<br /> 기본기를 탄탄하게 다지겠다며 시작한 부트캠프였지만 이번 주 목,금 자습 시간을 통해 혼자 토이프로젝트를 진행하며 많은 생각이 들었습니다.<br/>
'기본 개념부터 다시 공부해야 겠다'라는 생각을 가지고 시작하였는데 강의를 집중해서 듣지 않는 제 자신이 모순되게 느껴졌습니다.
강사님의 학습 자료중 공개되었던 내용들을 금요일 수업끝나고 천천히 살펴 보고 직접 콘솔 창에 입력 및 출력결과를 확인 해보며 놓쳤던 부분들이 많았다는 것을 느끼고, 2주차 부턴 수업에 집중해 보려 합니다.
