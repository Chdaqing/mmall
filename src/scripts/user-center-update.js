require(['./config'],function(config){			
			require(['template',
			        'jquery',
			        'nav-side',
			        'user-center_data',
			        'mm',
			        'text!../templates/common/user-info.html'
			        ],function(template,$,navSide,userInfo,_mm,templateIndex){
				
				var init = function(){
					  template.load();
					  onLoad();
					  bindEvent();
				};
				var onLoad = function(){
					 navSide.init({
					     name:'user-center'
					 });
					 loadUserInfo();
					
				};
				var bindEvent = function(){
					 $(document).on('click','.btn-submit',function(){
					 	  var userInfo = {
					 	  	     phone     : $.trim($('#phone').val()),
					 	  	     email     : $.trim($('#email').val()),
					 	  	     question  : $.trim($('#question').val()),
					 	  	     answer    : $.trim($('#answer').val())
					 	  },
					 	  validateResult = validateFrom(userInfo);
					 	 
					 	  if(validateResult.status){
					 	  	console.log(userInfo)
					 	  	     //_user.updateUserInfo(userInfo,function(res,msg){
					 	  	     	  //  _mm.successTips(msg);
					 	  	     	    window.location.href='./user-center.html';
					 	  	     //},function(errMsg){
					 	  	     //	 _mm.errorTips(errMsg);
					 	  	    // })
					 	  }else{
					 	  	     _mm.errorTips(validateResult.msg);
					 	  }
					 });
				};
				var validateFrom = function(formData){
					var result = {
						 status :false,
						 msg    :''
					};
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
			            result.msg = '密码提示问题不能为空';
			            return result;
			        }
			        // 验证密码提示问题答案是否为空
			        if(!_mm.validate(formData.answer, 'require')){
			            result.msg = '密码提示问题答案不能为空';
			            return result;
			        }
				 	   result.status=true;
				 	   result.msg   = '验证通过';
				 	   return result; 	    
					
				};
				
				var loadUserInfo = function(){
                        var userHtml = _mm.renderHtml(templateIndex,userInfo)
						$('.panel-body').find('.loading').hide();
						$('.panel-body').html(userHtml);				
				 };
			     $(function(){
			     	 init();
			     })
			});
});