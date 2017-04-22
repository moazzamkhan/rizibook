var FileUtils = require("../file-utils");
var TypeEditor = require("../type-editor");

function FileContentBox(el, file) {
    this.el = el;
    this.file = file;
}

FileContentBox.prototype.render = function () {
    if (this.file) {
        var _this = this;
        FileUtils.readFile(this.file, function (data) {
            _this.el.innerHTML = "";
            setUpEditor(_this.el, _this.file, data);
            // _this.el.innerHTML = data;
        });
    }
};

FileContentBox.prototype.setFile = function (file) {
    this.file = file;
    this.render();
};

function setUpEditor(el, file, data) {
    var mode = "";
    if (file.endsWith(".things.json")) {
        var content = JSON.parse(data);
        TypeEditor.render(el, content);
    } else {
        if (file.endsWith(".json") || file.endsWith(".js")) {
            mode = "javascript";
        } else if (file.endsWith(".md") || file.endsWith(".markdown")) {
            mode = "markdown";
        }
        CodeMirror(el, {
            value: data,
            mode: mode
        });
    }

}
module.exports = FileContentBox;
