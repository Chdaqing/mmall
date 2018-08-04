define(['jquery','mm'],function($,_mm){
	    var init = function(){
	    	onLoad();
	    	bindEvent();
	    };
	    var onLoad =function(){
	    	var keyword = _mm.getUrlParam('keyword');
	    	if(keyword){
	    		 $('#search-input').val(keyword);
	    	}
	    };
	    var bindEvent = function(){
	    	$('#search-btn').click(function(){
	    		     searchSubmit();	
	    	});
	    	$('#search-input').keyup(function(e){
	    		   if(e.keyCode===13){
	    		   	 searchSubmit();
	    		   }
	    	});
	    	
	    };
	  var searchSubmit = function(){
	    	var keyword = $.trim($('#search-input').val());
	    	if(keyword){
	    	window.location.href='./list.html?keyword='+keyword;
	    	}else{
	    		 _mm.goHome();
	    	}
	    };
	    
	    return{
	    	init:init
	    }
})
