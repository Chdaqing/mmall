require(['./config'],function(config){		
		require([
			    'jquery',
		         'template',
		         'mm',
		         'user-service'
		         ],function($,template,_mm,_user){
		        
		  	    var init = function(){
		  	    	 template.loadFooter();
		  	   	     bindEvent();
		  	    };
		        var bindEvent = function(){
		          
		         //登录按钮的点击
		            $('#submit').click(function(){
		                    submit(); 
		            });
		            $('.user-content').keyup(function(e){
		                   if(e.keyCode===13){
		                    submit();
		                   }
		            });
		         };
		        //提交
		         var submit = function(){
		         var formData={
		           username:$.trim($('#username').val()),
		           password:$.trim($("#password").val())
		         };
		         
		        var validateResult = formValidate(formData);
		         
		            if(validateResult.status){
		            	alert("ok");
		            	 window.location.href='../templates/index.html';
		                   /*_user.login(formData,function(){
		                    window.location.href=_mm.getUrlParam('redirect') || '../templates/index.html';
		                    },function(errMsg){
		                    	formData.show(errMsg);
		                    });*/
		                  
		            }else{
		               formError.show(validateResult.msg);
		
		            }
		        };
		         //表单字段的验证
		        var formValidate = function(formData){
		           var result = {
		                 status:false,
		                 msg:''
		           };
		            if(!_mm.validate(formData.username,'require')){
		                  result.msg='用户名不能为空';
		                  return result;
		            }
		            if(!_mm.validate(formData.password,"require")){
		                 result.msg= '密码不能为空';
		                return result;
		            }
		            result.status = true;
		            result.msg    = '验证通过';
		            return result;
		  
		        };
		   
		      //表单里的错误提示
		       var formError = {
		              show:function(msg){
		                $('.error-item').show().find('.err-msg').text(msg);
		              },
		              hide:function(){
		                $('.error-item').hide().find('.err-msg').text('')
		              }
		      };
		     $(function(){
		     	init();
		     })
		})
});