require(['./config'],function(config){
      require(['template',
               'jquery',
               'header-ui',
               'mm',
               'product-service',
               'text!../templates/common/list.html',
               'product_data'
               ],function(template,$,header,_mm,_product,templateProductList,product_data){
	   var data = {
		    listParam:{
						keyword:_mm.getUrlParam('keyword')||'',//关键字
						categoryId :_mm.getUrlParam('categoryId ')||'',//类别
						orderBy :_mm.getUrlParam('orderBy')||'default',//顺序
						pageNum : _mm.getUrlParam('pageNum')||1,//第几页
					    pageSizeageSize:_mm.getUrlParam('pageSize')||20//总页数
		            }
			};
			 var pagination;
			 var init = function(){
			 	 template.load();
			 	 header.init();
			 	 onLoad();
			 	 bindEvent();
			 };
			 var onLoad = function(){
			 	   loadList();
			 };
			 var bindEvent = function(){
				//排序的点击事件
				 $('.sort-item').click(function(){
				 	data.listParam.pageNum = 1;
				 	var $this = $(this);
				 	if($this.data('type')==='default'){
				 		  if($this.hasClass('active')){
				 		  	   return;
				 		  }else{
				 		  	   $this.addClass('active').siblings('.sort-item').removeClass('active asc desc');
				 		  	   data.listParam.orderBy='default';
				 		  }
				 	}
				 	else if($this.data('type')==='price'){
				 		   $this.addClass('active').siblings('.sort-item').removeClass('active');
				 		     if(!$this.hasClass('asc')){
		                        $this.addClass('asc').removeClass('desc');
		                        data.listParam.orderBy='price_asc';
				 		      }else{
				 		      	$this.addClass('desc').removeClass('asc');
				 		      	data.listParam.orderBy='price_desc';
				 		      }
				 	}
				 	loadList();     
				 })
			};
			//排序函数
			var compareSmall = function (property){
			 	   	 return function(a,b){
			 	   	 	var value1 = a[property];
			 	   	 	var value2 = b[property];
			 	   	 	return value1-value2;
			 	   	 }
			 	   	
			 	  };
			var compareBig = function (property){
			 	   	 return function(a,b){
			 	   	 	var value1 = a[property];
			 	   	 	var value2 = b[property];
			 	   	 /*	if(value1 < value2){
			 	   	 		 return 1;
			 	   	 	}else if(value1 == value2){
			 	   	 		 return 0;
			 	   	 	}else{
			 	   	 		 return -1;
			 	   	 	}*/
			 	   	 	return value2-value1;
			 	   	 }
			 	   	
			 	  };
			var compareDefault = function(property){
				   	 return function(a,b){
			 	   	 	var value1 = a[property];
			 	   	 	var value2 = b[property];
			 	   	 	return value1-value2;
			 	   	 }
			};
		  //渲染商品列表
			var renderProduct = function(data){
				  var html='',
				      $pListCon = $('.p-list-con');
			 	       Html=_mm.renderHtml(templateProductList,data);
		               $pListCon.html(Html);
			};
			 //加载商品列表
			 var loadList = function(){
			 	   var listParam = data.listParam,
			 	       productData = {};
			 	    for(var item in product_data){
			 	     	      if(item===listParam.keyword){
			 	     	      	productData.list = product_data[item]; 
			 	     	      }
			 	    }
			 	    
			 	    if(listParam.orderBy==='default'){
			 	 	    productData.list = productData.list.sort(compareDefault('id'));
			 	  	  renderProduct(productData);
			 	     }
			 	    else if(listParam.orderBy==='price_asc'){
			 	       productData.list = productData.list.sort(compareSmall('price'));
			 	       renderProduct(productData);
			 	   
			      }else if(listParam.orderBy==='price_desc'){
			      	   productData.list = productData.list.sort(compareBig('price'));
			      	   renderProduct(productData);
			      	   
			      }
			 	 // var listParam = data.listParam;
			 	 //  _product.getProductList(listParam,function(res){
		             /* loadPagination({
		               	hasPreviousPage : res.hasPreviousPage,
		                prePage         : res.prePage,
		                hasNextPage     : res.hasNextPage,
		                nextPage        : res.nextPage,
		                pageNum         : res.pageNum,
		                pages           : res.pages     
		              });*/
			 	   	  // listHtml = _mm.renderHtml({
			 	   	   //   	list:res.list
			 	   	   //  },template);	     
			 	  // },function(errMsg){
			 	   //	     _mm.errorTips(errMsg);
			 	  // })
			 /*var loadPagination = function(pageInfo){
			 	  pagination = ''? pagination = new Pagination();
			 	  pagination.render($.extend({},pageInfo,{
			 	  	    container:$('.pagination'),
			 	  	    onSelectPage : function(pageNum){ 
			 	  	        data.listParam.pageNum = pageNum;
		                    loadList();
			 	  	    }
			 	  }))
			 }*/
			};
			 
			 $(function(){
			      init();
			 })
		})
});