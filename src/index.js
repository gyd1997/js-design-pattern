function loadImg(src) {
    let promise = new Promise(function(resolve, reject) {
        let img = document.createElement('img')
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function() {
            reject('图片加载失败')
        }
        img.src = src 
    })
    return promise
}

let src = 'https://img.alicdn.com/imgextra/i3/2732547402/O1CN01uEn8lG24YADXw7NbB_!!0-item_pic.jpg_80x80.jpg'

let result = loadImg(src)

result.then(function(img) {
    alert(`width: ${img.width}`)
    return img
}).then(function(img) {
    alert(`height: ${img.height}`)
    return img
}).then(function(img) {
    alert(img.src)
}).catch(function(ex) {
    alert(ex)
})