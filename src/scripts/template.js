   define(['jquery',
           "text!../templates/common/header.html",
           "text!../templates/common/nav.html",
           "text!../templates/common/footer.html",
           'mm'
           ],function($,header,nav,footer,_mm){
	return {
		//加载公用模块
		load:function(){
			   
	            $('#header').html(_mm.renderHtml(header));
	           
	            $('#nav').html(_mm.renderHtml(nav));
              
                $('#footer').html(_mm.renderHtml(footer));
             },
         //加载footer模块
        loadFooter:function(){
               $('#footer').html(_mm.renderHtml(footer));
        }
	};
	
	
})
