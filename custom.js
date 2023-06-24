let navTrigger = document.querySelectorAll('.menu span');
let scrollContent = document.querySelectorAll('section .content');
let scrollOffsets = [];

// .content의 상단의 값을 배열에 저장
scrollContent.forEach(function(content) {
  scrollOffsets.push(content.offsetTop);
});

// 클릭 이벤트 핸들러 등록
navTrigger.forEach(function(trigger, index) {
  trigger.onclick = function() {
    // 모든 span 요소의 글자 색상을 #adadad로 설정
    navTrigger.forEach(function(element) {
      element.style.color = '#adadad';
      element.style.textDecoration = 'none';
    });

    // 클릭한 span 요소의 글자 색상을 #1a1a1a로 설정
    trigger.style.color = '#1a1a1a';
    trigger.style.textDecoration = 'underline';

    window.scroll({
      top: scrollOffsets[index],
      behavior: 'smooth'
    });

    // 3번째 content에 도달했을 때 menu의 보더 색상과 다른 span 요소의 글자 색상 변경
    if (index === 2) {
      document.querySelector('.menu').style.borderColor = '#fff';
      navTrigger.forEach(function(element) {
        element.style.color = '#fff';
      });
      navTrigger[2].style.color = '#1a1a1a'
    } else {
      document.querySelector('.menu').style.borderColor = '';
    }
  };
});