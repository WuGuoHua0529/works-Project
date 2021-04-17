$(document).ready(function (){
  const imgData = [
    {
      url: 'k1',
      name: 'RAP HOT! 與BIG BANG一起搖滾',
      content: '音樂跨界合作,推出嘻哈搖滾周邊,與你最愛的韓國潮流明星一起時尚!'
    },
    {
      url: 'k2',
      name: '當季刷毛大衣~變身韓系美少女、歐巴',
      content: '搭上目前最熱銷的韓系大衣,偶像程度瞬間UP!UP!UP!'
    },
    {
      url: 'k3',
      name: '舒適編織材質搭配科技氣墊,無敵鞋款-強勢登場-',
      content: '最新技術的科技氣墊,讓你跋山涉水都可以一馬當先,像是親觸大地般的自然舒適.'
    },
  ]
  $.each(imgData, function(index, item) {
    $('.hot-content').append(
      '<div class="ml-5 mt-4">'+
        '<div class="hot-img-box">'+
          '<img class="hot-img" src="./images/korea/'+item.url+'.png">'+
          '<div class="ml-5" style="width:500px;">'+
            '<p>'+item.name+'</p>'+
            '<p class="hot-img-content">'+item.content+'</p>'+
            '<p class="hot-img-more">more</p>'+
          '</div>'+
        '</div>'+
      '</div>'
    )
  });
});