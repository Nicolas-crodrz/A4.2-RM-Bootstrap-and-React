$(document).ready(function () {
  $(".gallery").flipping_gallery({
    enableScroll: true,
    autoplay: 2000,
  });

  $(".next").click(function () {
    $(".gallery").flipForward();
    return false;
  });
  $(".prev").click(function () {
    $(".gallery").flipBackward();
    return false;
  });
});


new TypeIt(".typing", {
  speed: 100,
  waitUntilVisible: true,
}).go();