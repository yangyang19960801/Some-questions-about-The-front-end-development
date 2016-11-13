function setCookie(key,value,time){
	var mydate =new Date();
	mydate.setDate(mydate.getDate()+time);
	document.cookie=key+"="+encodeURI(value)+";expires="+mydate.toGMTString();
}
function getCookie(key){
	var str=document.cookie;
	var arr=str.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr=arr[i].split("=");
		if(newArr[0]==key){
			return decodeURI(newArr[1]);
		}						
	};
}			
function removeCookie(key){
	setCookie(key,"",-1);
}