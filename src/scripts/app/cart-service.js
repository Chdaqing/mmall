define(['jquery','mm'],function($,_mm){
     return{
     	 // 获取购物车数量
	    getCartCount : function(resolve, reject){
	        _mm.request({
	            url     : _mm.getServerUrl('/cart/get_cart_product_count.do'),
	            success : resolve,
	            error   : reject
	        });
	    },
	    // 添加到购物车
	    addToCart : function(productInfo, resolve, reject){
	       /* _mm.request({
	            url     : _mm.getServerUrl('/cart/add.do'),
	            data    : productInfo,
	            success : resolve,
	            error   : reject
	        });*/
	       require(['./data/cart-data'],function(cartData){
	       	if(cartData&&typeof resolve ==="function"){
	       	    
	       	        resolve();
	       	     }else if(!cartData&&typeof reject === 'function'){
	       	     	    reject();
	       	     }
	       	
	       })
	    },
     	//获取购物车信息
     	getCartList : function (selove,reject){
     		  _mm.request({
              url:_mm.getServerUrl('/user/register.do'),
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
            });

     	},
     	//选择商品
       selectProduct : function(productId,selove,reject){
            _mm.request({
              url:_mm.getServerUrl('/user/register.do'),
		   	  data:{
		   	  	productId:productId
		   	  },
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject

            });
       },
       //取消商品
       unselectProduct : function(productId,selove,reject){
       	 _mm.request({
              url:_mm.getServerUrl('/user/register.do'),
		   	  data:{
		   	  	productId:productId
		   	  },
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject

            });

       },
       //选择全部商品
         selectAllProduct : function(selove,reject){
       	 _mm.request({
              url:_mm.getServerUrl('/user/register.do'),
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject

            })

       },
       //取消全部商品
         unselectAllProduct : function(selove,reject){
       	 _mm.request({
              url:_mm.getServerUrl('/user/register.do'),
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject

            })

       },
       //更新商品
       updateProduct : function(userInfo,selove,reject){
       		 _mm.request({
              url:_mm.getServerUrl('/user/register.do'),
		   	  data:userInfo,
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
            });

       }




     }


});