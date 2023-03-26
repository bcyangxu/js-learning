// setTimeout() 指定超时时执行的回调函数
setTimeout(function(){console.log('hello')},1000);

setTimeout(myFunction,1000);

function myFunction() {
	console.log('test')
}
// setInterval() 指定每个间隔执行的回调函数
setInterval(test,1000);

function test() {
	let d = new Date();
	console.log(d.getHours()+':'+d.getMinutes()+':'+d.getSeconds())
}

// 等待文件
function myDisPlay(some) {
	console.log(some);
}

function getFile(myCallback) {
	let req = new XMLHttpRequest();
	req.open('GET','https://v1.hitokoto.cn/?encode=json&lang=cn');
	req.onload = function() {
		if(req.status == 200){
			myCallback(this.responseText);
		}else{
			myCallback('Error'+req.status);
		}
	}
	req.send();
}

getFile(myDisPlay);