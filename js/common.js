function getCatsNum () {
  const localData = localStorage.getItem('cartsData');
  const dataLength = JSON.parse(localData).length;
  $('.cars-now-num').empty().append(dataLength);
};

$(document).ready(function (){
  getCatsNum()
  let cartsTime = window.setInterval("getCatsNum()",3000); 
});