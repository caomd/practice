var del = function (obj) {
    var ret
    if (!obj.isReadOnly) {
        if (obj.isFolder) {
            ret = deleteFolder(obj)
        } else if (obj.isFile) {
            ret = deleteFile(obj)
        }
    }
    return ret;
}
//重构后的del函数
var del = function (obj) {
    var ret;
    if (obj.isReadOnly) {//反转if表达式
        return
    }
    if (obj.isFolder) {
        ret = deleteFolder()
    }
    if (obj.isFile) {
        ret = deleteFile()
    }
}