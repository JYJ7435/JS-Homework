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
