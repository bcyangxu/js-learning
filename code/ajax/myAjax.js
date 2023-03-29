// 封装ajax函数，传入回调函数success，fail
function myAjax(url,success,fail) {
    // 1.创建XMLHttpRequest对象
    var xmlhttp = new XMLHttpRequest()
    // 2.设置请求参数
    xmlhttp.open('get',url,true)
    // 3.发送请求
    xmlhttp.send()
    // 4.注册事件
    xmlhttp.onreadystatechange = function () {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // 5. 服务端响应
            var data = JSON.parse(xmlhttp.responseText)
            console.log('数据返回成功:'+data)
            success && success(xmlhttp.responseText)
        } else {
            fail && fail(new Error('请求接口失败'))
        }
    }
}

// // 单次调用ajax
// myAjax('https://v1.hitokoto.cn/?encode=json&lang=cn',(res) => {
//     console.log(res)
// })