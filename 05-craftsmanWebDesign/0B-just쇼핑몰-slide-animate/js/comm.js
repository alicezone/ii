$(function () {
  // modal열기
  // modal: .lst-bbs li-첫번째first-child를 클릭했을때
  $(".lst-bbs li:first-child").on("click", function () {
    // #아이디modal 값에 클래스 active를 추가하면 모달이 떠
    $("#modal").addClass("active");
  });

  //modal 닫기
  // #아이디값이modal의 button을 클릭했을때
  $("#modal button").on("click", function () {
    // #modal에 클래스네임에 active를 삭제해서 모달이 닫힌다
    $("#modal").removeClass("active");
  });

  // tabs 만들기 
  // .tab-item 옆에 .on 삭제
  $(".tab-item").removeClass("on");
  // .tab-item:first-child에게 .on 추가
  $(".tab-item:first-child").addClass("on");

  // .tab-item .tit를 클릭했을때
  $(".tab-item .tit").on("click", function () {
    // .tab-item에 붙어있는 on 삭제
    $(".tab-item").removeClass("on");

    //방금 클릭한 나(this)의 부모(parent)에게 .on 추가
    $(this).parent().addClass("on");

  })


});