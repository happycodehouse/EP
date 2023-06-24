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
    activateMenuItem(index);
    window.scroll({
      top: scrollOffsets[index],
      behavior: 'smooth'
    });
  };
});

// 스크롤 이벤트 핸들러 등록
window.addEventListener('scroll', function() {
  let currentPosition = window.pageYOffset;

  // 현재 위치와 가장 가까운 content의 인덱스를 찾기
  let closestIndex = findClosestIndex(currentPosition, scrollOffsets);

  // 해당 인덱스의 menu span 활성화
  activateMenuItem(closestIndex);
});

// 가장 가까운 content의 인덱스를 찾는 함수
function findClosestIndex(position, offsets) {
  let closestIndex = 0;
  let distance = Math.abs(position - offsets[0]);

  for (let i = 1; i < offsets.length; i++) {
    let currentDistance = Math.abs(position - offsets[i]);
    if (currentDistance < distance) {
      distance = currentDistance;
      closestIndex = i;
    }
  }

  return closestIndex;
}

// menu span 활성화 함수
function activateMenuItem(index) {
  navTrigger.forEach(function(trigger, i) {
    if (i === index) {
      trigger.style.color = '#1a1a1a';
      trigger.style.textDecoration = 'underline';
    } else {
      trigger.style.color = '#adadad';
      trigger.style.textDecoration = 'none';
    }
  });

  if (index === 2) {
    document.querySelector('.menu').style.borderColor = '#fff';
    navTrigger.forEach(function(trigger, i) {
      if (i !== index) {
        trigger.style.color = '#fff';
      }
    });
  } else {
    document.querySelector('.menu').style.borderColor = '';
  }
}
