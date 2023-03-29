// 1.创建对象
var xmlhttp = new XMLHttpRequest()

// 2. 设置请求参数
xmlhttp.open('post','test.html')

// 使用post请求，需要添加http头
xmlhttp.setRequestHeader('Content-type','application/x-www-from-urlencoded')

// 3.发送请求
xmlhttp.send('name=test&age=21')

// 4.注册事件
xmlhttp.onreadystatechange = function () {
    // 5.服务端响应
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        alert(xmlhttp.responseText)
    }
}