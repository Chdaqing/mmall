require(['./config'],function(config){
	   require([
	   	       'template',
	            'text!../templates/common/cart-list.html',
	            'mm'
	            ],function(template,templateIndex,_mm){
	   	      var info = {
	   	      	   cartInfo : ''
	   	      };
	   	      var init = function(){
	   	      	template.load();
	   	      	   onLoad();
	   	      };
	   	      var onLoad = function(){
	   	         loadCart();
	   	      	bindEvent();
	   	      };
	   	      //加载购物车信息
	   	      var loadCart = function(){
                 /*  _cart.getCartList(function(res){
                       renderCart(res);
                   },function(errMsg){
                      $('.page-wrap').html('<p>哪里不对了，刷新下试试</p>');
                   });*/
                   require(['./data/cart-data'],function(productData){
                   	     renderCart(productData);
                   });
	   	      };

	   	      var bindEvent = function(){
	   	      	   //商品的单选
	   	      	    $(document).on('click','.cart-select',function(){
	   	      	    	var $this = $(this),
	   	      	    	    productId = $this.parents('.cart-table').data('product-id');
	   	      	    	 //选中
	   	      	    	if($this.is(':checked')){
	   	      	    	   	  _cart.selectProduct(productId,function(res){
                                renderCart(res);
		   	      	    	   },function(errMsg){
	                            showCartError();
		   	      	    	   });
                         //取消选中
	   	      	    	   }else{
                            _cart.unselectProduct(productId,function(res){
                                renderCart(res);
                            },function(errMsg){
                            	showCartError();
                            });

	   	      	    	   } 
	   	      	    });
	   	      	    //商品的全选
	   	      	     $(document).on('click','.cart-select-all',function(){
	   	      	    	var $this = $(this);
	   	      	    	 //选中
	   	      	    	if($this.is(':checked')){
	   	      	    	   	  _cart.selectAllProduct(function(res){
                                renderCart(res);
		   	      	    	   },function(errMsg){
	                            showCartError();
		   	      	    	   });
                         //取消选中
	   	      	    	   }else{
                            _cart.unselectAllProduct(productId,function(res){
                                renderCart(res);
                            },function(errMsg){
                            	showCartError();
                            });

	   	      	    	   } 
	   	      	    });
	   	      	    //商品数量的变化
	   	      	    $(document).on('click','.count-btn',function(){
                             var $this = $(this),
                                 $pCount =  $this.siblings('.count-input'),
                                 currCount = parseInt($pCount.val()),
                                 type = $this.hasClass('plus')?'plus':'minus',
                                 productId = $this.parents('.cart-table').data('product-id'),
                                 minCount = 0,
                                 maxCount = $pCount.data('max'),
                                 newCount = 0;
                                if(type === 'plus'){
                                	 if(currCount>= maxCount){
                                	 	_mm.errorTips('该商品已达上限');
                                	    return;
                                	 }
                                	 newCount = currCount + 1;	
                                }else if (type === 'minus'){
                                     if(currCount<=minCount){
                                     	 return;
                                     }
                                     newCount = currCount - 1;
                                }
                               /* _cart.updateProduct({
                                	productId:productId,
                                	count:newCount
                                },function(res){
                                	renderCart(res);
                                },function(errMsg){
                                	showCartError();
                                })*/
                                 $pCount.val(newCount);


	   	      	    });
	   	      	    //删除单个商品
	   	      	    $(document).on('click','.cart-delete',function(){
	   	      	    	  if(window.confirm("确认要删除该商品？")){
                                 var productId = $(this).parents('.cart-table').data('product-id');
                                 deletaCartProduct(productId);
	   	      	    	  }
	   	      	    });
	   	      	    //删除选中商品
	   	      	    $(document).on('click','.delete-selected',function(){
	   	      	    	       if(window.confirm('确认要删除商品？')){
	   	      	    	       	       var arrProductIds = [],
	   	      	    	       	           $selectedItem = $('.cart-select:checked');
	   	      	    	       	       for(var i = 0,iLength=selectedItem.length;i<iLength;i++){
	   	      	    	       	       	      arrProductIds.push(selectedItem[i].parents('.cart-table').data('product-id'));
	   	      	    	       	       }
	   	      	    	       	        if(arrProductIds.length){
	   	      	    	       	        	 deleteCartProduct(arrProductIds);
	   	      	    	       	        }else{
	   	      	    	       	        	  _mm.errorTips('您还没选中商品');
	   	      	    	       	        }
	   	      	    	       }
	   	      	    })
	   	      };
	   	      //渲染购物车
	   	      var renderCart = function(data){
	   	             // filter(data);
                     info.cartInfo=data;
	   	      	     var cartHtml = '',
                         cartHtml = _mm.renderHtml(templateIndex,data); 
	   	      	        $('#cart').html(cartHtml);  	               
	   	      };
	   	      //提示信息
	   	      var showCartError = function(){
                      $('.page-wrap').html('<p class="err-tip">哪里不对了，刷新下试试吧。</p>'); 
	   	      };
	   	      //删除指定商品
	   	      var deleteCartProduct = function(productIds){
	   	      	       _cart.deleteProduct(productIds,function(res){
                              renderCart(res);
	   	      	       },function(errMsg){
                              showCartError();
	   	      	       });
	   	      };
	   	      //匹配数据
	   	      var filter = function(data){
                 data.notEmpty = !!data.cartProductVoList.lengtn;
                
	   	      };
	   	      $(function(){
	   	      	  init();
	   	      });
	   	
	   });
	
});
