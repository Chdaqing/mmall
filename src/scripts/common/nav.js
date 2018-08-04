var oNav = document.getElementById('nav');
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
oNav.innerHTML= nav;