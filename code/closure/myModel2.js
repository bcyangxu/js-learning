(function() {
	// 私有数据
	var msg = 'Yangxu';
	
	function fn1() {
		console.log('fn1:'+ msg.toUpperCase());
	}
	
	function fn2() {
		console.log('fn2:' + msg.toLowerCase());
	}
	
	window.myModel = {
		fn1:fn1,
		fn2:fn2
	}
})()