document.getElementById('btn').onclick = function() {
    var ajax = new XMLHttpRequest()
    ajax.open('get','https://v1.hitokoto.cn/?encode=json&lang=cn')
    ajax.send()
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200) {
            console.log(ajax.responseText)

            var obj = JSON.parse(ajax.responseText)

            console.log(obj)
            text = obj['hitokoto']
            document.getElementById('box').innerHTML = text
        }
    }
}