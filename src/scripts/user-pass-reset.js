require(['./config'],function(config){	
		require([
			     'template',
		         'jquery',
		         'mm'
		         ],function(template,$,_mm){
			var data = {
				 username:'',
				 question:'我是谁',
				 token: '',
				 answer:''
			};
			var formError = {
				show:function(msg){
					  $('.error-item').show().find('.err-msg').text(msg);
				},
				hide:function(){
					  $('.error-item').hide().find('.err-msg').text('');
				}
			};
			var init = function(){
				   template.loadFooter();
				   loadStepUsername();
			  	   bindEvent();
			  };
		     var bindEvent = function(){
			  	  $('#submit-username').click(function(){
			  	  	       var username = $.trim($('#username').val());
			  	  	       if(username){
			  	  	       	     //_user.getQuestion(username,function(res){
			  	  	       	     	    data.username = username;
			  	  	       	     //	    data.question = res;
			  	  	       	     	    loadStepQuestion();
			  	  	       	     	    
			  	  	       	     //},function(errMsg){
			  	  	       	     //	  formError.show(errMsg);
			  	  	       	    // })
			  	  	       	
			  	  	       }else{
			  	  	       	 formError.show('用户名不能为空');
			  	  	       }
			  	  });
			  	 $('#submit-question').click(function(){
			  	  	        var answer = $.trim($('#answer').val());
			  	  	        if(answer){
			  	  	        	     //_user.checkAnswer(answer,function(res){
			  	  	        	     //	  data.token=res;
			  	  	        	     	  loadStepPassword();
			  	  	        	   //  },function(errMsg){
			  	  	        	     //	   formError.show(errMsg);
			  	  	        	   //  })
			  	  	        }else{
			  	  	           formError.show('答案不能为空');
			  	  	        }
			  	  });
			  	$('#submit-password').click(function(){
			  	 	       var password = $.trim($('#password').val());
			  	 	       if(password && password.length>=6){
			  	 	       	       //_user.resetPassword({
			  	 	       	       //	   username:data.username,
			  	 	       	       //	   passwordNew:password,
			  	 	       	       //   token:data.token
			  	 	       	      //  },function(res){
			  	 	       	      	  window.location.href = './result.html?type=pass-reset';
			  	 	       	      // },function(errMsg){
			  	 	       	       //	  formError.show(errMsg);
			  	 	       	       //})
			  	 	       	  
			  	 	       }
			  	 	       else{
			  	 	       	 formError.show('请输入不能少于6位的密码');
			  	 	       }
			  	 });
			  };
		   
		      //加载用户名
		      var loadStepUsername = function(){
		      	   $('.step-username').show();
		
		      };
		      //加载问题
		      var loadStepQuestion = function(){
		      	   formError.hide();
		      	   $('.step-username').hide().siblings('.step-question').show()
		      	   .find('.question').text(data.question);
		      };
		      //输入新密码
		      var loadStepPassword = function(){
		      	   formError.hide();
		      	   $('.step-question').hide().siblings('.step-password').show();
		      };
		     $(function(){
		   	   init();
		   })
		   
		})
 });