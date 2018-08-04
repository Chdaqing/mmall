define(function(){
return{
   cityInfo:{
   	 '北京':['北京'], 
   	 '上海':['上海'],
   	 '天津':['天津'],
   	 '重庆':['重庆'],
   	 '河北省':['石家庄','张家口','承德','秦皇岛','唐山','廊坊','保定','沧州','衡水'],
   	 '广东':['深圳','汕头','广州','惠州','佛山']
   	 
    },
   //获取所有省份
    getProvinces : function(){
    	 var provinces = [];
   	 for(var item in this.cityInfo){
   	 	 provinces.push(item);
   	     }
   	   return provinces;
     },
    //获取某省份的所有城市
    getCities:function(provinceName){
   	 return this.cityInfo[provinceName] || [];
     }
   }
})
