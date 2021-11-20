var proxyPicture = function () {
    var imgObj = new Image()
    imgObj.onload = function () {
        setTimeout(function () {
            myImage().setSrc(imgObj.src)
        }, 2000)
    }
    return {
        setSrc: function (src) {
            imgObj.src = src
            myImage().setSrc('/Users/caomengdie/Documents/ps/1.同步学习文件/素材与结果文件/素材文件/第3章/笔.jpg')
        }
    }
}
var myImage = function () {
    var img = createElement()
    return {
        setSrc: function (src) {
            img.src = src
        }
    }
}
var createElement = (
    function () {
        var img
        return function () {
            if (!img) {
                img = document.createElement('img')
                document.body.appendChild(img)
            }
            return img
        }
    }
)()
proxyPicture().setSrc('/Users/caomengdie/Documents/ps/car.jpeg')
