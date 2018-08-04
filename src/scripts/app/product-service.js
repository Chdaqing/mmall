define(['jquery','mm'],function($,_mm){
 //获取商品列表
   var getProductList=function(userInfo,selove,reject){
		_mm.request({
			   url:_mm.getServerUrl('/user/login.do'),
			   data:userInfo,
			   mothod:'POST',
			   success:selove,
			   error:reject
		});	
	};
	//获取商品详细信息
var getProductDetail = function(userInfo,selove,reject){
	_mm.request({
			   url:'../data/product-detail.json',
			   data:userInfo,
			   mothod:'GET',
			   success:selove,
			   error:reject,
			   type:'json'
	   });	
};
   return {
	   getProductList:getProductList,
	   getProductDetail:getProductDetail
	   
     }	
})
