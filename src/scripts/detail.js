require(['./config'],function(config){
       require([
	   	       'template',
	           'jquery',
	           'text!../templates/common/product-detail.html',
	           'mm',
	           'cart-service'
	           ],function(template,$,templateIndex,_mm,cartService){
	           	        var productDetailData='';
		                var data = {
		                 productId: _mm.getUrlParam('productId')||''	
					    };
						var init = function(){
								template.load();
								onLoad();
							    bindEvent();	
						};
						var bindEvent = function(){
							$('#page-wrap').on('click','.cart-add',function(){						
								var cartCount = parseInt($('.cart-count').text());
	                            $('.cart-count').text(cartCount+1);
							});
							$(document).on('init',function(e,result){
								var productDatas = result;
								var html='';
						                  //var productDetailData='';
						                  var productArr=[];
								     	        for(var item in productDatas){
								     	            productArr.push(productDatas[item]);
								     	        }
								          var productNew=productArr[0].concat(productArr[1]).concat(productArr[2]).concat(productArr[3]).concat(productArr[4]);
								     	       for(var i =0,len=productNew.length;i<len;i++){
								     	           if(productNew[i].id===data.productId){
								     	         		 productDetailData=productNew[i];   
								     	         		     }
								     	         }
								     	      html = _mm.renderHtml(templateIndex,productDetailData);
								  	          $('.page-wrap').html(html);
							});
						   $(document).on('myclick',function(){
								  	var cartCount = parseInt($('.cart-count').text());
	                                $('.cart-count').text(cartCount+1);
								      });
						           $('#page-wrap').on('click','.p-count-btn',function(){
										var count = parseInt($('.p-count').val());
			                            if($(this).hasClass('plus')){
			                       	    $('.p-count').val(count+1);
			                            }else{
			   	                       var value = count-1;
			   	                        if(value<1){
			   	 	                    return;
			   	                       }
			                        $('.p-count').val(value);
			   	 
			                           }
			                            
									});
						   $(document).on('click','.cart-add',function(){
							   // cartService.addToCart(data.productId,function(){
							    	window.location.href="./result.html?type=cart-add";
							    //},function(errMsg){
							    //	    _mm.errorTips("加入失败，请刷新试试")
							   // });
						   })

					   };
						var onLoad = function(){
								if(!data.productId){
								 	 _mm.goHome();
							        }
								  /*loadDetail(function(){
								  	console.log('回调');
								  });*/
								  loadDetail();
								  
							};
	
					  
						/*var loadDetail  = function(callback){
								      //$('.page-wrap').html(productTemplate);
								     require(['product_data'],function(productData){
								     	  var html='';
						                  var productDetailData='';
								     	     $.each(productData.data,function(i,item){
								     	     	     if(item.id===data.productId){
								     	     	          	productDetailData = item;   
								     	     	       }
								     	          });
								     	     	 html = _mm.renderHtml(productTemplate,productDetailData);
								  	             $('.page-wrap').html(html);
								  	             callback();
								     });
								  	 
						  };*/
						  var loadDetail  = function(){
								      //$('.page-wrap').html(productTemplate);
								     require(['product_data'],function(productData){
								  	             $(document).trigger('init',productData);
								     });
								  	 
						  };
						  
							$(function(){
						
							    init();
					  });
			 })
});