require(['./config'],function(config){
	      require([
	      	       'jquery',
	               'template',
	               'header-ui',
	               'jquery.ui.slider'
	               ],function($,template,headerUi){
  	   	               template.load();
		                 $(function(){
		  	             headerUi.init();
			                var $slider = $('.banner').unslider({dots:true});
			               $('.banner-con .banner-arrow').click(function(){
			    	         var forward= $(this).hasClass('prev')?'prev':'next';
			   	               $slider.data('unslider')[forward]();
			             });
			       });
        });	
	
});

 


