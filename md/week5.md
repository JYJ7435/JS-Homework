# JavaScript 5주차 과제

멋사 프론트엔드 14기 5주차 과제 문서입니다. <br/>
Business Card

## 목차

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)
- [5주차 회고](#5주차-회고)

## HTML

- 웹 접근성을 고려하여 작성.
- 구조

```html
<main>
  <section class="left-section">
    <form class="maker-form">
      <h2>명함 등록 하기</h2>

      <div class="input-group">
        <input type="text" id="input-company" name="company" class="input-company" placeholder="회사" required />
        <label for="input-company">회사</label>
      </div>

      <div class="input-group">
        <input type="text" id="input-name" name="name" class="input-name" placeholder="이름" required />
        <label for="input-name">이름</label>
      </div>

      <div class="input-group">
        <input type="text" id="input-role" name="role" class="input-role" placeholder="직무" required />
        <label for="input-role">직무</label>
      </div>

      <div class="input-group">
        <input type="tel" id="input-phone" name="phone" class="input-phone" placeholder="전화번호" required />
        <label for="input-phone">전화번호</label>
      </div>

      <div class="input-group">
        <input type="email" id="input-email" name="email" class="input-email" placeholder="이메일" required />
        <label for="input-email">이메일</label>
      </div>

      <div class="color-selector">
        <input type="color" id="font-color" name="font-color" value="#ffffff" />
        <label for="font-color">폰트 색상</label>

        <input type="color" id="bg-color" name="bg-color" value="#000000" />
        <label for="bg-color">배경 색상</label>
      </div>

      <div class="preview-group">
        <h2>미리 보기</h2>
        <div class="preview-container">
          <article class="card">
            <div class="left-group">
              <h2>멋쟁이사자처럼</h2>
              <h3>홍길동</h3>
            </div>
            <div class="right-group">
              <div class="icon-group">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>

                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
                  <path
                    d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  ></path>
                </svg>

                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div class="info-group">
                <p>Frontend Developer</p>
                <p>01012345678</p>
                <p>sample@naver.com</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="button-group">
        <button type="button">취소</button>
        <button type="submit">저장</button>
      </div>
    </form>
  </section>

  <section class="right-section">
    <h2>명함 리스트</h2>
    <ul class="lists">
      <li class="list-item">
        <article class="card">
          <div class="left-group">
            <h2>멋쟁이사자처럼</h2>
            <h3>장영주</h3>
          </div>
          <div class="right-group">
            <div class="icon-group">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>

              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
                <path
                  d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>

              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="info-group">
              <p>Frontend Developer</p>
              <p>01012345678</p>
              <p>ju7435@naver.com</p>
            </div>
          </div>
        </article>
        <button type="button">삭제</button>
      </li>
    </ul>

    <div class="card-empty-container">
      <p>명함을 등록해 주세요!!</p>
    </div>
  </section>
</main>
```

### 분석

- `main` 태그에 좌,우측의 section 태그로 나누어 입력 필드, 아이템 리스트 필드 나눔
- `.input-group`은 라벨 + 인풋으로 UX와 접근성 측면에서 사용
- `svg`는 단순 꾸미기용 이미지이므로 `aria-hidden="true"` 적용

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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

main {
  margin-inline: 3.125rem;
  display: flex;
  gap: 1.25rem;
}

.maker-form {
  display: flex;
  flex-flow: column nowrap;
  inline-size: 31.25rem;
}

.input-group {
  --font-size: 1rem;
  --font-weight: 500;

  margin-block: 0.625rem;

  position: relative;
  padding: 0;
  border: 0;
  outline: 1px solid #808080;
  border-radius: 0.5rem;

  & label {
    position: absolute;
    top: 47%;
    left: 11px;
    transform: translate(0%, -50%);
    transition: top 300ms ease;
    font-size: var(--font-size);
    background-color: transparent;
    color: transparent;
    font-weight: var(--font-weight);
  }

  & input {
    inline-size: 100%;
    block-size: 3.125rem;
    padding-inline: 0.625rem;
    font-size: var(--font-size);
    border: 0;
    outline: 0;

    &::placeholder {
      font-size: var(--font-size);
      font-weight: var(--font-weight);
    }
  }

  &:focus-within {
    outline: 1px solid #000;

    & label {
      display: block;
      top: 0;
      background-color: #fff;
      color: #000;
    }

    & input::placeholder {
      color: transparent;
    }
  }

  & input:not(:placeholder-shown) + label {
    display: block;
    top: 0;
    background-color: #fff;
    color: #000;
  }

  & input:not(:placeholder-shown)::placeholder {
    color: transparent;
  }
}

.color-selector {
  display: flex;
  flex-flow: row nowrap;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;

  & input {
    cursor: pointer;
  }
}

.button-group {
  margin-block: 0.625rem;
  display: flex;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;

  & button {
    cursor: pointer;
    inline-size: 6.25rem;
    font-size: 1rem;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 0.3125rem;
    padding-block: 0.3125rem;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}

.preview-group {
  inline-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    align-self: self-start;
  }
}

.preview-container {
  background-color: #f0f0f0;
  padding-block: 0.9375rem;
  inline-size: 100%;
  display: flex;
  justify-content: center;
}

.card {
  --font-color: #fff;
  --bg-color: #000;

  inline-size: 100%;
  max-inline-size: 24.0625rem;
  block-size: 12.5rem;
  background-color: var(--bg-color);
  border: 0;
  border-radius: 0.625rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding-inline: 0.9375rem;
  color: var(--font-color);

  & h2,
  h3 {
    margin: 0;
  }

  & h2 {
    font-size: 1.125rem;
  }

  & h3 {
    font-size: 1rem;
  }

  & .left-group {
    flex: 1;
  }

  & .right-group {
    flex: 1;
    display: flex;
    inline-size: 100%;
    block-size: 100%;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    color: inherit;

    .icon-group,
    .info-group {
      display: flex;
      justify-content: center;
      flex-flow: column nowrap;
      padding-inline: 0.625rem;
      gap: 0.9375rem;
    }

    .icon-group {
      background-color: #fff;
      block-size: 100%;
      color: black;

      & svg {
        display: block;
        inline-size: 18px;
        block-size: 18px;
      }
    }

    .info-group {
      flex: 1;
      margin: 0;
      max-inline-size: 8.75rem;
      block-size: 100%;
      font-size: 0.75rem;

      & p {
        block-size: 1.125rem;
        word-wrap: break-word;
      }
    }
  }
}

.right-section {
  inline-size: 100%;
  border-left: 1px solid #808080;
  padding-inline-start: 1.25rem;
}

.lists {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 0.9375rem;

  & .list-item {
    inline-size: 100%;
    background-color: #f0f0f0;
    place-items: center;
    padding: 1.875rem;
    position: relative;

    & button {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      background-color: transparent;
      outline: 0;
      border: 1px solid #000;
      border-radius: 0.3125rem;
      cursor: pointer;

      &:hover {
        border-color: #fd3f3f;
        background-color: #fd3f3f;
        color: #fff;
      }
    }

    &:hover {
      & button {
        display: block;
      }
    }
  }

  &:empty + .card-empty-container {
    display: block;
  }
}

.card-empty-container {
  display: none;
  font-size: 1.25rem;
  font-weight: 500;
}
```

### 분석

- `--font-color`, `--bg-color`로 테마 컬러를 CSS 변수로 관리
- `label`이 인풋 안으로 겹쳐 있다가 포커스시 위로 올라가는 애니메이션 구현

## JavaScript

- 함수를 사용하여 재사용, 유지보수등을 고려하여 작성
- 구조

```js
'use strict';
const makerForm = document.querySelector('.maker-form');
const cardLists = document.querySelector('.lists');
const previewCard = document.querySelector('.preview-container .card');
const input = document.querySelectorAll('.input-group input');
const colorSelector = document.querySelectorAll('.color-selector');
const cancelButton = document.querySelector('.button-group [type="button"]');

// .maker-form 이벤트 등록
makerForm.addEventListener('submit', (e) => {
  // 브라우저 기본 동작 제어
  e.preventDefault();

  const form = e.currentTarget;

  // form[name]으로 입력필드 값 가져옴
  const company = form['company'].value.trim();
  const name = form['name'].value.trim();
  const phone = form['phone'].value.trim();
  const role = form['role'].value.trim();
  const email = form['email'].value.trim();
  const fontColor = form['font-color'].value;
  const bgColor = form['bg-color'].value;
  // 폼데이터 객체화
  const formData = {
    company,
    name,
    phone,
    role,
    email,
    fontColor,
    bgColor,
  };

  // .lists에 요소 삽입
  cardLists.append(addBusinessCard(formData));

  form.reset();
  previewCardReset();
});

// 취소 버튼 이벤트 등록
cancelButton.addEventListener('click', () => {
  makerForm.reset();
  previewCardReset();
});

// 디바운스 핸들러 등록
const debounceHandler = debounce(eventInput);

// 명함카드 정보 입력 필드 이벤트 등록
input.forEach((item) => {
  item.addEventListener('input', debounceHandler);
});

// 폰트 색상, 카드 배경 이벤트 등록
colorSelector.forEach((item) => {
  item.addEventListener('input', debounceHandler);
});

// cardLists 이벤트 위임으로
// 클릭시 명함카드 삭제
cardLists.addEventListener('click', (e) => {
  // 삭제 버튼 가져옴
  const removeButton = e.target.closest('[type="button"]');

  // 없을시 다음 코드 실행 X
  if (!removeButton) return;

  // .list-item 삭제
  removeButton.closest('.list-item').remove();

  //.cardLists의 자식 요소가 없을시 빈문자 삽입
  if (cardLists.children.length === 0) cardLists.innerHTML = '';
});

// 명함카드 추가 함수
function addBusinessCard({ company, name, phone, role, email, fontColor, bgColor }) {
  const list = document.createElement('li');
  list.classList.add('list-item');

  // DOMPurify.sanitize()으로 살균 작업 (CDN사용)
  list.innerHTML = DOMPurify.sanitize(`
    <article class="card">
              <div class="left-group">
                <h2>${company}</h2>
                <h3>${name}</h3>
              </div>
              <div class="right-group">
                <div class="icon-group">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>

                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call">
                    <path
                      d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>

                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div class="info-group">
                  <p>${role}</p>
                  <p>${phone}</p>
                  <p>${email}</p>
                </div>
              </div>
            </article>
            <button type="button">삭제</button>
    `);

  // 리스트 안에 카트 요소 선택
  const card = list.querySelector('.card');

  // setProperty로 css변수 색상 제어
  card.style.setProperty('--font-color', fontColor);
  card.style.setProperty('--bg-color', bgColor);

  return list;
}

// 프리뷰카드 리셋 함수
function previewCardReset() {
  previewCard.querySelector('.left-group h2').textContent = '멋쟁이사자처럼';
  previewCard.querySelector('.left-group h3').textContent = '홍길동';
  previewCard.querySelector('.right-group .info-group p:nth-of-type(1)').textContent = 'Frontend Developer';
  previewCard.querySelector('.right-group .info-group p:nth-of-type(2)').textContent = '01012345678';
  previewCard.querySelector('.right-group .info-group p:nth-of-type(3)').textContent = 'sample@naver.com';
  previewCard.style.setProperty('--font-color', '#fff');
  previewCard.style.setProperty('--bg-color', '#000');
}

// 디바운스 함수
function debounce(callback, delay = 300) {
  let cleanup;

  return (...args) => {
    clearTimeout(cleanup);
    cleanup = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// Input 이벤트 함수
function eventInput(e) {
  // 구조분해 할당
  const { name, value } = e.target;

  // switch 구문으로 제어
  switch (name) {
    case 'company':
      previewCard.querySelector('.left-group h2').textContent = value;
      break;
    case 'name':
      previewCard.querySelector('.left-group h3').textContent = value;
      break;
    case 'role':
      previewCard.querySelector('.right-group .info-group p:nth-of-type(1)').textContent = value;
      break;
    case 'phone':
      previewCard.querySelector('.right-group .info-group p:nth-of-type(2)').textContent = value;
      break;
    case 'email':
      previewCard.querySelector('.right-group .info-group p:nth-of-type(3)').textContent = value;
      break;
    case 'font-color':
      previewCard.style.setProperty('--font-color', value);
      break;
    case 'bg-color':
      previewCard.style.setProperty('--bg-color', value);
      break;
  }
}
```

### 분석

- `input` 이벤트로 입력값과 테마컬러 실시간 미리보기 반영
- `submit`시에 값 저장, 아이템 리스트 추가
- `reset` 버튼으로 폼과 미리보기 초기화
- `DOMPurify.sanitize()`으로 XSS 방지
- `debouncing`으로 짧은 시간 안에 많이 발생하는 동작을 줄여, 성능 고려

## 5주차 회고

이번주 과제같은 경우 노션문서에 제시된 계산기나 팝오버, 타입어헤드 중에서 무엇을 선택할지 고민하다, 수업 시간에 배웠던 내용을 최대한 복습할 수 있는 주제를 직접 정해서 해보면 좋겠다 싶어 자율 주제로 진행해 보았습니다.<br/> 최근 실습했던 to-do-list와 비슷한 명함카드 생성기???를 만들어 보며 폼 데이터 처리, DOM조작, 이벤트 위임 등 평소 자주 사용하여 익숙하면서도 중요한 내용들을 다시 한번 확인할 수 있었습니다.<br/>
특히 과제를 수행하며 XSS 방지하는 방법, 디바운싱 기법을 적용 하여 보안과 성능 등을 최적화 하는 것에 대해 다시 한 번 공부할 수 있어 좋았던 시간이었습니다.
