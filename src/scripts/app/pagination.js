define(['jquery',
         'mm',
         'text!../templates/common/pagination.html', 
         './data/page_data'],function($,_mm,templateIndex,data){
	
	var Pagination = function(){
		this.defaultOption={
			container:null,
			pageNum:1,
			pageRange:3,
			onSelectPage: null
		};
		$(document).on('click','.pg-item',function(){
			    $this = $(this);
			   if($this.hasClass('active')||$this.hasClass('disabled')){
			   	     return;
			   }
		})
	};
	Pagination.prototype.render=function(option){
		 this.option = $.extend({},defaultOption,option);
		 if(!(this.container instanceof jQuery){
		 	 return;
		 }
		 if(this.option.pages<=1){
		  	 return;
		  }
		 this.option.container.html(this.getPaginationHtml);
	};
	Pagination.prototype.getPaginationHtml = function(){
		  var html = '',
		      option  = this.option,
		      pageArray = [],
		      start = option.pageNum - option.pageRange < 0 ? 1:option.pageNum - option.pageRange;
		      end  =  option.pageNum + option.pageRange > pages ? pages:option.pageNum + option.pageRange;
		      pageArray.push({
		      	    name:'上一页',
		      	    value:this.option.prePage,
		      	    disabled : !this.option.hasPrePage
		      });
		      for(var i = start;i<end;i++){
		      	    pageArray.push({
		      	    	name:i,
		      	    	value:i,
		      	    	active : (i === option.pageNum)
		      	    });	    
		      }
		      pageArray.push({
		      	     name:'下一页',
		      	     value:this.option.nextPage,
		      	     disabled : !this.option.hasNextPage
		      })
		      
		     // var html = _mm.renderHtml(templatePagination,{
		     // 	    pageArray:pageArray,
		     // 	    pageNum  : option.pageNum,
             //       pages    : option.pages
		     // })
		      var html = _mm.renderHtml(templateIndex,data);
    
		     return html;
	}
})
