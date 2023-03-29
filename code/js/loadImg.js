function loadImage(file,success,fail) {
    const img = new Image()
    img.src = file
    img.onload = () => {
        // 图片加载成功
        success(img)
    }
    img.onerror = () => {
        fail(new Error('img load fail'))
    }
}

loadImage(
    '../img/tx.png',
    (img) => {
        console.log('图片加载成功')
        document.body.appendChild(img)
        img.style.border = 'solid 2px red'
    },
    (error) => {
        console.log('图片加载失败')
        console.log(error)
    }
)