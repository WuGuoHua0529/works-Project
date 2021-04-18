$(document).ready(function (){
  const imgData = [
    {
      url: 'j1',
      name: '京都復古風! 溫暖迷人 古裝潮流',
      content: '復古再起,當時尚與復古結合,線條雕塑身材完美無缺.'
    },
    {
      url: 'j2',
      name: '神奇寶貝 聯名! 限量販售!',
      content: '日本限量聯名-神奇寶貝,女孩兒也能穿出可愛回憶,趕緊加入購買!'
    },
    {
      url: 'j3',
      name: '日系搖滾 - 嘻哈 X 摩托尬',
      content: '搖滾碰撞,當紅嘻哈元素再度崛起,簡單穿著也能穿出MAN味,檔不住的女孩<3'
    },
  ]
  $.each(imgData, function(index, item) {
    $('.hot-content').append(
      '<div class="ml-5 mt-4">'+
        '<div class="hot-img-box">'+
          '<img class="hot-img" src="./images/japan/'+item.url+'.png">'+
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