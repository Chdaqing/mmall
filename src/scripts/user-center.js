require(['./config'],function(config){
		require(['template',
		         'jquery',
		         'nav-side',
		         'user-center_data',
		         'mm',
		         'text!../templates/common/user-center-info.html'],function(template,$,navSide,data,_mm,templateIndex){
			
			var init = function(){
				template.load();
				  onLoad();
			};
			var onLoad = function(){
				 navSide.init({
				    name:'user-center'
				 });
				 loadUserInfo();
			};
			
			var loadUserInfo = function(){
                    var userHtml = _mm.renderHtml(templateIndex,data)
                    $('.panel-body').find('.loading').hide();
					$('.panel-body').html(userHtml);
		
			 };
			
			 $(function(){
			 	  init();
			 	    
			 });
		});

});
