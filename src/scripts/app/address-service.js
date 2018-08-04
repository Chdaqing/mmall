define(['./data/address_data'],function(addressData){
	return{
		//获取地址列表
		getAddressList:function(resolve,reject){
			  	    if(addressData&& typeof resolve=='function'){
			  	    		 resolve(addressData);    
			  	    }else if(typeof reject == 'function'){
			  	    		 reject('出错了'); 	   
			  	    }
		},
		//添加收件人信息
	   save:function(addressInfo,resolve,reject){
           addressInfo.id='00000'+Math.round(Math.random()*10)+Math.round(Math.random()*10);
           addressData.list.push(addressInfo);
          
          if(typeof resolve=='function'){
          	  resolve();
          }
		},
		//获取收件人信息
		getAddress:function(shoppingId,resolve,reject){
			     var data = addressData.list;
			         if(data){
			    	     for(var i = 0,length=data.length;i<length;i++){
			    	   	      if(data[i].id===shoppingId){
			    	   	      	   if(typeof resolve=='function'){
			    	   	      	   	     resolve(data[i]);
			    	   	      	   	     return;
			    	   	      	    }
			    	   	       }          
			    	      }
			    	  }else if(typeof reject==='function'&& data==null){
			    		  reject('没有获取到数据')
			    	  }
		},
		//更新收件人信息
		update:function(receiverInfo,resolve,reject){
		     	  var data= addressData.list;
		     	 for(var i=0,length=data.length;i<length;i++){
		     	 	     if(receiverInfo.id===data[i].id){
		     	 	     	    data[i]= receiverInfo;
		     	 	     	   typeof resolve=='function' && resolve(data);
		     	 	     }    
		     	 }    
		},
		//删除收件人信息
		deleteAddress:function(shoppingId,resolve,reject){
			 var data= addressData.list;
		     	 for(var i=0,length=addressData.list.length;i<length;i++){
		     	 	     if(addressData.list[i].id===shoppingId){
		     	 	     	
		     	 	     	    addressData.list.splice(i,1);
		     	 	     	   typeof resolve=='function' && resolve(data);
		     	 	     }    
		     	 }    
			      
		}
	}
})
