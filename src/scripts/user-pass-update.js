require(['./config'],function(config){		
		require(['template','jquery','mm','nav-side','user-service'],function(template,$,_mm,navSide,_user){
			var init = function(){
				template.load();
				onLoad();
				bindEvend(); 
			};
			var onLoad = function(){
				  navSide.init({
				     name:'user-pass-update'
				     });
			};
			var bindEvend = function(){
				$(document).on('click','.btn-submit',function(){
				   var userInfo = {
				   	      password:$.trim($('#password').val()),
				   	      passwordNew:$.trim($('#password-new').val()),
				   	      passwordConfirm:$.trim($('#password-confirm').val())
				   },
				   validateResult=validateFrom(userInfo);
				   if(validateResult.status){
				   	        alert('更新密码成功！');
				   	          // _user.updatePassword({
				   	           //	     passwordOld:userInfo.password,
				   	           //	     passwordNew:userInfo.passwordNew
				   	           //},function(res,msg){
				   	           //	    _mm.successTips(msg);   
				   	          // },function(errMsg){
				   	           //	  _mm.errorTips(errMsg); 
				   	           //})
				   }else{
				   	 _mm.errorTips(validateResult.msg);
				   }   
				});
			    
			};
			var validateFrom = function(formDate){
					var result = {
						  status:false,
						  msg   :''
					};
					if(!_mm.validate(formDate.password,'require')){
						  result.msg='原密码不能为空';
						  return result;
					}
					if(!_mm.validate(formDate.passwordNew,'require')){
						  result.msg='新密码不能为空';
						  return result;
					}
					if(formDate.passwordNew.length<6){
						  result.msg='新密码不能少于6位';
						  return result;
					}
					if(!_mm.validate(formDate.passwordConfirm,'require')){
						  result.msg='请再次输入密码';
						  return result;
					}
					if(formDate.passwordConfirm!==formDate.passwordNew){
						   result.msg='两次密码输入不一致';
						   return result;
					}
					result.status=true;
					result.msg='验证通过';
					return result;
			};
			
		  $(function(){
		  	    init();
		  })
			
		})
});
