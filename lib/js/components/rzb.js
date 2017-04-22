var FolderListBox = require("./folder-list-box");
var FileListBox = require("./file-list-box");
var FileContentBox = require("./file-content-box");
var path = require("path");

function RZB(el, root) {
    this.el = el;
    this.root = root;
    this.folderListBox = null;
    this.fileContentBox = null;
    this.fileListBox = null;
    this.folder = null;
    this.file = null;
}

RZB.prototype.render = function () {
    var _this = this;
    this.folderListBox = new FolderListBox(document.getElementById("folder-list-box"), this.root, function (folder) {
        _this.folder = folder;
        _this.fileListBox.setParent(path.join(_this.root, folder));
    });
    this.fileListBox = new FileListBox(document.getElementById("file-list-box"), null, function (file) {
        _this.file = file;
        _this.fileContentBox.setFile(path.join(_this.root, _this.folder, file));
    });
    this.fileContentBox = new FileContentBox(document.getElementById("file-content-box"), null);
    this.fileContentBox.render();
    this.fileListBox.render();
    this.folderListBox.render();
};

module.exports = RZB;
