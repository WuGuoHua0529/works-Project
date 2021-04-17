const buyData = [
  {
    key: 1,
    name: "韓系刷毛大衣",
    url: ['./images/women/w3.png', './images/korea/k2.png'],
    money: "2600",
    size: ['S','M','L','XL'],
    color: ['黑', '咖啡']
  },
  {
    key: 2,
    name: "單寧牛仔外套【深藍】",
    url: ['./images/man/m2.png'],
    money: "1499",
    size: ['S','M','L']
  },
  {
    key: 3,
    name: '單寧刷破牛仔褲【藍】',
    url: ['./images/man/m3.png'],
    money: '899',
    size: ['29','30','31','32'],
  },
  {
    key: 4,
    name: '純棉潮流外套x聯名suqer【白】',
    url: ['./images/women/w1.png'],
    money: '2600',
    size: ['S','M','L','XL']
  },
  {
    key: 5,
    name: 'MP-LOGO-圓領T恤',
    url: ['./images/women/w2.png'],
    money: '700',
    size: ['S','M','L','XL']
  },
  {
    key: 6,
    name: '編織運動鞋x聯名ADIDSC',
    url: ['./images/korea/k3.png'],
    money: '1289',
    size: ['29','30','31','32'],
  },
  {
    key: 7,
    name: '日系搖滾LOGO-T恤',
    url: ['./images/japan/j3.png'],
    money: '899',
    size: ['S','M','L','XL']
  },
  {
    key: 8,
    name: '黑XBIG-BANG-黑系大衣',
    url: ['./images/korea/k1.png'],
    money: '3200',
    size: ['S','M','L','XL']
  },
]
function showBuy (data) {
  $('.buyGo-row').append(
    '<div class="buyGo-col text-center py-2" data-id="'+data.key+'" onclick="buy('+data.key+')">'+
      '<div class="buyGo-img-box">'+
        '<img src="'+data.url[0]+'">'+
        '<div class="buyGo-go">GO ! 買</div>'+
      '</div>'+
      '<p class="py-2">'+data.name+'</p>'+
      '<p>NT$ '+data.money+'</p>'+
    '</div>'
  )
}
function buy (key) {
  const data = buyData.find(item => item.key == key)
  let sizeHtml = '' 
  let imgHtml = ''
  data.size.forEach((item, index) => {
    const defaultSzie = index == 0 ? " buyThis-size-btn-active" : ""
    sizeHtml += '<button class="buyThis-size-btn'+defaultSzie+'" data-size="'+item+'" onclick="selectSize(event)">'+item+'</button>'
  })
  data.url.forEach((item, index) => {
    imgHtml += '<img src="'+item+'" onclick=selectImg("'+item+'")>'
  })
  const clickData = JSON.stringify(data)
  $('.buyGo-row').empty().append(
    '<div class="buyThis-col py-2">'+
      '<div class="buyThis-img-row">'+
        '<div class="buyThis-img-box">'+
          '<img class="buyThis-img" src="'+data.url[0]+'">'+
        '</div>'+
        '<hr>'+
        '<div class="buyThis-img-list">'+imgHtml+'</div>'+
      '</div>'+
      '<div class="buyThis-content-box">'+
        '<h2 class="py-2 bold">'+data.name+'</h2>'+
        '<p class="buyThis-content-money">NT$ '+data.money+'</p>'+
        '<p class="my-2">尺寸: '+sizeHtml+'</p>'+
        '<div class="my-5">數量: <input class="ml-2" min="1" type="number" value="1"></div>'+
        '<button class="my-5 buyThis-carts" onclick=goCarts('+clickData+')>加入購物車</button>'+
      '</div>'+
    '</div>'
  )
}
function selectSize ($event) {
  const select = $event.target.dataset.size
  $('.buyThis-size-btn').removeClass('buyThis-size-btn-active');
  $(".buyThis-size-btn[data-size="+select+"]").addClass('buyThis-size-btn-active');
};
function selectImg (url) {
  $('.buyThis-img-box').empty();
  $('.buyThis-img-box').append('<img class="buyThis-img" src="'+url+'">');
};
function goCarts (data) {
  const buySize = $('.buyThis-size-btn-active').text()
  const localData = localStorage.getItem('cartsData')
  data.buySize = buySize
  if (localData) {
    let nowcarts = JSON.parse(localData)
    const is_bus = nowcarts.some(it => it.key == data.key)
    if (is_bus) {
      alert("已經加入購物車摟!")
      return false
    } else {
      nowcarts.push(data)
      localStorage.setItem('cartsData', JSON.stringify(nowcarts))
      alert("加入完成!")
    }
  } else {
    localStorage.setItem('cartsData', JSON.stringify([data]))
    alert("加入完成!")
  }
};
function getCatsNum () {
  const localData = localStorage.getItem('cartsData');
  const dataLength = JSON.parse(localData).length;
  $('.cars-now-num').empty().append(dataLength);
};
$(document).ready(function (){
  getCatsNum()
  buyData.forEach(item => {
    showBuy(item)
  })
  let cartsTime = window.setInterval("getCatsNum()",3000); 
});