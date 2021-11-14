var createXHR = function () {
    var xhr;
    try {
        xhr = new ActiveXObject('MSXML2.XMLHttp.6.0');
    } catch (e) {
        try {
            xhr = new ActiveXObject('MSXML2.XMLHttp.3.0');
        } catch (e) {
            xhr = new ActiveXObject('MSXML2.XMLHttp')
        }
    }
    return xhr;
}
var xhr = createXHR()

//重构
var createXHR2 = function () {
    var versions = ['MSXML2.XMLHttp.6.0ddd', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp']
    for (var i = 0, versions; versions = versions[i++];) {
        try {
            return new ActiveXObject(version);
        } catch (e) {

        }
    }
};
var xhr = createXHR()

//提前让函数退出代替嵌套条件分支