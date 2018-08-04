require(['./config'],function(config){
		require(['template','jquery','mm'],function(template,$,_mm){
			template.load();
			 var type =  _mm.getUrlParam('type');
			 if(type ==='register'){
			 	   $('.register-success').show();
			 }else if(type==='pass-reset'){
			 	   $('.pass-reset-success').show();
			 }else if(type === 'cart-add'){
			 	   $('.cart-add-success').show();
			 }else if(type === 'default'){
			 	   $('.default-success').show();
			 }
		})
});