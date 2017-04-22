var FileUtils = require("../file-utils");
var $ = require("jquery");
function FileListBox(el, parent, onFileChange) {
    this.el = el;
    this.parent = parent;
    this.onFileChange = onFileChange;
    var _this = this;
    $(this.el).on("click", ".list-group-item", function () {
        $(_this.el).find(".active").removeClass("active");
        $(this).addClass("active");
        _this.onFileChange($(this).attr("data-item-name"));
    });

}

FileListBox.prototype.render = function () {
    if (this.parent) {
        FileUtils.listFiles(this.parent, function (files) {
            var ul = document.getElementById("file-list-box");
            var html = files.map(function (file) {
                return `<li class="list-group-item" data-item-name="${file}">
                        <img class="img-circle media-object pull-left" src="https://cdn4.iconfinder.com/data/icons/infy-basic-collection/53/user-48.png" width="32" height="32">
                        <div class="media-body">
                        <strong>${file}</strong>
                    <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    </li>`;
            }).join("");
            ul.innerHTML = `<li class="list-group-header"><input class="form-control" type="text" placeholder="Search for someone"></li>` + html;
        });
    }
};

FileListBox.prototype.setParent = function (parent) {
    this.parent = parent;
    this.render();
};

module.exports = FileListBox;