// 준비 이벤트 {대괄호가 어디까지 감쌌는지에 따라 
// 변수가 적용되고 안되고 한다}
$(function () {

  // modal열기
  // const는 이름 변수,치환이라고 생각해
  const modalWrap = $("#modal");
  // $("#modal button");
  const modalBtn = modalWrap.find("button");
  const listbbsEl = $(".lst-bbs li:first-child");


  // modal: .lst-bbs li-첫번째first-child를 클릭했을때
  listbbsEl.on("click", function () {
    // #아이디modal 값에 클래스 active를 추가하면 모달이 떠
    modalWrap.addClass("active");
  });

  //modal 닫기
  // #아이디값이modal의 button을 클릭했을때
  modalBtn.on("click", function () {
    // #modal에 클래스네임에 active를 삭제해서 모달이 닫힌다
    modalWrap.removeClass("active");
  });

  // tabs 만들기 
  const tabEl = $(".tab-item");
  // 굳이 이름탭엘레먼트라고 안해도됨
  const tabTit = tabEl.find(".tit");

  // .tab-item 옆에 .on 삭제
  tabEl.removeClass("on");
  // .tab-item:first-child에게 .on 추가
  // $(".tab-item:first-child").addClass("on");
  tabEl.first().addClass("on");

  // .tab-item .tit를 클릭했을때
  tabTit.on("click", function () {
    // .tab-item에 붙어있는 on 삭제
    tabEl.removeClass("on");

    //방금 클릭한 나(this)의 부모(parent)에게 .on 추가
    $(this).parent().addClass("on");
  });

  // slide
  let now = 1;
  const slideEls = $(".lst-slide");
  let height = 100;

  // 3초 마다 실행 1000=1초
  setInterval(function () {
    slide();
  }, 3000);

  // 슬라이드 기능 만들기
  function slide() {
    console.log("dd");
    // .lst-slide를 애니메이션(top:-300px)
    // "300px"은 txt로 인식하기때문에 "문자"로 넣어야한다
    // $(".lst-slide").animate({ top: "-300px" });
    // 3초 후에 -300px 3초 후에 -600px이 되어야한다


    // 조건문
    // now: 0 - 1번째 슬라이드
    // now: 1 - 2번째 슬라이드
    // now: 2 - 3번째 슬라이드
    // 참: 만약 1,2번째 슬라이드일 경우
    // 거짓: 3번째 슬라이드일 경우
    if (now < 3) {
      // 참 일 경우
      // 다음 슬라이드로 이동
      // $(".lst-slide").animate({ top: "-100%" });
      // slide-wrap 조부모의 값의 h300을 인식 100%로 넣어도 된다.

      slideEls.animate({
        top: height * now * -1 + "%",
      });
      // 변수 재선언
      now = now + 1;

    } else {
      // 거짓 일 경우
      // 첫번째 슬라이드로 이동
      slideEls.animate({
        top: 0,
      });
      now = 1;
    }

  }

});