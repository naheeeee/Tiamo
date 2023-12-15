$(function () {
  $(".ham_open").click(function () {
    $(".gnb").addClass("on");
    $(".ham_close").addClass("on");
  });
  $(".ham_close").click(function () {
    $(".gnb").removeClass("on");
    $(".ham_close").removeClass("on");
  });
});

const $hamOpen = document.querySelector(".ham_open"),
  $hamClose = document.querySelector(".ham_close");

$hamOpen.addEventListener("click", function () {
  document.body.classList.add("scrollLock");
});
$hamClose.addEventListener("click", function () {
  document.body.classList.remove("scrollLock");
});
