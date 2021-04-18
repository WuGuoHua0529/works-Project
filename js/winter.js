$(document).ready(function (){
  const imgData = [
    {
      url: 'winter1',
      name: '暖冬圍巾 X 型男單品',
      content: '手工編織圍巾,舒適材質冬季、秋季都實用,型男必備穿搭單品'
    },
    {
      url: 'winter2',
      name: '當地陶瓷拉坏師傅手工馬克杯,限量500組! 再送高級皮革手套,晚來就搶不到搂>///<',
      content: '溫暖熱可可配上手工馬克杯讓你冬季再不寒冷,內裡刷毛、外層防風皮革騎車再也不凍手!'
    },
    {
      url: 'winter3',
      name: '鵝絨羊絨 - 輕盈羽絨衣,好看好搭配,冬季不再擁腫!',
      content: '高品質動物絨毛、細緻車縫搭配多種配色,百變穿搭讓你穿得暖又時尚'
    },
  ]
  $.each(imgData, function(index, item) {
    $('.hot-content').append(
      '<div class="ml-5 mt-4">'+
        '<div class="hot-img-box">'+
          '<img class="hot-img" src="./images/winter/'+item.url+'.png">'+
          '<div class="ml-5 hot-infor">'+
            '<p>'+item.name+'</p>'+
            '<p class="hot-img-content">'+item.content+'</p>'+
            '<p class="hot-img-more">more</p>'+
          '</div>'+
        '</div>'+
      '</div>'
    )
  });
});