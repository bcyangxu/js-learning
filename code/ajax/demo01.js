// ajax 五步
// 1.创建XMLHttpRequest对象
var xmlhttp = new XMLHttpRequest()

// 2.设置请求参数 包括请求方法，请求的url
xmlhttp.open('get','https://v1.hitokoto.cn/?encode=text&lang=cn')

// 3.发送请求
xmlhttp.send()

// 4.注册事件 onreadystatechange事件，状态改变就会调用
// 如果要在数据完整请求回来时才调用，需要手动写一些判断逻辑
xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // 5.服务端响应
        console.log('请求成功：'+JSON.stringify(xmlhttp.responseText))
        document.getElementById('box').innerHTML = xmlhttp.responseText
    }
}