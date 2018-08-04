define(['jquery','text!../templates/common/nav-side.html','mm'],function($,templateNavSide,_mm){
		 var data = {
	  	 	 name:'',
	  	 	 navList:[
	  	 	       {name : 'user-center', desc : '个人中心', href: './user-center.html'},
                   {name : 'order-list', desc : '我的订单', href: './order-list.html'},
                   {name : 'user-pass-update', desc : '修改密码', href: './user-pass-update.html'},
                   {name : 'about', desc : '关于MMall', href: './about.html'}
	  	 	 ]
	  	 };
	  
	var init = function(option){  
	  
	     var option = $.extend({},data,option);
	     renderNav(option);
	};
	//渲染导航菜单
 var renderNav =function(option){
		  for(var i = 0 ,iLength = option.navList.length;i<iLength;i++){
		   	            if(option.navList[i].name===option.name){
		   	            	  option.navList[i].isActive=true;	   	            	 
		   	            }
		   }
		  renderHtml(option);
	};

var renderHtml= function(option){	
				var navSideHtml=_mm.renderHtml(templateNavSide,option)
				
        $('.nav-side').html(navSideHtml);
       
        
 };
   return {
   	  init:init
   }
});
