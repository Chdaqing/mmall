require(['./config'],function(config){
	     require([
	     	      'jquery',
	     	      'template',
	     	      'address-service',
	     	      'order-service',
	     	      'mm',
	     	      'text!../templates/common/address-list.html',
	     	      'text!../templates/common/product-list.html',
	     	      'address-modal'
	     	      ],function($,template,_address,_order,_mm,templateAddress,templateProduct,addressModal){
	     	    var data = {
	     	    	 selectedAddressId:null
	     	    };
	     	    var init = function(){
	     	    	  template.load();
	     	    	  onLoad();
	     	    	  bindEvent();
	     	    };
	     	    var onLoad = function(){
	     	    	 loadAddressList();
	     	    	 loadProductList();
	     	    };
	     	    var bindEvent = function(){
	     	    	//地址的选择
	     	    	$(document).on('click','.address-item',function(){
	     	    		 $(this).addClass('active').siblings('.address-item').removeClass('active');
	     	    		 data.selectedAddressId=$(this).data('id');
	     	    	
	     	    	});
	     	    	//订单的提交
	     	    	$(document).on('click','.order-submit',function(){
	     	    		var shoppingId = data.selectedAddressId;
	     	    		    if(shoppingId){
	     	    		    	//_order.creataOrder({
	     	    		    	//	shoppingId:shoppingId
	     	    		    	//},function(res){
	     	    		    		alert("提交成功")
	     	    		    		window.location.href='./payment.html?orderNumber='+orderNo
	     	    		    	//},function(errMsg){
	     	    		    	//	 _mm.errTips(errMsg);
	     	    		    	//})
	     	    		    }else{
	     	    		    	_mm.errorTips('请选择地址后再提交')
	     	    		    }
	     	    	});
	     	    	//添加新地址
	     	    	$(document).on('click','.address-add',function(){
	     	    		  addressModal.show({
	     	    		  	   isUpdate:false,
	     	    		  	   onSuccess: function(){
	     	    		  	   
	     	    		  	   	   loadAddressList();
	     	    		  	   }
	     	    		  })
	     	    	});
	     	    	//更新地址
	     	    	$(document).on('click','.address-update',function(e){
	     	    		 e.stopPropagation();
	     	    		  var shoppingId = $(this).parents('.address-item').data('id');
	     	    		   _address.getAddress(shoppingId,function(res){
	     	    		   	           addressModal.show({
	     	    		   	           	    isUpdate:true,
	     	    		   	           	    data:res,
	     	    		   	           	    //自己添加的回调
	     	    		   	           	    onSuccess: function(){
	     	    		  	   	                  loadAddressList();
	     	    		  	                    }
	     	    		   	           })
	     	    		   },function(errMsg){
	     	    		   	     _mm.errTips(errMsg);
	     	    		   })
	     	    	});
	     	    	//删除地址
	     	    	$(document).on('click','.address-delete',function(e){
	     	    		  e.stopPropagation();
	     	    		    var shoppingId=$(this).parents('.address-item').data('id');
	     	    		    if(window.confirm("你确认要删除吗")){
	     	    		    _address.deleteAddress(shoppingId,function(res){
	     	    		    	 loadAddressList(res);
	     	    		    },function(errMsg){
	     	    		    	_mm.errorTips(errMsg);
	     	    		    })
	     	    		   }
	     	    	});
	     	    	
	     	    	
	     	       
	     	    };
	     	    //处理地址列表选中状态
	     	    var addressFilter = function(addressData){
	     	    	
	     	    	   if(data.selectedAddressId){
	     	    	            
	     	    	   	     var selectedAddressIdFlag = false;
	     	    	   	     for(var i =0,length=addressData.list.length;i<length;i++){
	     	    	   	     	      if(data.selectedAddressId===addressData.list[i].id){
	     	    	   	     	      	     addressData.list[i].isActive=true;
	     	    	   	     	      	      selectedAddressIdFlag=true;
	     	    	   	     	      	     
	     	    	   	     	      }
	     	    	   	     	        
	     	    	   	     };
	     	    	   	     //如果以前选中的地址不存在列表里，将其删除
	     	    	   	  if(!selectedAddressIdFlag){
	     	    	   	  	    data.selectedAddress=null;
	     	    	   	  }
	     	    	   }
	     	    	
	     	    };
	     	    //加载地址列表
	     	    var loadAddressList = function(){
	     	    	  var addressHtml = '';
	     	    	  _address.getAddressList(function(res){
	     	    	  	   addressFilter(res);
	     	    	  	   addressHtml= _mm.renderHtml(templateAddress,res);
	     	    	  	   $('.address-con').html(addressHtml);
	     	    	  },function(errMsg){
	     	    	  	   $('.address-con').html('<p class="err-tip">地址加载失败，请刷新后重试</p>')
	     	    	  });
	     	    };
	     	    //加载商品列表
	     	    var loadProductList = function(){
	     	    	 var productHtml= '';
	     	    	 _order.getProductList(function(res){
	     	    	 	productHtml=_mm.renderHtml(templateProduct,res);
	     	    	 	$('.product-con').html(productHtml);
	     	    	 },function(errMsg){
	     	    	 	  $('.product-con').html('<p class="err-tip>商品加载失败，请刷新试试</p>')
	     	    	 })
	     	    };
	     	    
	     	    $(function(){
	     	    	  init();
	     	    })
	     });
});
