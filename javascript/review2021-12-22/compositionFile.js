/*
* @Author: caomd
* @Date: 2021-12-22 18:47:15
 * @Last Modified by: caomd
 * @Last Modified time: 2021-12-22 18:56:56
*/

var Folder = function (name) {
    this.name = name
    this.files = []
}
Folder.prototype.add = function (file) {
    this.files.push(file)
    console.log(this.name + 'add file' + file.name)
}
Folder.prototype.scan = function () {
    console.log(this.name)
    for (var i = 0; i < this.files.length; i++) {
        var file = this.files[i]
        file.scan()
    }
}
var File = function (name) { this.name = name }
File.prototype.add = function () { throw new Error('not add file') }
File.prototype.scan = function () {
    console.log(this.name)
}
var folder = new Folder('folder')
var folder2 = new Folder('folder2')
var fold3 = new Folder('folder3')
folder.add(folder2)
folder.add(fold3)
var file1 = new File('file1')
var file2 = new File('file2')
fold3.add(file2)
folder.add(file1)
folder.scan()