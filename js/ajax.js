var text;
function ajax(json){
	var xhr = new XMLHttpRequest() ? new XMLHttpRequest() : new ActiveObject("Microsoft.XMLHTTP"),
		method = json.method || 'GET',
		data = json.data || '',
		success = json.success,
		async = json.async || 'false',
		error = json.error,
		url = json.url
		if(method.toUpperCase() === "GET"){
			url += "?"+data+"&"+new Date().getTime();
			xhr.open(method,url,async);
			xhr.send(null);
		}else{
			xhr.open(method,url,async);
			xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
			xh.send(data);
		}
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status >= 200 && xhr.status < 300){
					// text = xhr.responseText;
					success(xhr.responseText);
					// console.log(xhr.responseText);
				}else{
					error && error();
				}
			}
		}
}
var link = [];
var imgURL = [];
var title = [];
var description = [];
var post = [];
var type = [];
var typeColor = [];
var news = {
	url: "/new?num=4",
  	method: "GET",
  	success: function(res) {
  		var num = news.url.replace(/[^0-9]/ig,"");
  		var a = JSON.parse(res);
  		for(var i = 0 ; i < num; i++){
  			left[i].src = a[i].imgURL;
  			tit[i].innerText = a[i].title;
 			des[i].innerText = a[i].description.substr(0,24);
 			post[i].innerText = a[i].post.toString().substr(0,3)+"跟帖";
  		}
  		ct.innerText = a[0].title;
  },
  	async:true
}

ajax(news);

// console.log(123);
