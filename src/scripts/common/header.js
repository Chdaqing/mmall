var oHeader = document.getElementById('header');
var header =
'<div class="header">'+
    '<div class="w">'+
        '<a class="logo" href="./index.html">MMall</a>'+
        '<div class="search-con">'+
            '<input class="search-input" id="search-input" placeholder="请输入商品名称"/>'+
            '<button class="btn search-btn" id="search-btn">搜索</button>'+
        '</div>'+
    '</div>'+
  '</div>';
  oHeader.innerHTML= header;