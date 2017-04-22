var FileUtils = require("../file-utils");
var $ = require("jquery");

function FolderListBox(el, parent, onFolderChange) {
    this.el = el;
    this.parent = parent;
    this.onFolderChange = onFolderChange;
    var _this = this;
    $(this.el).on("click", ".nav-group-item", function () {
        $(_this.el).find(".active").removeClass("active");
        $(this).addClass("active");
        _this.onFolderChange($(this).attr("data-item-name"));
    });
}

FolderListBox.prototype.render = function () {
    if (this.parent) {
        var _this = this;
        FileUtils.listFiles(this.parent, function (files) {
            var html = files.map(function (file) {
                return `<span class="nav-group-item" data-item-name="${file}"><span class="icon icon-light-up"></span>${file}</span>`;
            }).join("");
            _this.el.innerHTML = `<h5 class="nav-group-title">Favorites</h5>` + html;
        });
    }
};

module.exports = FolderListBox;
