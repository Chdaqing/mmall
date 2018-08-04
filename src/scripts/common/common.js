var oNav = document.getElementById('nav'),
    oHeader = document.getElementById('header'),
    oFooter = document.getElementById('footer');
var nav =
'<div class="nav">'+
    '<div class="w">'+
        '<div class="user-info">'+
            '<span class="user not-login">'+
                '<a class="link js-login" href="/mmall/src/templates/user-login.html">登录</a>'+
                '<a class="link js-register" href="/mmall/src/templates/user-register.html">注册</a>'+
            '</span>'+
            '<span class="user login">'+
                '<span class="link-text">'+
                          '欢迎,'+
                    '<span class="username"></span>'+
                '</span>'+
                '<span class="link js-logout">退出</span>'+
            '</span>'+
        '</div>'+
        '<ul class="nav-list">'+
            '<li class="nav-item">'+
                '<a class="link" href="./cart.html">'+
                    '<i class="fa fa-shopping-cart"></i>'+
                        ' 购物车(<span class="cart-count">0</span>)'+
                '</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="link" href="./order-list.html">我的订单</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="link" href="./user-center.html">我的MMall</a>'+
            '</li>'+
            '<li class="nav-item">'+
                '<a class="link" href="./about.html">关于MMall</a>'+
            '</li>'+
        '</ul>'+
   '</div>'+
'</div>';

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
     
var footer =
'<div class="footer">'+
    '<div class="w">'+
        '<div class="links">'+
            '<a class="link" href="http://www.imooc.com" target="_blank">慕课网</a>'+
            '<a class="link" href="https://www.baidu.com" target="_blank">百度</a>'+
            '<a class="link" href="https://www.taobao.com" target="_blank">淘宝</a>'+
            '<a class="link" href="https://www.zhihu.com" target="_blank">知乎</a>'+
        '</div>'+
        '<p class="copyright">'+
            'Copyright © 2017 happymmall.com All Right Reserved'+
    '</div>'+
'</div>';
oNav.innerHTML= nav;
oHeader.innerHTML= header;
oFooter.innerHTML = footer;