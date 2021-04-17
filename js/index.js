function checkSlide(className) {
    let sliderImage = $(".action-img")
    // 我們希望瀏覽器視窗移動到圖片一半的位置才觸發滑入
    // 因此將瀏覽器視窗底部位置減掉圖片一半高度作為觸發點
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height() / 2;
    // 圖片底部位置
    const imageBottom = sliderImage.offset().top + sliderImage.height();
    // 當瀏覽器底部跑到圖片一半位置下方時
    const isHalfShown = slideInAt+100 > sliderImage.offset().top;
    // 瀏覽器底部還沒通過圖片底部時
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.addClass('active');
    } else {
      sliderImage.removeClass('active');
    }
}

// window.addEventListener('scroll', checkSlide);
  function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  $(document).ready(function (){
      // 回呼函式得先用 debounce 處理過
    window.addEventListener('scroll', debounce(checkSlide));
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
      .add({
        targets: '.ml3 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (el, i) => 150 * (i+1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
  });