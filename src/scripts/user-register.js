require(['./config'],function(config){
			require(['template','jquery','mm','user-service'],function(template,$,_mm,_user){
				  var init = function(){
				  	    template.loadFooter();
				  	    bindEvent();
				  };
				  var bindEvent = function(){
				  	    /*$('#username').blur(function(){
				  	    	    var username = $.trim($(this).val());
				  	    	    if(!username){
				  	    	    	   return;
				  	    	    }
				  	    	    _mm.checkUsername(value,function(res){
				  	    	    	   formError.hide();
				  	    	    },function(errMsg){
				  	    	    	formError.show("用户名已存在")
				  	    	    });
				  	   
				  	    });*/
				  	    $('#submit').click(function(){
				  	    	    submit();
				  	    });
				  	    $('.user-content').keyup(function(e){
				  	    	    if(e.keyCode===13){
				  	    	         submit();
				  	    	    }
				  	    })
				   };
				 var submit =function(){
				  	  	  var formData= {
				  	  	    	username         :  $.trim($('#username').val()),
				  	  	    	password         :  $.trim($('#password').val()),
				  	  	    	passwordConfirm  :  $.trim($('#password-confirm').val()),
				  	  	    	phone            :  $.trim($('#phone').val()),
				  	  	    	email            :  $.trim($('#email').val()),
				  	  	    	question         :  $.trim($('#question').val()),
				  	  	    	answer           :  $.trim($('#answer').val())
				  	  	       };
				  	  	  var validateResult= formValidate(formData);
				  	  	
				  	  	   if(validateResult.status){
				  	  	   	window.location.href='./result.html?type=register';
				  	  	   	    /* _user.register(formData,function(res){
				  	  	   	     	window.location.href='./result.html?type=register';
				  	  	   	     },function(errMsg){
				  	  	   	     	 formError.show(errMsg);
				  	  	   	     })*/
				  	  	   }else{
				  	  	   	  formError.show(validateResult.msg);
				  	  	   }
				  };
				 var formValidate = function(formData){
				 	   var result = {
				 	   	   status:false,
				 	   	    msg  : ''
				 	   };
				 	   
				 	     // 验证用户名是否为空
			        if(!_mm.validate(formData.username, 'require')){
			            result.msg = '用户名不能为空';
			            return result;
			        }
			        // 验证密码是否为空
			        if(!_mm.validate(formData.password, 'require')){
			            result.msg = '密码不能为空';
			            return result;
			        }
			        // 验证密码长度
			        if(formData.password.length < 6){
			            result.msg = '密码长度不能少于6位';
			            return result;
			        }
			         if(!_mm.validate(formData.passwordConfirm,'require')){
			        	  result.msg = '请再次输入密码';
			        	  return result;
			        }
			        // 验证两次输入的密码是否一致
			        if(formData.password !== formData.passwordConfirm){
			            result.msg = '两次输入的密码不一致';
			            return result;
			        }
			         if(!_mm.validate(formData.phone, 'require')){
			            result.msg = '手机号不能为空';
			            return result;
			        }
			        // 验证手机号
			        if(!_mm.validate(formData.phone, 'phone')){
			            result.msg = '手机号格式不正确';
			            return result;
			        }
			         if(!_mm.validate(formData.email, 'require')){
			            result.msg = '邮箱不能为空';
			            return result;
			        }
			        // 验证邮箱格式
			        if(!_mm.validate(formData.email, 'email')){
			            result.msg = '邮箱格式不正确';
			            return result;
			        }
			        // 验证密码提示问题是否为空
			        if(!_mm.validate(formData.question, 'require')){
			            result.msg = '提示问题不能为空';
			            return result;
			        }
			        // 验证答案是否为空
			        if(!_mm.validate(formData.answer, 'require')){
			            result.msg = '答案不能为空';
			            return result;
			        }
				 	
				  
				  
				 	   result.status=true;
				 	   result.msg   = '验证通过';
				 	   return result; 	   
				 };
				 var formError = {
				 	 show :function(msg){
				 	 	 $('.error-item').show().find('.err-msg').text(msg);
				 	 },
				 	 hide :function(){
				 	 	$('.error-item').hide().find('.err-msg').text('');
				 	 }
				 	
				 };
				 $(function(){
				   	   init();
				  })
				
			})
});