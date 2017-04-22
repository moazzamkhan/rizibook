var FileUtils = require("../file-utils");

function FileContentBox(el, file) {
    this.el = el;
    this.file = file;
}

FileContentBox.prototype.render = function () {
    if(this.file) {
        var _this = this;
        FileUtils.readFile(this.file, function (data) {
            _this.el.innerHTML = "";
            CodeMirror(_this.el, {
                value: data,
                mode: "javascript",
                extraKeys: {
                    'Ctrl-Space': 'autocomplete'
                }
            });
        });
    }
};

FileContentBox.prototype.setFile = function (file) {
    this.file = file;
    this.render();
};

module.exports = FileContentBox;
