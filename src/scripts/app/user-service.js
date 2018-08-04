define(['jquery','mm'],function($,_mm){
	//用户登录
	var login=function(userInfo,selove,reject){
		_mm.request({
			   url:_mm.getServerUrl('/user/login.do'),
			   data:userInfo,
			   mothod:'POST',
			   success:selove,
			   error:reject
		})
	 	
	};
	  //检查用户名是否存在
	var checkUsername = function(username,reslove,reject){
		   _mm.request({
		   	  url:_mm.getServerUrl('/user/check_valid.do'),
		   	  data:{
		   	  	 type :'username',
		   	  	 str  : username
		   	  },
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
		   })
	};
	//用户注册
	var resgiter = function(userInfo,reslove,reject){
		_mm.request({
		   	  url:_mm.getServerUrl('/user/register.do'),
		   	  data:userInfo,
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
		   })
		
	};
	//获取用户信息
	var getUserInfo = function(reslove,reject){
		_mm.request({
			  url:_mm.getServerUrl('/user/register.do'),
		   	  data:userInfo,
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
		})
	};
	//更新用户信息
	var updateUserInfo = function(userInfo,reslove,reject){
		_mm.request({
			  url:_mm.getServerUrl('/user/update_information.do'),
		   	  data:userInfo,
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
		})
	};
	//更新密码
	var updatePassword = function(userInfo,reslove,reject){
		_mm.request({
			  url:_mm.getServerUrl('/user/update_information.do'),
		   	  data:userInfo,
		   	  mothod:'POST',
		   	  success:reslove,
		   	  reject:reject
		})
		
	}
	
	return{
		login:login,
		checkUsername:checkUsername,
		resgiter :resgiter ,
		getUserInfo:getUserInfo,
		updateUserInfo:updateUserInfo,
		updatePassword:updatePassword
	}	
})
