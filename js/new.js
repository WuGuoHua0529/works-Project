function moreNew () {
  console.log($('div').hasClass('new-context-row2'));
  if ($('div').hasClass('new-context-row2')) {
    $(".new-context-row2").remove();
    $(".new-more").empty().append('觀看更多商品')
  } else {
    $(".new-context-row").after(
      '<div class="new-context-row new-context-row2">'+
        '<img src="./images/new/new5.png">'+
        '<img src="./images/new/new6.png">'+
        '<img src="./images/new/new7.png">'+
      '</div>'
    );
    $(".new-more").empty().append('收起瀏覽商品')
  }
}
$(document).ready(function (){
  anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});