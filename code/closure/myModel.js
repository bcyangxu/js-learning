// 闭包应用场景'
// 2.封装js模块
function myModel() {
	var msg = 'Hello World';

	function doSomething() {
		console.log('doSomething()' + msg.toUpperCase());
	}

	function doOtherthing() {
		console.log('doOthrtSomething()' + msg.toLowerCase())
	}
	
	return {
		doSomething: doSomething,
		doOtherthing: doOtherthing
	}
}

