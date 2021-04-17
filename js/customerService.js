let checkNumber = ''
function getCheckNumber () {
  checkNumber = ''
  for (var i =1; i < 5; i ++) {
    checkNumber =	checkNumber += Math.floor(Math.random()*10)
  }
  $(".check-number-box").empty().append(checkNumber);
}
function submitCheck () {
  const inputArray = $('.form-input')
  inputArray.each(function(index, item) {
    if ($(this).val()) {
      $(".required-box"+index).remove();
    } else if ($(".required-box"+index).length <= 0){
      $(this).after('<div class="red-text ml-5 required required-box'+index+'">*必填</div>')
    }
  });
  if (checkNumber == $('.check-input').val()) {
    $('.check-error').empty()
    if ($(".required").length <= 0) {
      inputArray.each(function(index, item) {
        $(this).val('')
      })
      $('.check-input').val('')
      alert('送出完成')
    }
  } else {
    $('.check-error').empty().append('*驗證碼錯誤')
  }
}
$(document).ready(function (){
  getCheckNumber()
});