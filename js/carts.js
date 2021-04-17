function showBuyData() {
  const cartsData = JSON.parse(localStorage.getItem('cartsData'))
  let total = 0
  let tbodyHtml = ''
  cartsData.forEach(item => {
    total = total+Number(item.money)
    tbodyHtml += '<tr>'+
                  '<td>'+item.name+'</td>'+
                  '<td>$'+item.money+'</td>'+
                  '<td>'+item.buySize+'</td>'+
                  '<td><img src="./images/common/trash.png" style="cursor: pointer;" onclick=removeBuy('+item.key+')></td>'+
                '</tr>'
  });
  total = thousand(total)
  $('.carts-tbody').empty().append(tbodyHtml)
  $('.carts-total').empty().append(total)
}
function removeBuy (key) {
  const cartsData = JSON.parse(localStorage.getItem('cartsData'))
  const filterData = cartsData.filter(function(item, index, arr) {
    return item.key != key
  })
  localStorage.setItem('cartsData', JSON.stringify(filterData))
  showBuyData()
}

const thousand = val => {
  if (!val) return
  let str = val+ ''
  return str.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}

$(document).ready(function (){
  $('.pay-input').bind('click', function(e) {
    if(e.target.dataset.id == 1) {
      $('.pay-catNum input').attr('disabled', true);
    } else {
      $('.pay-catNum input').attr('disabled', false);
    }
  });
  showBuyData()
});