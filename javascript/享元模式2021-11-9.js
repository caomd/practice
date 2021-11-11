/********************享元模式************************
  * 上传文件*/
//1.内部状态 不因环境变化的uploadType  plgin flash 此处举例
//2.外部状态 受外部环境影响 文件名称 文件大小 
//剥离外部状态 上传功能add setExternalState 放到uploadManger 统一管理
var uploadManager = (function () {
    var uploadDataBase = {}
    return {
        add: function (id, uploadType, filename, filesize) {
            //如果已有uploadType不创建新的Uplod对象
            var flyWeightObj = createUploadFactory(uploadType)
            var dom = document.createElement('div')
            dom.innerHTML = '<span>文件名称：' + filename + '， 文件大小：' + filesize + '</span>' +
                '<button class="del">删除</button>'
            document.body.appendChild(dom)
            //创建class id是唯一的
            dom.querySelector('.del').onclick = function () {
                flyWeightObj.delFile(id)
            }
            uploadDataBase[id] = {
                fileName: filename,
                fileSize: filesize,
                dom: dom
            }
            return flyWeightObj
        },
        setExternalState: function (id, flyWeightObj) {
            var uploadData = uploadDataBase[id]
            //flyWeightObj 没有这些属性
            for (var i in uploadData) {
                flyWeightObj[i] = uploadData[i]
            }
        }
    }
})()
var Upload = function (uploadtype) {
    this.uploadtype = uploadtype
}
Upload.prototype.delFile = function (id) {
    uploadManager.setExternalState(id, this)
    if (this.fileSize < 3000) {
        console.log('删除文件')
        return this.dom.parentNode.removeChild(this.dom)
    }
    if (window.confirm('are you sure delete this file' + this.fileName + 'now?')) {
        console.log('sure delete this file ' + this.fileName)
        this.dom.parentNode.removeChild(this.dom)
    }
}
//工厂实例化对象
var createUploadFactory = (function () {
    var createFlyWeightObj = {}
    return function (uploadType) {
        if (createFlyWeightObj[uploadType]) {
            console.log('已存在不需创建')
            return createFlyWeightObj[uploadType]
        }
        return createFlyWeightObj[uploadType] = new Upload(uploadType)
    }
})()
var id = 0
//开始触发上传的动作startUpload函数
window.startUpload = function (uploadType, files) {
    for (var f = 0, file; file = files[f++];) {
        var uploadObj = uploadManager.add(++id, uploadType, file.fileName, file.fileSize)
        console.log(uploadObj, 'uploadObj')
    }
}
//测试
startUpload('plugin', [
    {
        fileName: '1.txt',
        fileSize: 1000
    },
    {
        fileName: '12.txt',
        fileSize: 3000
    },
    {
        fileName: '3.txt',
        fileSize: 3000
    }
])
startUpload('flash', [
    {
        fileName: '4.txt',
        fileSize: 4000
    },
    {
        fileName: '5.txt',
        fileSize: 5000
    },
    {
        fileName: '6.txt',
        fileSize: 6000
    }
])

//Java代码 对象池 并不是享元模式
        // public class Test {
        //     public static void main(String args[]){
        //         String a1 = new String('a').intern()
        //         String a2 = new String('a').intern()
        //         System.out.println(a1 === a1);//true
        //     }
        // }