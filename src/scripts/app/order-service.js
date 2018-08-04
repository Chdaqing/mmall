define(['jquery','mm'],function($,_mm){
	return{
		//获取商品列表
      getProductList : function(selove,reject){
      	   require(['./data/product-list_data'],function(productData){
      	   	
      	   	      if(productData && typeof selove == 'function'){
      	   	      	    	 selove(productData);
      	   	      }else if(typeof reject=='function'){
      	   	      	         reject('error');	  	     
      	   	      }
      	      })
         },
         //提交订单
      orderCreate : function(orderInfo,selove,reject){
      	     _mm.request({
      	     	 url     : _mm.getServerUrl('/order/create.do'),
      	     	 data    : orderInfo,
      	     	 success : resolve,
      	     	 error   : reject
      	     });
      }
	}
})
